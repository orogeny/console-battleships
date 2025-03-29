import { Result } from "./result";

type Coords = [x: number, y: number];

function convertCoords(dimensions: Coords) {
  const [width] = dimensions;

  return function (coords: Coords) {
    const [x, y] = coords;

    return y * width + x;
  };
}

function convertIndex(dimensions: Coords) {
  const [width] = dimensions;

  return function (index: number) {
    const x = index % width;
    const y = Math.floor(index / width);

    return [x, y];
  };
}

function parseCoords(text: string): Result<Coords, Error> {
  const parsed = text.split(/(?:\D+)/);

  if (parsed.length === 2) {
    const x = parseInt(parsed[0], 10);
    const y = parseInt(parsed[1], 10);

    if (!isNaN(x) && !isNaN(y)) {
      return { data: [x, y], error: null };
    }
  }

  return {
    data: null,
    error: new Error(`Unable to parse coordinates from "${text}"`),
  };
}

export { convertCoords, convertIndex, parseCoords };
export type { Coords };
