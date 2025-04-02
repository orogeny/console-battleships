import { Coords } from "./coords";

function validateCoords(dimensions: Coords) {
  const [width, height] = dimensions;

  return function (coords: Coords) {
    const [x, y] = coords;

    return x >= 0 && x < width && y >= 0 && y < height;
  };
}

export { validateCoords };
