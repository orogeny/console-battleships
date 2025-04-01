import { Coords, parseCoords } from "../lib/coords";
import { Result } from "../lib/result";
import { askQuestion } from "./ask_question";

async function inputCoords(question: string): Promise<Result<Coords, Error>> {
  const { data: text, error: inputError } = await askQuestion(question);

  if (inputError) return { data: null, error: inputError };

  const { data: coords, error: parseError } = parseCoords(text);

  if (parseError)
    return {
      data: null,
      error: new Error(`Unable to parse coordinates from "${text}"`),
    };

  return { data: coords, error: null };
}

export { inputCoords };
