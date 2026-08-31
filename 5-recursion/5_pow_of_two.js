/**
 * Check if a Number is a Power of Two using Recursion
 * 
 * Problem: Determine whether a given positive integer n can be written
 *          as 2^k for some non-negative integer k (i.e. n equals 1, 2, 4, 8, ...)
 * 
 * Approach:
 * 1. Base Case 1: If n == 1, return true  (1 = 2^0, a power of two)
 * 2. Base Case 2: If n < 1 or n is odd, return false
 *    - n < 1  -> invalid (must be positive)
 *    - n is odd and n != 1 -> cannot be a power of two (except 1 itself)
 * 3. Recursive Case: isPowerOfTwo(n / 2)
 *    - Even numbers are divided by 2 repeatedly
 *    - If we eventually reach 1, then n was a power of two
 * 
 * Example Trace for n = 16:
 *   isPowerOfTwo(16) -> even, not 1 -> isPowerOfTwo(8)
 *   isPowerOfTwo(8)  -> even, not 1 -> isPowerOfTwo(4)
 *   isPowerOfTwo(4)  -> even, not 1 -> isPowerOfTwo(2)
 *   isPowerOfTwo(2)  -> even, not 1 -> isPowerOfTwo(1)
 *   isPowerOfTwo(1)  -> returns true (base case)
 * 
 * Example Trace for n = 6:
 *   isPowerOfTwo(6)  -> even, not 1 -> isPowerOfTwo(3)
 *   isPowerOfTwo(3)  -> odd -> returns false
 * 
 * Time Complexity: O(log n) - n is halved each recursive call
 * Space Complexity: O(log n) - due to recursive call stack
 */

function isPowerOfTwo(n) {
    // Base case: 1 is a power of two (2^0)
    if (n == 1) return true;

    // Base case: reject non-positive numbers and odd numbers (except 1, handled above)
    if (n < 1 || (n % 2 != 0)) return false;

    // Recursive case: keep halving the number
    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(16)); // 16 = 2^4, true
