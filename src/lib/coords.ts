type Coords = [x: number, y: number];

type Placement = {
  position: Coords;
  orientation: "h" | "v";
};

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

function placeShip(location: Placement, length: number) {
  const [x, y] = location.position;

  if (location.orientation === "h") {
    return Array.from({ length }, (_, i) => [x + i, y]);
  }

  return Array.from({ length }, (_, i) => [x, y + i]);
}

function parseCoords(text: string) {
  return text.split(/(?:\D+)/).map((t) => parseInt(t, 10)) as Coords;
}

export { convertCoords, convertIndex, parseCoords, placeShip };
export type { Coords, Placement };
