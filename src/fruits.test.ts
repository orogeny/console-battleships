import { fruits, addFruit } from "./fruits";

describe("fruits", () => {
  test("should have initial list of fruit", () => {
    expect(fruits).toHaveLength(3);
  });

  test("should add a fruit", () => {
    addFruit("grape");

    expect(fruits).toHaveLength(4);
  });
});
