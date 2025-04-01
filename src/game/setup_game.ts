import { convertCoords, convertIndex, Coords } from "../lib/coords";
import { getDimensions } from "./get_dimensions";

type Game = {
  dimensions: Coords;
  toCoords: (index: number) => Coords;
  toIndex: (coords: Coords) => number;
};

async function setupGame() {
  const game = {} as Game;

  while (game.dimensions === undefined) {
    const { data: dimensions, error } = await getDimensions();

    if (error) {
      console.log(`Oops... ${error.message}`);
    } else {
      game.dimensions = dimensions;
      game.toCoords = convertIndex(dimensions);
      game.toIndex = convertCoords(dimensions);
    }
  }
  return game;
}

export { setupGame };
export type { Game };
