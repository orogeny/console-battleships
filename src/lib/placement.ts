import { Coords } from "./coords";
import { Result } from "./result";

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

function parsePlacement(text: string): Result<Placement, Error> {
  const parsed = text.split(/(?:[^0-9hv]+)/);

  if (parsed.length === 3) {
    const [cx, cy, co] = parsed;

    const x = parseInt(cx, 10);
    const y = parseInt(cy, 10);

    const orientation = co.toLowerCase();

    if (
      !isNaN(x) &&
      !isNaN(y) &&
      (orientation === "h" || orientation === "v")
    ) {
      return { data: { position: [x, y], orientation }, error: null };
    }
  }

  return {
    data: null,
    error: new Error(`Unable to parse placement from "${text}"`),
  };
}

export { parsePlacement, placeShip };
export type { Placement };
