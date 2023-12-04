/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();
  let isPal = true;

  for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      isPal = false;
      break;
    }
  }
  return isPal;
}

module.exports = isPalindrome;
