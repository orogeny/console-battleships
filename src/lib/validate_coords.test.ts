import { Coords } from "./coords";
import { validateCoords } from "./validate_coords";

describe("validate coordinates", () => {
  const dimensions: Coords = [5, 6];

  test("should confirm coords are on board", () => {
    const onBoard = validateCoords(dimensions);

    expect(onBoard([0, 0])).toBe(true);
    expect(onBoard([4, 5])).toBe(true);
  });

  test("should identify coordinates not on board", () => {
    const onBoard = validateCoords(dimensions);

    expect(onBoard([-1, 0])).toBe(false);
    expect(onBoard([0, -1])).toBe(false);
    expect(onBoard([5, 5])).toBe(false);
    expect(onBoard([4, 6])).toBe(false);
  });
});
