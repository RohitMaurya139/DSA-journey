/**
 * Problem: Max Consecutive Ones (LeetCode #485)
 *
 * Given a binary array nums (only 0s and 1s), return the maximum
 * number of consecutive 1s in the array.
 *
 * Example:
 *   Input:  nums = [1, 1, 0, 1, 1, 1]
 *   Output: 3  -> the last three 1s form the longest streak
 */

/**
 * Finds the length of the longest run of consecutive 1s.
 *
 * Approach: Single Pass with a running counter
 * - 'count'     -> length of the current streak of 1s.
 * - 'maxCount'  -> longest streak seen so far.
 * - Whenever a 0 appears, update maxCount if needed and reset count.
 * - The final check at the last index handles arrays that END in 1s,
 *   since no 0 comes after them to trigger the maxCount update.
 *
 * Time Complexity:  O(n) - single pass through the array
 * Space Complexity: O(1) - only two counter variables used
 *
 * @param {number[]} nums - Binary array containing only 0s and 1s
 * @returns {number}        - Maximum number of consecutive 1s
 */
function findMaxConsecutiveOnes (nums) {
  // Length of the current streak of consecutive 1s
  let count = 0;
  // Longest streak found so far
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      // Streak broken: record it if it was a new best, then reset
      if (maxCount < count) {
        maxCount = count;
      }
      count = 0;
    } else {
      // Still on a run of 1s: extend current streak
      count++;
    }

    // Last element reached: flush the current streak into maxCount,
    // otherwise a streak ending at the array's end would be missed
    if (i == nums.length - 1) {
      if (maxCount < count) {
        maxCount = count;
      }
    }
  }

  return maxCount;
};


let nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
