import { fireTorpedo } from "./fire_torpedo";
import { askQuestion } from "../ui/ask_question";
import { Coords } from "../lib/coords";

jest.mock("../ui/ask_question");
const mockAskQuestion = jest.mocked(askQuestion);

const dimensions: Coords = [4, 4];

describe("fire torpedo", () => {
  test("should return input coordinates", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "2 x 3", error: null });

    const fire = fireTorpedo(dimensions);

    const target = await fire();

    expect(target).toEqual([2, 3]);
  });

  test("should take two attempts to input coordinates", async () => {
    mockAskQuestion
      .mockResolvedValueOnce({ data: "4 x 5", error: null })
      .mockResolvedValueOnce({ data: "3 x 2", error: null });

    const fire = fireTorpedo(dimensions);

    const target = await fire();

    expect(target).toEqual([3, 2]);
  });
});
