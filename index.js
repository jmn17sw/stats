/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  const length = [a, b, c, e, f, g];
  return length.length;
}


/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  const sum = [a, b, c, d, e, f, g];
  return  a + b + c + d + e + f + g;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  const mean = [a, b, c, d, e, f, g];
  return mean / 6;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  const min = [a, b, c, d, e, f, g];
  return min = Math.min(...arr);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  const max = [a, b, c, d, e, f, g];
  return max = Math.max(...arr);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  const range = [a, b, c, d, e, f, g];
  return range = Math.min(...arr) && Math.max(...arr);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const evens = [a, b, c, d, e, f, g];
  let result = evens.filter((num) => num % 2 === 0);
  return result;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const odds = [a, b, c, d, e, f, g];
  let result = odds.filter((num) => num % 2 === 0);
  return result;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
