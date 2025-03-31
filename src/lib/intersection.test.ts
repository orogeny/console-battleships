import { intersection } from "./utils";

describe("Set intersection shim", () => {
  test("should return empty set when no common elements exist", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([4, 5, 6]);

    const c = intersection(a, b);

    expect(c.size).toBe(0);
  });

  test("should return all common elements", () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([4, 3, 1]);

    const c = intersection(a, b);

    expect(c.size).toBe(2);
    expect(c.has(1)).toBe(true);
    expect(c.has(3)).toBe(true);
  });
});
