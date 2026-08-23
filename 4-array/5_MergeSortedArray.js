/**
 * Problem: Merge Sorted Array (LeetCode #88)
 *
 * You are given two sorted integer arrays nums1 and nums2.
 * nums1 has extra space at the end to hold all elements of nums2
 * (the trailing 0s are placeholders and should be ignored).
 * Merge nums2 into nums1 so that nums1 becomes one fully sorted array.
 *
 * Example:
 *   Input:  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 *   Output: [1,2,2,3,5,6]
 */

/**
 * Merges two sorted arrays in-place into nums1.
 *
 * Approach: Three-pointer technique (filling from the back)
 * - Compare elements from the END of both arrays.
 * - Place the LARGER element at the end of nums1 (position k).
 * - This works because the empty slots are at the end of nums1,
 *   so writing from the back never overwrites an unprocessed element.
 *
 * Time Complexity:  O(m + n) - each element is placed exactly once
 * Space Complexity: O(1)     - merging is done in-place, no extra array
 *
 * @param {number[]} nums1 - First sorted array with extra space at end
 * @param {number} m       - Number of valid elements in nums1
 * @param {number[]} nums2 - Second sorted array
 * @param {number} n       - Number of valid elements in nums2
 * @returns {number[]}     - Merged sorted array (nums1 modified in-place)
 */
function merge(nums1, m, nums2, n) {
  // i -> pointer to last valid element of nums1
  let i = m - 1;
  // j -> pointer to last element of nums2
  let j = n - 1;

  // k -> pointer to the last position of nums1 (where merged result goes)
  // We fill positions from last index down to 0
  for (let k = m + n - 1; k >= 0; k--) {
    // If nums2 is exhausted, remaining nums1 elements
    // are already in their correct places, so stop
    if (j < 0) {
      break;
    }

    // If nums1 still has valid elements AND its current element is larger,
    // place it at position k and move i left
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      // Otherwise take element from nums2 and move j left
      nums1[k] = nums2[j];
      j--;
    }
  }

  return nums1;
}

// ------------------- Test / Driver code -------------------

let nums1 = [1, 2, 3, 0, 0, 0]; // trailing 0s are empty slots
let m = 3;                      // valid elements in nums1
let nums2 = [2, 5, 6];
let n = 3;                      // valid elements in nums2

console.log(merge(nums1, m, nums2, n)); // Expected: [1, 2, 2, 3, 5, 6]
