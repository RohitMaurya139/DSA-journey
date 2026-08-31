/**
 * Sum of Odd Numbers in an Array using Recursion
 * 
 * Problem: Calculate the total sum of only the odd elements in an array
 * 
 * Approach:
 * 1. Parameters: arr (the array) and n (number of elements to consider)
 * 2. Base Case: If n == 0, return 0 (an empty array sums to 0)
 * 3. Recursive Case:
 *    - If the current last element is EVEN -> skip it, recurse on the rest
 *    - If the current last element is ODD  -> add it to the sum of the rest
 *    - Process the array from the end towards the start
 * 
 * Example Trace for arr = [1, 2, 3, 4, 5, 7], n = 6:
 *   sum(6) = 7 is odd  -> 7 + sum(5)
 *   sum(5) = 5 is odd  -> 5 + sum(4)
 *   sum(4) = 4 is even -> skip  -> sum(3)
 *   sum(3) = 3 is odd  -> 3 + sum(2)
 *   sum(2) = 2 is even -> skip  -> sum(1)
 *   sum(1) = 1 is odd  -> 1 + sum(0)
 *   sum(0) = 0                          (base case)
 *   
 *   Unwinding: 0 + 1 = 1 -> 1 + 3 = 4 -> 4 + 5 = 9 -> 9 + 7 = 16
 * 
 * Time Complexity: O(n) - n recursive calls
 * Space Complexity: O(n) - due to recursive call stack
 */

function sum_Of_odd(arr, n) {
  // Base case: sum of an empty array is 0
  if (n == 0) return 0;

  // If the current last element is even, exclude it from the sum
  if (arr[n - 1] % 2 == 0) return sum_Of_odd(arr, n - 1);

  // Otherwise (odd), add current last element + sum of remaining elements
  let count = arr[n - 1] + sum_Of_odd(arr, n - 1);

  return count;
}

let arr = [1, 2, 3, 4, 5, 7];

let ans = sum_Of_odd(arr, arr.length); // 1 + 3 + 5 + 7 = 16

console.log(ans);
