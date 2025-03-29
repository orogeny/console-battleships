import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

async function askQuestion(question: string) {
  const reader = createInterface({ input: stdin, output: stdout });

  const text = question.endsWith(" ") ? question : question + " ";

  try {
    return await reader.question(text);
  } finally {
    reader.close();
  }
}

export { askQuestion };
