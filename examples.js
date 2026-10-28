const f = require("./functions");

console.log("Reverse:", f.reverseString("Marvin"));
console.log("Characters:", f.countCharacters("Hello world!"));
console.log("Capitalize:", f.capitalizeWords("hello from nigeria"));
console.log("Maximum:", f.findMaximum([3, 9, -2, 7]));
console.log("Minimum:", f.findMinimum([3, 9, -2, 7]));
console.log("Sum:", f.sumArray([1, 2, 3, 4]));
console.log("Even numbers:", f.filterArray([1, 2, 3, 4, 5, 6], n => n % 2 === 0));
console.log("Factorial:", f.factorial(5));
console.log("Prime:", f.isPrime(17));
console.log("Fibonacci:", f.fibonacci(8));
