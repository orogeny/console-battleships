import { Coords } from "../lib/coords";
import { getDimensions } from "./get_dimensions";

type Game = {
  dimensions: Coords;
};

async function setupGame() {
  const game = {} as Game;

  while (game.dimensions === undefined) {
    const { data, error } = await getDimensions();

    if (error) {
      console.log(`Oops... ${error.message}`);
    } else {
      game.dimensions = data;
    }
  }
  return game;
}

export { setupGame };
export type { Game };
