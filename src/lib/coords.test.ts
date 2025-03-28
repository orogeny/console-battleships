import {
  convertCoords,
  convertIndex,
  parseCoords,
  type Coords,
} from "./coords";

describe("coords tuple", () => {
  test("should create coords", () => {
    const position: Coords = [3, 4];

    expect(position[0]).toBe(3);
    expect(position[1]).toBe(4);
  });

  test("should return Coords converter given board dimensions", () => {
    const dimensions: Coords = [4, 5];

    const toIndex = convertCoords(dimensions);

    expect(toIndex).not.toBeNull();
  });
});

describe("convert coords to index", () => {
  const dimensions: Coords = [4, 5];
  const toIndex = convertCoords(dimensions);

  test.each([
    [[0, 0], 0],
    [[0, 1], 4],
    [[3, 4], 19],
  ])(`should convert coords(%o) -> index: %i`, (coords: Coords, expected) => {
    expect(toIndex(coords)).toBe(expected);
  });
});

describe("convert index to coords", () => {
  const dimensions: Coords = [5, 10];
  const toCoords = convertIndex(dimensions);

  test.each([
    [0, [0, 0]],
    [22, [2, 4]],
    [49, [4, 9]],
  ])(`should convert index: %i -> %o`, (index, expected: Coords) => {
    expect(toCoords(index)).toEqual(expected);
  });
});

describe("parse coords", () => {
  test.each([
    ["1 2", [1, 2]],
    ["10,3", [10, 3]],
    ["2x3", [2, 3]],
    ["5 x 4", [5, 4]],
  ])(`should parse "%s" to coordinates %o`, (text, expected: Coords) => {
    expect(parseCoords(text)).toEqual(expected);
  });
});
