// ---------------------------------------------------------------------------
// FUNCTIONS AND IF-ELSE
// ---------------------------------------------------------------------------

// WHAT IS A FUNCTION?
// A function is a reusable block of code that performs a specific task.
// You give it inputs (called parameters), it does something, and it can
// return a result.
//
// Why use functions?
// 1. Reuse: write once, call many times.
// 2. Organize: break a big problem into small pieces.
// 3. Test: each function can be tested on its own.

// How to DEFINE a function:
function add(a, b) {
  return a + b;
}

// How to CALL (use) a function:
console.log(add(2, 3)); // 5
console.log(add(10, 20)); // 30

// - `add`    -> the function name
// - `a, b`   -> parameters (the inputs)
// - `return` -> what the function gives back
// If there is no `return`, the function returns `undefined`.

// Example: a function with no return (it just prints)
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Rohit"); // Hello, Rohit!

// ---------------------------------------------------------------------------
// WHAT IS IF-ELSE?
// if-else lets your code make decisions based on conditions.
// It checks a condition, and runs one block of code if the condition is true,
// and (optionally) another block if it is false.

// Syntax:
// if (condition) {
//   // runs when condition is true
// } else {
//   // runs when condition is false
// }

// Simple example:
const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Example with else-if (more than 2 branches):
const marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Conditions use comparison operators:
// ===  equal to        !==  not equal
// >    greater than    <    less than
// >=   greater or equal <=   less or equal
// &&   AND (both true)  ||   OR (at least one true)  ! NOT (flip the truth)

// ---------------------------------------------------------------------------
// PUTTING IT TOGETHER: a function that uses if-else
// ---------------------------------------------------------------------------

// A function that tells you if a number is positive, negative, or zero:
function classifyNumber(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(classifyNumber(7));   // positive
console.log(classifyNumber(-3));  // negative
console.log(classifyNumber(0));   // zero

// A function that checks if a number is even or odd:
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

// A function that decides what a person can do based on age:
function whatCanYouDo(age) {
  if (age < 13) {
    return "child - go to school";
  } else if (age < 18) {
    return "teenager - go to high school";
  } else if (age < 60) {
    return "adult - you can vote and work";
  } else {
    return "senior - enjoy retirement";
  }
}

console.log(whatCanYouDo(10)); // child - go to school
console.log(whatCanYouDo(15)); // teenager - go to high school
console.log(whatCanYouDo(25)); // adult - you can vote and work
console.log(whatCanYouDo(70)); // senior - enjoy retirement

// ---------------------------------------------------------------------------
// TIPS FOR BEGINNERS
// 1. A function's name should describe what it does (add, isEven, greet).
// 2. Always think: what goes in (inputs) and what comes out (return value)?
// 3. `===` is the safe way to compare in JavaScript (avoid `==`).
// 4. if/else reads top to bottom: the first true condition wins.
// ---------------------------------------------------------------------------
