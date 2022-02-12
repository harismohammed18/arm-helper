import stringFunctions from "../index";

test("test capitalize", () => {
  expect(stringFunctions.capitalize("john")).toBe("John");
  expect(stringFunctions.capitalize("")).toBe("");
  expect(stringFunctions.capitalize("john snow")).toBe("John snow");
  expect(stringFunctions.capitalize("MICKEY")).toBe("Mickey");
});

test("test capitalizeAll", () => {
  expect(stringFunctions.capitalizeAll("john")).toBe("John");
  expect(stringFunctions.capitalizeAll("")).toBe("");
  expect(stringFunctions.capitalizeAll("john snow")).toBe("John Snow");
  expect(stringFunctions.capitalizeAll("MICKEY")).toBe("Mickey");
  expect(stringFunctions.capitalizeAll("MICKEY TEST")).toBe("Mickey Test");
});
