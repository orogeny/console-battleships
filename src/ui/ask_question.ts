import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";
import { parseError, type Result } from "../lib/result";

async function askQuestion(question: string): Promise<Result<string, Error>> {
  const reader = createInterface({ input: stdin, output: stdout });

  const text = question.endsWith(" ") ? question : question + " ";

  try {
    const answer = await reader.question(text);

    return { data: answer, error: null };
  } catch (err) {
    const error = parseError(err, "Unable to process user input");

    return { data: null, error };
  } finally {
    reader.close();
  }
}

export { askQuestion };
