/**
 * Factorial of a Number using Recursion
 * 
 * Problem: Calculate n! (factorial of n), i.e. n * (n-1) * ... * 2 * 1
 * 
 * Approach:
 * 1. Base Case: If n is 0 or 1, return 1 (0! = 1 and 1! = 1)
 * 2. Recursive Case: n * fact(n-1)
 *    - Multiply current number 'n' by the factorial of n-1
 *    - Keep reducing n by 1 until the base case is hit
 * 
 * Example Trace for fact(5):
 *   fact(5) = 5 * fact(4)
 *   fact(4) = 4 * fact(3)
 *   fact(3) = 3 * fact(2)
 *   fact(2) = 2 * fact(1)
 *   fact(1) = 1  (base case)
 *   
 *   Unwinding: 1 -> 2*1 = 2 -> 3*2 = 6 -> 4*6 = 24 -> 5*24 = 120
 * 
 * Time Complexity: O(n) - n recursive calls
 * Space Complexity: O(n) - due to recursive call stack
 */

function fact(n) {
    // Base case: 0! = 1 and 1! = 1
    if (n == 0 || n == 1) return 1

    // Recursive case: n * factorial of (n-1)
    return n * fact(n - 1)
}

console.log(fact(5)); // 5! = 5*4*3*2*1 = 120
