import { Placement, placeShip } from "./placement";

describe("place ships", () => {
  test("should place short ship horizontally", () => {
    const location: Placement = { position: [1, 2], orientation: "h" };

    expect(placeShip(location, 1)).toEqual([[1, 2]]);
  });

  test("should place short ship vertically", () => {
    const location: Placement = { position: [3, 1], orientation: "v" };

    expect(placeShip(location, 1)).toEqual([[3, 1]]);
  });

  test("should place long ship horizontally", () => {
    const location: Placement = { position: [0, 0], orientation: "h" };

    expect(placeShip(location, 2)).toEqual([
      [0, 0],
      [1, 0],
    ]);
  });

  test("should place long ship vertically", () => {
    const location: Placement = { position: [9, 7], orientation: "v" };

    expect(placeShip(location, 2)).toEqual([
      [9, 7],
      [9, 8],
    ]);
  });
});
