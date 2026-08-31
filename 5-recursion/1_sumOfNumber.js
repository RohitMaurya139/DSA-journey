/**
 * Sum of First N Natural Numbers using Recursion
 * 
 * Problem: Calculate the sum of first N natural numbers (1 + 2 + 3 + ... + n)
 * 
 * Approach:
 * 1. Base Case: If n is 0, return 0 (sum of 0 numbers is 0)
 * 2. Recursive Case: n + sum(n-1)
 *    - Add current number 'n' to the sum of all numbers from 1 to n-1
 *    - Keep reducing n by 1 in each recursive call until base case is hit
 * 
 * Example Trace for sum(5):
 *   sum(5) = 5 + sum(4)
 *   sum(4) = 4 + sum(3)
 *   sum(3) = 3 + sum(2)
 *   sum(2) = 2 + sum(1)
 *   sum(1) = 1 + sum(0)
 *   sum(0) = 0  (base case)
 *   
 *   Unwinding: 0 + 1 = 1 -> 1 + 2 = 3 -> 3 + 3 = 6 -> 6 + 4 = 10 -> 10 + 5 = 15
 * 
 * Time Complexity: O(n) - n recursive calls
 * Space Complexity: O(n) - due to recursive call stack
 */

function sum_Of_N_number(n) {
    // Base case: sum of 0 numbers is 0
    if (n == 0) return 0

    // Recursive case: current number + sum of remaining numbers
    return n + sum_Of_N_number(n - 1)

}

let ans = sum_Of_N_number(5) // 1 + 2 + 3 + 4 + 5 = 15
console.log(ans);
