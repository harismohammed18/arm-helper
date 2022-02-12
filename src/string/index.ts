/**
 * throw error if value is not string
 * @param{string} str - string value
 */
function throwErrorIfNotString(str: unknown): void {
  if (!isString(str)) {
    throw new Error("Given value is not a string");
  }
}

/**
 * check whether the value is string
 * @param {unknown} str - unknown value
 * @returns {boolean} true if value is string, false if not
 */
function isString(str: unknown): boolean {
  return (
    typeof str === "string" ||
    str instanceof String ||
    Object.prototype.toString.call(str) === "[object String]"
  );
}

/**
 * if value is string return value else return empty string
 * @param {unknown} str - unknown value
 * @returns {string} string value
 */
function returnValidString(str: unknown): string {
  return isString(str) ? String(str).toString() : "";
}

/**
 * *check whether string is empty.
 * if it's not string return false.
 * if it's string, check whether it's empty or not.
 * if doTrim is true, trim the string before check.
 * @param {unknown} str - unknown value
 * @param {boolean} [doTrim=false] - if doTrim  then trim the string before check else not
 * @returns {boolean}  false if string is empty, true if not
 */
function isNotEmpty(str: unknown, doTrim = false): boolean {
  return doTrim === true
    ? returnValidString(str).trim().length > 0
    : returnValidString(str).length > 0;
}
/**
 * capitalize first letter of string
 * if not a string throw error
 * @param {string} str - string value
 * @returns {string} return capitalized string
 */
function capitalize(str: string): string {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true
    ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    : "";
}

/**
 * capitalize first letter of each word in string
 * @param {string} str - string value
 * @returns {string} return string with first letter capitalized
 */
function capitalizeAll(str: string): string {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true
    ? str.toLowerCase().split(" ").map(capitalize).join(" ")
    : "";
}

/**
 * lowercase the entire string
 * @param {string} str - string value
 * @returns {string} return lowercase string
 */
function toLowerCase(str: string): string {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true ? str.toLowerCase() : "";
}

/**
 * upper case the entire string
 * @param {string} str
 * @returns {string} return upper case string
 */
function toUpperCase(str: string): string {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true ? str.toUpperCase() : "";
}

export default {
  isString,
  isNotEmpty,
  returnValidString,
  capitalize,
  capitalizeAll,
  throwErrorIfNotString,
  toLowerCase,
  toUpperCase,
};
