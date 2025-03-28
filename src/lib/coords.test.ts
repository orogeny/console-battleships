import { type Coords } from "./coords";

describe("coords tuple", () => {
  test("should create coords", () => {
    const position: Coords = [3, 4];

    expect(position[0]).toBe(3);
    expect(position[1]).toBe(4);
  });
});
