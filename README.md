# JavaScript Functions Checkpoint

GoMyCode checkpoint covering string manipulation, arrays, and mathematics.

## Run in VS Code

Install Node.js, open this folder, and run:

```bash
node examples.js
node test.js
```

No packages need to be installed.

## Functions

| Requirement | Function | Example result |
| --- | --- | --- |
| Reverse a string | `reverseString("hello")` | `"olleh"` |
| Count characters | `countCharacters("Hello world!")` | `12` |
| Capitalize words | `capitalizeWords("hello world")` | `"Hello World"` |
| Maximum | `findMaximum([3, 9, -2])` | `9` |
| Minimum | `findMinimum([3, 9, -2])` | `-2` |
| Sum array | `sumArray([1, 2, 3])` | `6` |
| Filter by condition | `filterArray([1, 2, 3, 4], n => n % 2 === 0)` | `[2, 4]` |
| Factorial | `factorial(5)` | `120` |
| Prime check | `isPrime(17)` | `true` |
| Fibonacci terms | `fibonacci(8)` | `[0, 1, 1, 2, 3, 5, 8, 13]` |

## Input conventions

- String functions expect strings. Character counting and reversal use Unicode code points; combined visual symbols can contain multiple code points. Spaces and punctuation count.
- Capitalization preserves whitespace and the rest of each word's spelling.
- Numeric array functions expect finite numbers. Empty maximum/minimum return `null`; an empty sum returns `0`. Functions do not change the input array.
- `filterArray` keeps values that satisfy the condition. For example, use `n => n >= 0` to filter out negative numbers.
- Factorial accepts integers 0–18; `0! = 1`. Larger inputs are rejected to keep integer results exact with JavaScript Numbers.
- Prime checking returns `false` for nonintegers, unsafe integers, and values below 2.
- Fibonacci takes the number of terms, starting at `0, 1`. Zero terms returns `[]`. It accepts integers 0–79 so every returned term is an exact safe integer.

## Fibonacci research

Each term is the sum of the previous two. This implementation starts with F0 = 0 and F1 = 1, then builds the requested number of terms using a loop.

Reference: [Wolfram MathWorld — Fibonacci Number](https://mathworld.wolfram.com/FibonacciNumber.html).

## Files

- `functions.js`: all ten functions with explanatory comments.
- `examples.js`: sample calls and printed results.
- `test.js`: normal cases, empty inputs, negative numbers, and numeric boundaries.
