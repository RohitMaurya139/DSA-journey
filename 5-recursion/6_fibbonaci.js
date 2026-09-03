
// Fibonacci Number using Recursion
// Time Complexity: O(2^n) - exponential, due to overlapping subproblems
// Space Complexity: O(n) - recursion stack depth
// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// Each number is the sum of the two preceding ones.
// fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2)

function fib (n) {
  // Base Case: if n is 0, return 0
  if (n == 0) return 0;

  // Base Case: if n is 1, return 1
  if (n == 1) return 1;

  // Recursive Case: fib(n) is the sum of fib(n-1) and fib(n-2)
  return fib(n - 1) + fib(n - 2);
};

// Example: fib(8) = 21
console.log(fib(8));
