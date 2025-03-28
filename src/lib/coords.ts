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

export { convertCoords, convertIndex };
export type { Coords };
