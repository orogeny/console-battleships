import { getDimensions } from "./get_dimensions";
import { setupGame } from "./setup_game";
import { setupPlayer } from "./setup_player";

jest.mock("./get_dimensions");
jest.mock("./setup_player");

const mockGetDimensions = jest.mocked(getDimensions);
const mockSetupPlayer = jest.mocked(setupPlayer);

describe("setup game", () => {
  test("should setup game", async () => {
    const fleet0 = new Map([
      ["Carrier", new Set([0, 1, 2, 3])],
      ["Destroyer 1", new Set([4, 5, 6])],
      ["Destroyer 2", new Set([7, 11, 15])],
      ["Gunship 1", new Set([8])],
      ["Gunship 2", new Set([12])],
      ["Gunship 3", new Set([13])],
      ["Gunship 4", new Set([14])],
    ]);
    const fleet1 = new Map([
      ["Carrier", new Set([1, 5, 9, 13])],
      ["Destroyer 1", new Set([2, 6, 10])],
      ["Destroyer 2", new Set([7, 11, 15])],
      ["Gunship 1", new Set([0])],
      ["Gunship 2", new Set([4])],
      ["Gunship 3", new Set([8])],
      ["Gunship 4", new Set([12])],
    ]);

    mockGetDimensions.mockResolvedValueOnce({ data: [4, 4], error: null });
    mockSetupPlayer
      .mockResolvedValueOnce({
        name: "Bert",
        fleet: fleet0,
      })
      .mockResolvedValueOnce({
        name: "Ernie",
        fleet: fleet1,
      });

    const game = await setupGame();

    expect(game.dimensions).toEqual([4, 4]);

    expect(game.toIndex([1, 2])).toBe(9);
    expect(game.toCoords(9)).toEqual([1, 2]);

    expect(game.players).toEqual(["Bert", "Ernie"]);
  });
});
