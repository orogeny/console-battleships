import { parsePlacement, Placement } from "./placement";

describe("parse placement", () => {
  test.each([
    ["1 2 h", { position: [1, 2], orientation: "h" }],
    ["2 1 v", { position: [2, 1], orientation: "v" }],
  ])(`should parse "%s" to placement`, (text, expected: Placement) => {
    const { data, error } = parsePlacement(text);

    expect(error).toBeNull();
    expect(data).toEqual(expected);
  });

  test.each([["1 2 x"], ["1 h 2"]])(
    `should fail parsing placement from "%s`,
    (text) => {
      const { data, error } = parsePlacement(text);

      expect(data).toBeNull();
      expect(error).toBeInstanceOf(Error);
    },
  );
});
