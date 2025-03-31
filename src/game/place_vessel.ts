import { Coords } from "../lib/coords";
import { parsePlacement, positionShip } from "../lib/placement";
import { Result } from "../lib/result";
import { askQuestion } from "../ui/ask_question";

async function placeVessel(
  name: string,
  length: number,
): Promise<Result<Coords[], Error>> {
  const { data, error } = await askQuestion(
    `Enter position of ${name} (x y h|v):`,
  );

  if (error) return { data: null, error };

  const { data: placement, error: unparsed } = parsePlacement(data);

  if (unparsed) return { data: null, error: unparsed };

  const squares = positionShip(placement, length);

  return { data: squares, error: null };
}

export { placeVessel };
