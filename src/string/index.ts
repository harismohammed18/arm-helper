import { appConstants } from "../constant";

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

/**
 * function to get the first n letters of a string
 * @param {String} str
 * @param {Number} n
 * @returns {string} return first n letters of string
 */
const getFirstLetters = (str: string, n: number): string => {
  throwErrorIfNotString(str);
  return str.substring(0, n);
};

/**
 * function to get substring
 * @param {String} str - string value
 * @param {number} start - start index
 * @param {number} end - end index
 * @returns {string} return substring
 */
const getSubString = (str: string, start = 0, end = 0): string => {
  throwErrorIfNotString(str);
  return str.substring(start, end);
};

/**
 * function to get last n letters of a string
 * @param {string} str - string value
 * @param {number} n - number of letters
 * @returns {string} return last n letters of string
 */
const getLastLetters = (str: string, n: number): string => {
  throwErrorIfNotString(str);
  return str.substring(str.length - n);
};

/**
 * function check string start with given string
 * @param {string} str - string value
 * @param {string} start  - string starting character
 * @returns {boolean} return true if string starts with start, false if not
 */
const startWith = (str: string, start: string): boolean => {
  throwErrorIfNotString(str);
  return str.startsWith(start);
};

/**
 * function to check string end with given string
 * @param {string} str - string value
 * @param {string} end - string ending character
 * @returns {boolean} return true if string ends with end, false if not
 */
const endWith = (str: string, end: string): boolean => {
  throwErrorIfNotString(str);
  return str.endsWith(end);
};

/**
 * function to repeat string
 * @param {string} string - string value
 * @param {number} n - number of times to repeat
 * @returns {array} return array of string
 */
const times = (string: string, n: number) => {
  if (n < 1 || n > appConstants.MAX_SAFE_INTEGER) {
    return [];
  }
  let index = -1;
  const length = Math.min(n, appConstants.MAX_ARRAY_LENGTH);
  const result = new Array(length);
  while (++index < length) {
    result[index] = string;
  }
  return result;
};

export default {
  isString,
  isNotEmpty,
  returnValidString,
  capitalize,
  capitalizeAll,
  throwErrorIfNotString,
  toLowerCase,
  toUpperCase,
  getFirstLetters,
  getSubString,
  getLastLetters,
  startWith,
  endWith,
  times,
};
