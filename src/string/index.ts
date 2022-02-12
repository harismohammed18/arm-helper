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

export default { isString, isNotEmpty, returnValidString };


