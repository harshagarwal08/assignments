/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const count = str
    ?.toLowerCase()
    ?.split("")
    ?.reduce((acc, curr) => {
      if (["a", "e", "i", "o", "u"].includes(curr)) {
        acc++;
      }
      return acc;
    }, 0);
  return count;
}

module.exports = countVowels;
