import { placeShip } from "./place_ship";
import { askQuestion } from "../ui/ask_question";
import { VESSELS } from "../ships";
import { Coords } from "../lib/coords";

jest.mock("../ui/ask_question");

const mockAskQuestion = jest.mocked(askQuestion);

describe("place ships", () => {
  test("should place carrier", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "0 0 h", error: null });
    const dimensions: Coords = [4, 4];
    const carrier = VESSELS.find((v) => v.type === "Carrier")!;
    const fleet = new Map<string, Set<number>>();

    const { data, error } = await placeShip(dimensions, fleet, carrier);

    expect(error).toBeNull();
    expect(data).toEqual(new Set([0, 1, 2, 3]));
  });

  test("should place second ship", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "2 1 v", error: null });
    const dimensions: Coords = [4, 4];
    const destroyer = VESSELS.find((v) => v.type === "Destroyer")!;
    const fleet = new Map([["Carrier", new Set([0, 1, 2, 3])]]);

    const { data, error } = await placeShip(dimensions, fleet, destroyer);

    expect(error).toBeNull();
    expect(data).toEqual(new Set([6, 10, 14]));
  });

  test("should detect ship hanging off board", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "1 1 h", error: null });
    const dimensions: Coords = [4, 4];
    const carrier = VESSELS.find((v) => v.type === "Carrier")!;
    const fleet = new Map<string, Set<number>>();

    const { data, error } = await placeShip(dimensions, fleet, carrier);

    expect(data).toBeNull();
    expect(error?.message).toBe("Coords (4,1) are outside the board");
  });

  test("should detect overlap with existing ship", async () => {
    mockAskQuestion.mockResolvedValueOnce({ data: "0 0 v", error: null });
    const dimensions: Coords = [4, 4];
    const destroyer = VESSELS.find((v) => v.type === "Destroyer")!;
    const fleet = new Map([["Carrier", new Set([0, 1, 2, 3])]]);

    const { data, error } = await placeShip(dimensions, fleet, destroyer);

    expect(data).toBeNull();
    expect(error?.message).toBe("This overlaps Carrier");
  });
});
