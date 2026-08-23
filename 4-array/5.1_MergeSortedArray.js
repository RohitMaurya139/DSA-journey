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
 * Merges two sorted arrays into nums1 (forward two-pointer approach).
 *
 * Approach: Copy + Two pointers (merging from the FRONT)
 * - Step 1: Copy the first m valid elements of nums1 into a temp array x,
 *           so the original nums1 slots are free to be overwritten.
 * - Step 2: Compare elements of x and nums2 from the start,
 *           placing the SMALLER one into nums1 at position k.
 *
 * Note: This differs from the optimal back-filling approach because it
 *       needs an auxiliary array for the copy.
 *
 * Time Complexity:  O(m + n) - single pass over both arrays
 * Space Complexity: O(m)     - temp array x holds m copied elements
 *
 * @param {number[]} nums1 - First sorted array with extra space at end
 * @param {number} m       - Number of valid elements in nums1
 * @param {number[]} nums2 - Second sorted array
 * @param {number} n       - Number of valid elements in nums2
 * @returns {number[]}     - Merged sorted array (nums1 modified in-place)
 */
function merge(nums1, m, nums2, n) {
  // Step 1: Create temp array and copy valid elements of nums1 into it,
  // so we can safely overwrite nums1 during merging
  let x = [m];
  for (let i = 0; i < m; i++) {
    x[i] = nums1[i];
  }

  // i -> pointer for temp array x
  // j -> pointer for nums2
  let i = 0;
  let j = 0;

  // Step 2: Fill nums1 from front (k = 0) to end (m + n - 1)
  for (let k = 0; k < m + n; k++) {
    // Take from temp array x when:
    //   - nums2 is exhausted (j >= n), OR
    //   - x still has elements AND its current element is smaller or equal
    if (j >= n || (i < m && x[i] <= nums2[j])) {
      nums1[k] = x[i];
      i++;
    } else {
      // Otherwise take the element from nums2
      nums1[k] = nums2[j];
      j++;
    }
  }
}

// ------------------- Test / Driver code -------------------

let nums1 = [1, 2, 3, 0, 0, 0]; // trailing 0s are empty slots
let m = 3;                      // valid elements in nums1
let nums2 = [2, 5, 6];
let n = 3;                      // valid elements in nums2

console.log(merge(nums1, m, nums2, n)); // Expected: [1, 2, 2, 3, 5, 6]
