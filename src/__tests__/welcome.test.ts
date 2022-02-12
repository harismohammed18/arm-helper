import { welcome } from "../index";

test("Test welcome", () => {
  expect(welcome("John")).toBe("Hello John");
});
