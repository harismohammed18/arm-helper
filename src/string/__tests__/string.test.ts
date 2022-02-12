import stringFunctions from "../index";

test("Test isString: type check", () => {
  expect(stringFunctions.isString("John")).toBeTruthy();
  expect(stringFunctions.isString("John")).toBeTruthy();
  expect(stringFunctions.isString(`John`)).toBeTruthy();
  expect(stringFunctions.isString(1)).toBeFalsy();
  expect(stringFunctions.isString(0)).toBeFalsy();
  expect(stringFunctions.isString(true)).toBeFalsy();
  expect(stringFunctions.isString(false)).toBeFalsy();
  expect(stringFunctions.isString(null)).toBeFalsy();
  expect(stringFunctions.isString(undefined)).toBeFalsy();
});

test("Test isString: String class", () => {
  const string = new String("Test1");
  expect(stringFunctions.isString(string)).toBeTruthy();
});

test("Test isNotEmpty: without trim", () => {
  expect(stringFunctions.isNotEmpty("", false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty("John", false)).toBeTruthy();
  expect(stringFunctions.isNotEmpty(123, false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty(`John`, false)).toBeTruthy();
  expect(stringFunctions.isNotEmpty(1, false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty(null, false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty(undefined, false)).toBeFalsy();
  expect(stringFunctions.isNotEmpty(" ", false)).toBeTruthy();
});

test("Test isNotEmpty: with trim", () => {
  expect(stringFunctions.isNotEmpty("", true)).toBeFalsy();
  expect(stringFunctions.isNotEmpty("  ", true)).toBeFalsy();
});

test("Test returnValidString", () => {
  expect(stringFunctions.returnValidString("John")).toBe("John");
  expect(stringFunctions.returnValidString("")).toBe("");
  expect(stringFunctions.returnValidString(123)).toBe("");
  expect(stringFunctions.returnValidString(1)).toBe("");
  expect(stringFunctions.returnValidString(null)).toBe("");
  expect(stringFunctions.returnValidString(undefined)).toBe("");
});

test("Test throwErrorIfNotString", () => {
  expect(stringFunctions.throwErrorIfNotString("John")).toBeUndefined();
  expect(() => stringFunctions.throwErrorIfNotString(123)).toThrowError(
    "Given value is not a string"
  );
  expect(() => stringFunctions.throwErrorIfNotString(null)).toThrowError(
    "Given value is not a string"
  );
  expect(() => stringFunctions.throwErrorIfNotString(undefined)).toThrowError(
    "Given value is not a string"
  );
});
