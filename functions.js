"use strict";

// STRING FUNCTIONS
function reverseString(text) {
  return Array.from(text).reverse().join("");
}

// Spaces and punctuation count as characters too.
function countCharacters(text) {
  return Array.from(text).length;
}

function capitalizeWords(sentence) {
  // Preserve spaces and capitalize the first character of each word.
  return sentence.replace(/\S+/gu, word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  );
}

// ARRAY FUNCTIONS
// An empty array has no maximum or minimum, so return null.
function findMaximum(numbers) {
  if (numbers.length === 0) return null;
  let maximum = numbers[0];
  for (const number of numbers) {
    if (number > maximum) maximum = number;
  }
  return maximum;
}

function findMinimum(numbers) {
  if (numbers.length === 0) return null;
  let minimum = numbers[0];
  for (const number of numbers) {
    if (number < minimum) minimum = number;
  }
  return minimum;
}

function sumArray(numbers) {
  let total = 0;
  for (const number of numbers) total += number;
  return total;
}

// Keep elements for which the supplied condition returns true.
function filterArray(array, condition) {
  return array.filter(condition);
}

// MATHEMATICAL FUNCTIONS
function factorial(number) {
  if (!Number.isInteger(number) || number < 0 || number > 18) {
    throw new RangeError("Use a whole number from 0 to 18 for an exact Number result.");
  }
  let result = 1;
  for (let i = 2; i <= number; i++) result *= i;
  return result;
}

function isPrime(number) {
  if (!Number.isSafeInteger(number) || number < 2) return false;
  // A composite number has a factor no greater than its square root.
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) return false;
  }
  return true;
}

function fibonacci(terms) {
  if (!Number.isInteger(terms) || terms < 0 || terms > 79) {
    throw new RangeError("Use a whole number from 0 to 79 for exact Number terms.");
  }
  const sequence = [];
  for (let i = 0; i < terms; i++) {
    // Start at 0, 1; each later term is the sum of the previous two.
    if (i < 2) sequence.push(i);
    else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

module.exports = {
  reverseString, countCharacters, capitalizeWords,
  findMaximum, findMinimum, sumArray, filterArray,
  factorial, isPrime, fibonacci
};
