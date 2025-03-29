import { askQuestion } from "../ui/ask_question";
import { getDimensions } from "./get_dimensions";

jest.mock("../ui/ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("getDimensions", () => {
  test("should accept dimensions", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "4 x 4", error: null });

    const { data, error } = await getDimensions();

    expect(error).toBeNull();
    expect(data).toHaveLength(2);
  });

  test("should reject narrow dimensions", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "3 x 4", error: null });

    const { data, error } = await getDimensions();

    expect(data).toBeNull();
    expect(error?.message).toBe("Board must be min of 4 x 4 squares");
  });

  test("should reject short dimensions", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "4 x 3", error: null });

    const { data, error } = await getDimensions();

    expect(data).toBeNull();
    expect(error?.message).toBe("Board must be min of 4 x 4 squares");
  });

  test("should reject unparsable dimensions", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "34", error: null });

    const { data, error } = await getDimensions();

    expect(data).toBeNull();
    expect(error).not.toBeNull();
  });
});
