import { askQuestion } from "./ask_question";
import { inputCoords } from "./input_coords";

jest.mock("./ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("input coords", () => {
  test("should parse valid coords text", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "4 x 2", error: null });

    const { data, error } = await inputCoords("Enter coordinates:");

    expect(data).toEqual([4, 2]);
    expect(error).toBeNull();
  });

  test("should reject unparsable text", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "42", error: null });

    const { data, error } = await inputCoords("Enter coordinates:");

    expect(data).toBeNull();
    expect(error?.message).toBe('Unable to parse coordinates from "42"');
  });
});
