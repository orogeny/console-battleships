import { Coords, parseCoords } from "../lib/coords";
import { Result } from "../lib/result";
import { askQuestion } from "../ui/ask_question";

async function getDimensions(): Promise<Result<Coords, Error>> {
  const { data, error } = await askQuestion(
    "Enter board dimensions (min 4 x 4):",
  );

  if (error) return { data: null, error };

  console.log(`We accepted answer: ${data}`);

  const { data: coords, error: unparsed } = parseCoords(data);

  if (unparsed) return { data: null, error: unparsed };

  console.log(`Answer was parsed to: ${coords}`);

  const [width, height] = coords;

  if (width < 4 || height < 4) {
    console.log(`Rejected board of size ${width} x ${height}`);
    return {
      data: null,
      error: new Error("Board must be min of 4 x 4 squares"),
    };
  }

  console.log(`We accepted board size ${width} x ${height}`);

  return { data: coords, error: null };
}

export { getDimensions };
