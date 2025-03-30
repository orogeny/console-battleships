import { askQuestion } from "../ui/ask_question";
import { placeVessel } from "./place_vessel";

jest.mock("../ui/ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("place vessel", () => {
  test("should return coords of horizontal vessel", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "3 4 h", error: null });

    const { data, error } = await placeVessel("Submarine", 2);

    expect(error).toBeNull();
    expect(data).toEqual([
      [3, 4],
      [4, 4],
    ]);
  });

  test("should reject invalid placement", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "a b c", error: null });

    const { data, error } = await placeVessel("Submarine", 2);

    expect(data).toBeNull();
    expect(error).not.toBeNull();
  });
});
