
/**
 * PROBLEM: Find the missing number.
 * Given an array `nums` containing n distinct numbers taken from the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * Example:
 *   nums = [3, 0, 1]  -> n = 3, range is [0, 1, 2, 3], missing number = 2
 *
 * APPROACH: Sum Formula (Mathematical)
 * --------------------------------------
 * 1. If all numbers 0 to n were present, their sum would follow the arithmetic
 *    series formula:  totalSum = n * (n + 1) / 2
 *    where n is the length of the array (which equals the largest possible value
 *    in the full range).
 * 2. Compute the actual sum of the numbers currently present in the array.
 * 3. The missing number = (expected sum) - (actual sum),
 *    because subtracting the present elements removes everything but the gap.
 *
 * TIME COMPLEXITY : O(n) - single loop over the array
 * SPACE COMPLEXITY: O(1) - uses only a couple of constant variables
 */
function missingNumber  (nums) {
  const n = nums.length;
  // Expected sum of all numbers from 0 to n (arithmetic series formula)
  let totalSum = (n * (n + 1)) / 2;
  let count = 0;
  // Loop through the array to add up the numbers that ARE present
  for (let i = 0; i < n; i++) {
    count += nums[i];
  }

  // Difference between expected and actual sum gives us the missing number
  return totalSum - count;
};

let nums = [3, 0, 1];
console.log(missingNumber(nums));
