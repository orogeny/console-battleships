import { askQuestion } from "./ask_question";

jest.mock("./ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("ask for board dimensions", () => {
  test("should return answer", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "All of them", error: null });

    const { data: answer, error } = await askQuestion(
      "which month has twenty eight days?",
    );

    expect(answer).toBe("All of them");
    expect(error).toBeNull();
  });

  test("should return error", async () => {
    mockAskQuestion.mockResolvedValueOnce({
      data: null,
      error: new Error("We dodged the question"),
    });

    const { data, error } = await askQuestion("Truth or dare?");

    expect(data).toBeNull();
    expect(error?.message).toBe("We dodged the question");
  });
});
