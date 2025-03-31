import { askQuestion } from "../ui/ask_question";

type Player = {
  name: string;
};

function english(n: number) {
  return n === 0 ? "first" : "second";
}

async function setupPlayer(playerNumber: number) {
  const player = {} as Player;

  while (player.name === undefined) {
    const { data, error } = await askQuestion(
      `Enter ${english(playerNumber)} player's name:`,
    );

    if (error) {
      console.log(`Oops... ${error.message}`);
    } else if (data.length === 0) {
      console.log(`Oops... player's name is required`);
    } else {
      player.name = data;
    }
  }

  return player;
}

export { setupPlayer };
export type { Player };
