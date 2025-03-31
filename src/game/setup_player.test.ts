import { Coords } from "../lib/coords";
import { askQuestion } from "../ui/ask_question";
import { setupPlayer } from "./setup_player";

jest.mock("../ui/ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("setup player", () => {
  test("should setup player name", async () => {
    const dimensions: Coords = [4, 4];
    mockAskQuestion
      .mockResolvedValueOnce({ data: "Pete", error: null })
      .mockResolvedValueOnce({ data: "0 0 h", error: null })
      .mockResolvedValueOnce({ data: "1 1 v", error: null })
      .mockResolvedValueOnce({ data: "3 1 v", error: null })
      .mockResolvedValueOnce({ data: "0 2 h", error: null })
      .mockResolvedValueOnce({ data: "2 1 v", error: null })
      .mockResolvedValueOnce({ data: "2 2 h", error: null })
      .mockResolvedValueOnce({ data: "2 3 v", error: null });

    const player = await setupPlayer(dimensions, 0);

    expect(player.name).toBe("Pete");
  });

  test("should setup player should reject empty name", async () => {
    const dimensions: Coords = [4, 4];
    mockAskQuestion
      .mockResolvedValueOnce({ data: "", error: null })
      .mockResolvedValueOnce({ data: "Second Time Sydney", error: null })
      .mockResolvedValueOnce({ data: "0 0 h", error: null })
      .mockResolvedValueOnce({ data: "1 1 v", error: null })
      .mockResolvedValueOnce({ data: "3 1 v", error: null })
      .mockResolvedValueOnce({ data: "0 2 h", error: null })
      .mockResolvedValueOnce({ data: "2 1 v", error: null })
      .mockResolvedValueOnce({ data: "2 2 h", error: null })
      .mockResolvedValueOnce({ data: "2 3 v", error: null });

    const player = await setupPlayer(dimensions, 0);

    expect(player.name).toBe("Second Time Sydney");
  });
});
