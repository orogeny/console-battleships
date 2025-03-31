import { convertCoords, Coords } from "../lib/coords";
import { Result } from "../lib/result";
import { intersection } from "../lib/utils";
import { Vessel } from "../ships";
import { placeVessel } from "./place_vessel";

async function placeShip(
  dimensions: Coords,
  fleet: Map<string, Set<number>>,
  vessel: Vessel,
): Promise<Result<Set<number>, Error>> {
  const [width, height] = dimensions;

  const toIndex = convertCoords(dimensions);

  const { data, error } = await placeVessel(vessel.name, vessel.length);

  if (error) {
    return { data: null, error };
  }

  const outside = data.find(([x, y]) => x >= width || y >= height);

  if (outside) {
    return {
      data: null,
      error: new Error(`Coords (${outside}) are outside the board`),
    };
  }

  const indices = new Set(data.map(toIndex));

  // const overlap = Array.from(fleet).find(
  //   ([_, squares]) => squares.intersection(indices).size > 0,
  // );

  // HACK: Shim for Set function - NOT added to prototype
  const overlap = Array.from(fleet).find(
    ([_, squares]) => intersection(squares, indices).size > 0,
  );

  if (overlap) {
    return { data: null, error: new Error(`This overlaps ${overlap[0]}`) };
  }

  return { data: indices, error: null };
}

export { placeShip };
