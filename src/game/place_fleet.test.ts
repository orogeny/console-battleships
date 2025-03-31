import { Coords } from "../lib/coords";
import { VESSELS } from "../ships";
import { askQuestion } from "../ui/ask_question";
import { placeFleet } from "./place_fleet";

jest.mock("../ui/ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("place fleet", () => {
  test("should place whole fleet", async () => {
    mockAskQuestion
      .mockResolvedValueOnce({ data: "0 0 h", error: null })
      .mockResolvedValueOnce({ data: "1 1 v", error: null })
      .mockResolvedValueOnce({ data: "3 1 v", error: null })
      .mockResolvedValueOnce({ data: "0 2 h", error: null })
      .mockResolvedValueOnce({ data: "2 1 v", error: null })
      .mockResolvedValueOnce({ data: "2 2 h", error: null })
      .mockResolvedValueOnce({ data: "2 3 v", error: null });

    const dimensions: Coords = [4, 4];

    const fleet = await placeFleet(dimensions, VESSELS);

    expect(fleet).toEqual(
      new Map([
        ["Carrier", new Set([0, 1, 2, 3])],
        ["Destroyer 1", new Set([5, 9, 13])],
        ["Destroyer 2", new Set([7, 11, 15])],
        ["Gunship 1", new Set([8])],
        ["Gunship 2", new Set([6])],
        ["Gunship 3", new Set([10])],
        ["Gunship 4", new Set([14])],
      ]),
    );
  });

  test("should accept correction to place fleet", async () => {
    mockAskQuestion
      .mockResolvedValueOnce({ data: "0 0 h", error: null })
      .mockResolvedValueOnce({ data: "1 1 v", error: null })
      .mockResolvedValueOnce({ data: "3 0 v", error: null })
      .mockResolvedValueOnce({ data: "3 1 v", error: null })
      .mockResolvedValueOnce({ data: "0 2 h", error: null })
      .mockResolvedValueOnce({ data: "2 1 v", error: null })
      .mockResolvedValueOnce({ data: "2 2 h", error: null })
      .mockResolvedValueOnce({ data: "2 2 v", error: null })
      .mockResolvedValueOnce({ data: "2 3 v", error: null });

    const dimensions: Coords = [4, 4];

    const fleet = await placeFleet(dimensions, VESSELS);

    expect(fleet).toEqual(
      new Map([
        ["Carrier", new Set([0, 1, 2, 3])],
        ["Destroyer 1", new Set([5, 9, 13])],
        ["Destroyer 2", new Set([7, 11, 15])],
        ["Gunship 1", new Set([8])],
        ["Gunship 2", new Set([6])],
        ["Gunship 3", new Set([10])],
        ["Gunship 4", new Set([14])],
      ]),
    );
  });
});
