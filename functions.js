/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */

// PASSED
function sumOdds(numbers) {
  // Your code here
let oddArr = numbers.filter(element => element % 2 === 1);
let sum=0;
oddArr.forEach(element => {
  sum += element})
return sum  
}

// let numbers=[1,4,5,7,9,3,4];
// console.log(numbers.filter(element => element % 2 === 1));

// console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));

/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: You need to turn the string into an array first
 * Another Hint: Use string methods to make it case-insensitive
 */

// PASSED

function characterCount(string, c) {
  // Your code here
  let arrayLetts = Array.from(string.toLowerCase());
  let letterCArr= arrayLetts.filter(letter => letter === c.toLowerCase());
  return letterCArr.length

}
// let string1 = "Character Count is clever";
// console.log(characterCount("Character Count is clever", "c"));
// let arrayLetts = Array.from(string1.toLowerCase());
// let letterCArr= arrayLetts.filter(letter => letter === "c");
// console.log(letterCArr.length);
// console.log(Array.from("Character Count is clever".toLowerCase()));
/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 * - assume all differences are positive numbers
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */

// 

function largestIncrement(numbers) {
  // Your code here
 
    return numbers.slice(0, -1).reduce((max, n, i) => Math.max(max, numbers[i + 1]-n ), -Infinity)
  

  // numbers[i]
  // let max = numbers.reduce(function(a,b){return Math.max(a,b)});
  // let min = numbers.reduce(function(a,b){return Math.min(a,b)});

  // return max-min
}

// console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));
// let someArr = [11, 35, 52, 14, 56, 601, 777, 888, 999];
// console.log(someArr.reduce(function(a,b){return Math.min(a,b)}));

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */

// PASSED
function afterX(numbers, x) {
  // Your code here
  let numOver = numbers.filter(element => element>x);
  return numOver

}

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */

// PASSED
function abbreviate(firstName, lastName) {
  // Your code here
  let fLett=firstName.substring(0,1).toUpperCase();
  let lLett=lastName.substring(0,1).toUpperCase();
  return fLett+lLett
}



/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */

// PASSED
function isUpperCase(string) {
  // Your code here
  if (string === string.toUpperCase()) {
    return true
  } else { 
    return false
  }
}



// console.log(isUpperCase("JCREW"));

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */

// PASSED

function elementInArray(numbers, x) {
  // Your code here

return numbers.some(number => number === x)

}

// console.log(elementInArray([5, 6, 7], 8));

module.exports = {
  sumOdds,
  characterCount,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
};
