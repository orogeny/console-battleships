import { Coords } from "../lib/coords";
import { VESSELS } from "../ships";
import { askQuestion } from "../ui/ask_question";
import { placeFleet } from "./place_fleet";

type Player = {
  name: string;
  fleet: Map<string, Set<number>>;
};

function english(n: number) {
  return n === 0 ? "first" : "second";
}

async function setupPlayer(dimensions: Coords, playerNumber: number) {
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

  player.fleet = await placeFleet(dimensions, VESSELS);

  return player;
}

export { setupPlayer };
export type { Player };
