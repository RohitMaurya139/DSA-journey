/**
 * Problem: Move Zeroes (LeetCode #283)
 *
 * Given an integer array nums, move all 0s to the end of it
 * while maintaining the relative order of the non-zero elements.
 * Must be done in-place without making a copy of the array.
 *
 * Example:
 *   Input:  nums = [0, 1, 0, 3, 12]
 *   Output: [1, 3, 12, 0, 0]
 */

/**
 * Moves all zeroes to the end of the array in-place.
 *
 * Approach: Two-pass overwrite (write pointer + zero counter)
 * - Pass 1: Copy every non-zero element to the front of the array
 *   using a write pointer 'x'. Count the skipped zeroes in 'k'.
 * - Pass 2: Fill the remaining positions (counted by 'k') at the
 *   end of the array with 0s.
 *
 * Time Complexity:  O(n) - two linear passes over the array
 * Space Complexity: O(1) - modified in-place, no extra array
 *
 * @param {number[]} nums - Input array to modify in-place
 * @returns {number[]}     - Array with all non-zeros first (order kept), then zeroes
 */
function moveZeroes (nums) {
  // x -> write pointer: next position where a non-zero element belongs
  let x = 0;
  // k -> count of zeroes encountered so far
  let k = 0;

  // Pass 1: shift all non-zero elements to the front, preserving order
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[x] = nums[i];
      x++;
    } else {
      // Zero found: don't copy it, just count it
      k++;
    }
  }

  // z -> starts at last index; positions from here backwards are filled with 0
  let z = nums.length - 1;
  // Pass 2: overwrite the last 'k' slots with zeroes
  while (k > 0) {
    nums[z] = 0;
    z--;
    k--;
    }
    return nums
};

let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
