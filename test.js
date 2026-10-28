const assert = require("node:assert/strict");
const f = require("./functions");
let checks = 0;
function check(actual, expected) {
  assert.deepEqual(actual, expected);
  checks++;
}

check(f.reverseString("hello"), "olleh");
check(f.reverseString(""), "");
check(f.reverseString("a😀b"), "b😀a");
check(f.countCharacters("Hello world!"), 12);
check(f.countCharacters(""), 0);
check(f.countCharacters("a😀b"), 3);
check(f.capitalizeWords("hello world"), "Hello World");
check(f.capitalizeWords("  hello\tworld\nmarvin "), "  Hello\tWorld\nMarvin ");
check(f.capitalizeWords(""), "");
check(f.findMaximum([-9, -2, -7]), -2);
check(f.findMinimum([9, 2, 7]), 2);
check(f.findMaximum([5]), 5);
check(f.findMinimum([5]), 5);
check(f.findMaximum([]), null);
check(f.findMinimum([]), null);
check(f.sumArray([1, -2, 3]), 2);
check(f.sumArray([]), 0);
check(f.filterArray([1, 2, 3, 4], n => n % 2 === 0), [2, 4]);
check(f.filterArray(["hi", "hello"], word => word.length > 2), ["hello"]);
check(f.factorial(0), 1);
check(f.factorial(5), 120);
check(f.factorial(18), 6402373705728000);
for (const n of [-1, 1.5, 19]) {
  assert.throws(() => f.factorial(n), RangeError); checks++;
}
for (const n of [-3, 0, 1, 9, 25, 2.5]) check(f.isPrime(n), false);
for (const n of [2, 3, 17, 97]) check(f.isPrime(n), true);
check(f.fibonacci(0), []);
check(f.fibonacci(1), [0]);
check(f.fibonacci(2), [0, 1]);
check(f.fibonacci(8), [0, 1, 1, 2, 3, 5, 8, 13]);
check(f.fibonacci(79)[78], 8944394323791464);
for (const n of [-1, 2.5, 80]) {
  assert.throws(() => f.fibonacci(n), RangeError); checks++;
}
console.log(`${checks} checks passed.`);
