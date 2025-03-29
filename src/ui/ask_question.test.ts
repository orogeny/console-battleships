import { askQuestion } from "./ask_question";

jest.mock("./ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("ask for board dimensions", () => {
  test("ask question", async () => {
    mockAskQuestion.mockResolvedValueOnce("All of them");

    const answer = await mockAskQuestion("which month has twenty eight days?");

    expect(answer).toBe("All of them");
  });
});
