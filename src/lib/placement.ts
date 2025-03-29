import { Coords } from "./coords";

type Placement = {
  position: Coords;
  orientation: "h" | "v";
};

function placeShip(location: Placement, length: number) {
  const [x, y] = location.position;

  if (location.orientation === "h") {
    return Array.from({ length }, (_, i) => [x + i, y]);
  }

  return Array.from({ length }, (_, i) => [x, y + i]);
}

export { placeShip };
export type { Placement };
