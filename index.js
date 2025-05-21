/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
    return numbers.length;
  
}


/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  //keep track of the tetal
  let total = 0;
  //go through each number
  for(let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    total = total + currentNumber;
  }
  //add the number to the total
  //return the toal
  return total;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
 //add the numbers the together
 const total = getSum(numbers);
 // divide by the number of numbers
 const average = total/getLength(numbers);
 // return the average
 return average;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  //identify the smallest number
  let smallestNumber = numbers[0];
  //scan the numbers
  for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    let currentNumber = numbers[i];
  
  //if the current number is smaller than the smallest number
      if(currentNumber < smallestNumber) {
      console.log(currentNumber);
      smallestNumber = currentNumber;
   }
  }
  //keep track of the smallest number

  return smallestNumber;
  //return the smallest number


}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
 //identify the largest number
 let largestNumber = numbers[0];
 //scan the array
 for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  let currentNumber = numbers[i];
  //replace current largest number with previous
  if(currentNumber > largestNumber) {
    console.log(currentNumber);
    largestNumber = currentNumber;
      }
    }
  return largestNumber;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
//create a range loop
return getMax(numbers)-getMin(numbers);

}
// return the answer


/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  //find even numbers
  let even = [];
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0)
      even.push(numbers[i])
  }
  //return the evens
  return even; 
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let odd = [];
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 != 0)
      odd.push(numbers[i])
  }
  return odd;
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
