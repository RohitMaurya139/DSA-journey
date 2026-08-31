/**
 * Sum of Array Elements using Recursion
 * 
 * Problem: Calculate the total sum of all elements in an array
 * 
 * Approach:
 * 1. Parameters: arr (the array) and n (number of elements to consider,
 *    i.e. length of the sub-array from index 0 to n-1)
 * 2. Base Case: If n == 0, return 0 (an empty array sums to 0)
 * 3. Recursive Case: arr[n-1] + sum(arr, n-1)
 *    - Add the last element (index n-1) to the sum of the first n-1 elements
 *    - Process the array from the end towards the start
 * 
 * Example Trace for arr = [1, 2, 3, 4, 5], n = 5:
 *   sum(arr,5) = arr[4] + sum(arr,4)  = 5 + ?
 *   sum(arr,4) = arr[3] + sum(arr,3)  = 4 + ?
 *   sum(arr,3) = arr[2] + sum(arr,2)  = 3 + ?
 *   sum(arr,2) = arr[1] + sum(arr,1)  = 2 + ?
 *   sum(arr,1) = arr[0] + sum(arr,0)  = 1 + 0
 *   sum(arr,0) = 0                    (base case)
 *   
 *   Unwinding: 0 + 1 = 1 -> 1 + 2 = 3 -> 3 + 3 = 6 -> 6 + 4 = 10 -> 10 + 5 = 15
 * 
 * Time Complexity: O(n) - n recursive calls
 * Space Complexity: O(n) - due to recursive call stack
 */

function sum_Of_array(arr, n) {

    // Base case: sum of an empty array is 0
    if (n == 0) return 0

    // Recursive case: add current last element + sum of remaining elements
    let count = arr[n - 1] + sum_Of_array(arr, n - 1)

    return count
}

let arr = [1, 2, 3, 4, 5]

let ans = sum_Of_array(arr, arr.length) // 1 + 2 + 3 + 4 + 5 = 15

console.log(ans);
