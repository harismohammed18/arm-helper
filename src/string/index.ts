const throwErrorIfNotString = (str: unknown): void => {
  if (!isString(str)) {
    throw new Error("given value not a string");
  }
};

/**
 * check whether the value is string
 * @param {unknown} str - unknown value
 * @returns {boolean} true if value is string, false if not
 */
const isString = (str: unknown): boolean =>
  typeof str === "string" ||
  str instanceof String ||
  Object.prototype.toString.call(str) === "[object String]";

/**
 * if value is string return value else return empty string
 * @param {unknown} str - unknown value
 * @returns {string} string value
 */
const returnValidString = (str: unknown): string =>
  isString(str) ? String(str).toString() : "";

/**
 * *check whether string is empty.
 * if it's not string return false.
 * if it's string, check whether it's empty or not.
 * if doTrim is true, trim the string before check.
 * @param {unknown} str - unknown value
 * @param {boolean} [doTrim=false] - if doTrim  then trim the string before check else not
 * @returns {boolean}  false if string is empty, true if not
 */
const isNotEmpty = (str: unknown, doTrim = false): boolean =>
  doTrim === true
    ? returnValidString(str).trim().length > 0
    : returnValidString(str).length > 0;

/**
 * capitalize first letter of string
 * if not a string throw error
 * @param {string} str - string value
 * @returns {string} return capitalized string
 */
const capitalize = (str: string): string => {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true
    ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    : "";
};

/**
 * capitalize first letter of each word in string
 * @param {string} str - string value
 * @returns {string} return string with first letter capitalized
 */
const capitalizeAll = (str: string): string => {
  throwErrorIfNotString(str);
  return isNotEmpty(str) === true
    ? str.toLowerCase().split(" ").map(capitalize).join(" ")
    : "";
};

export default {
  isString,
  isNotEmpty,
  returnValidString,
  capitalize,
  capitalizeAll,
};
