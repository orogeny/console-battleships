import { getDimensions } from "./get_dimensions";
import { setupGame } from "./setup_game";

jest.mock("./get_dimensions");

const mockGetDimensions = jest.mocked(getDimensions);

describe("setup game", () => {
  test("should setup game", async () => {
    mockGetDimensions.mockResolvedValueOnce({ data: [4, 4], error: null });

    const game = await setupGame();

    expect(game.dimensions).toEqual([4, 4]);
  });
});
