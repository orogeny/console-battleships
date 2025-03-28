type Coords = [x: number, y: number];

function convertCoords(dimensions: Coords) {
  const [width] = dimensions;

  return function (coords: Coords) {
    const [x, y] = coords;

    return y * width + x;
  };
}

export type { Coords };
export { convertCoords };
