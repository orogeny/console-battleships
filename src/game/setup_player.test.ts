import { askQuestion } from "../ui/ask_question";
import { setupPlayer } from "./setup_player";

jest.mock("../ui/ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("setup player", () => {
  test("should setup player name", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "Pete", error: null });

    const player = await setupPlayer(0);

    expect(player.name).toBe("Pete");
  });

  test("should setup player should reject empty name", async () => {
    mockAskQuestion
      .mockResolvedValueOnce({ data: "", error: null })
      .mockResolvedValueOnce({ data: "Second Time Sydney", error: null });

    const player = await setupPlayer(0);

    expect(player.name).toBe("Second Time Sydney");
  });
});
