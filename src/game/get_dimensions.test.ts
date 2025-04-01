import { askQuestion } from "../ui/ask_question";
import { getDimensions } from "./get_dimensions";

jest.mock("../ui/ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("getDimensions", () => {
  test("should accept dimensions", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "4 x 4", error: null });

    const dimensions = await getDimensions();

    expect(dimensions).toEqual([4, 4]);
  });

  test("should reject narrow dimensions", async () => {
    mockAskQuestion
      .mockResolvedValueOnce({ data: "3 x 4", error: null })
      .mockResolvedValueOnce({ data: "5 x 4", error: null });

    const dimensions = await getDimensions();

    expect(dimensions).toEqual([5, 4]);
  });

  test("should reject short dimensions", async () => {
    mockAskQuestion
      .mockResolvedValueOnce({ data: "4 x 3", error: null })
      .mockResolvedValueOnce({ data: "4 x 5", error: null });

    const dimensions = await getDimensions();

    expect(dimensions).toEqual([4, 5]);
  });
});
