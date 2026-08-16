// ---------------------------------------------------------------------------
// LOOPS
// ---------------------------------------------------------------------------

// WHAT IS A LOOP?
// A loop repeats a block of code many times. It stops when a condition
// becomes false.
//
// Why use loops?
// 1. Repeat a task N times (print numbers 1..10).
// 2. Walk through every element of an array (very common in DSA).
// 3. Keep doing something until a condition changes (search, game loops).

// ---------------------------------------------------------------------------
// 1. FOR LOOP  (use when you know how many times to repeat)
// ---------------------------------------------------------------------------
// for (start; condition; step) {
//   // body
// }

// Print numbers 1 to 5:
// 1. let i = 1     -> where we start
// 2. i <= 5        -> keep going WHILE this is true
// 3. i++           -> after each round, increase i by 1
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Count down from 5 to 1 (decrement with i--):
for (let i = 5; i >= 1; i--) {
  console.log("countdown:", i);
}

// ---------------------------------------------------------------------------
// 2. WHILE LOOP  (use when you DON'T know how many times in advance)
// ---------------------------------------------------------------------------
// while (condition) {
//   // body — runs as long as condition is true
// }
// CAUTION: if the condition never becomes false, you get an INFINITE loop.

// Keep rolling a die until we get a 6:
let roll = 0;
let attempts = 0;

while (roll !== 6) {
  roll = Math.floor(Math.random() * 6) + 1; // random number 1..6
  attempts++;
}
console.log("Got a 6 after", attempts, "rolls");

// ---------------------------------------------------------------------------
// 3. DO-WHILE LOOP  (same as while, but the body runs at least once)
// ---------------------------------------------------------------------------
// do {
//   // body
// } while (condition);

let x = 100;
do {
  console.log("do-while runs at least once, x =", x);
  x++;
} while (x < 3);

// ---------------------------------------------------------------------------
// LOOPING OVER ARRAYS  (this is what you'll use most in DSA)
// ---------------------------------------------------------------------------

const fruits = ["apple", "banana", "cherry"];

// Classic for loop with index:
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// Sum of all numbers in an array:
const numbers = [4, 9, 2, 7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log("sum =", sum); // 22

// ---------------------------------------------------------------------------
// BREAK AND CONTINUE
// ---------------------------------------------------------------------------

// break -> stop the loop immediately:
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // stops at 5, never prints 6..10
  }
  console.log("break demo:", i);
}

// continue -> skip the rest of this round, jump to the next one:
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; // skips even numbers
  }
  console.log("continue demo (odd only):", i);
}

// ---------------------------------------------------------------------------
// COMMON DSA PATTERNS WITH LOOPS
// ---------------------------------------------------------------------------

// Find the largest number in an array:
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("max =", findMax([3, 9, 1, 7, 4])); // 9

// Check if a target value exists in an array:
function contains(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true; // found it, no need to keep looping
    }
  }
  return false; // loop finished without finding it
}
console.log("contains 7?", contains([3, 9, 1, 7], 7)); // true
console.log("contains 8?", contains([3, 9, 1, 7], 8)); // false

// NESTED LOOP (loop inside a loop) — used for pairs, grids, tables:
// Print a multiplication table 1..3:
for (let a = 1; a <= 3; a++) {
  for (let b = 1; b <= 3; b++) {
    console.log(a + " x " + b + " = " + a * b);
  }
}

// ---------------------------------------------------------------------------
// TIPS FOR BEGINNERS
// 1. for loop when you know the count, while when you don't.
// 2. Double-check the stop condition so you don't create an infinite loop.
// 3. `return` inside a loop exits the whole function immediately.
// 4. Nested loops run slow: O(n * m). For DSA, always ask "can I avoid this?"
// ---------------------------------------------------------------------------
