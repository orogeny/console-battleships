import { convertCoords, convertIndex, Coords } from "../lib/coords";
import { Fleet } from "../ships";
import { getDimensions } from "./get_dimensions";
import { setupPlayer } from "./setup_player";

type Game = {
  dimensions: Coords;
  players: [string, string];
  fleets: [Fleet, Fleet];
  toCoords: (index: number) => Coords;
  toIndex: (coords: Coords) => number;
};

async function setupGame() {
  const game = {} as Game;

  const dimensions = await getDimensions();

  const player0 = await setupPlayer(game.dimensions, 0);
  const player1 = await setupPlayer(game.dimensions, 1);

  game.dimensions = dimensions;

  game.players = [player0.name, player1.name];
  game.fleets = [player0.fleet, player1.fleet];

  game.toCoords = convertIndex(dimensions);
  game.toIndex = convertCoords(dimensions);

  return game;
}

export { setupGame };
export type { Game };
