import { convertCoords, type Coords } from "./coords";

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
