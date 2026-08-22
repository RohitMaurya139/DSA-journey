
// LeetCode 26: Remove Duplicates from Sorted Array
// Problem: Given a sorted array nums, remove the duplicates in-place such that
// each unique element appears only once. Return the number of unique elements (k).
// Note: The first k elements of nums should hold the final result.

// Approach: Two Pointers (slow-fast)
// - 'x' is the slow pointer -> index of the last unique element found so far.
// - 'i' is the fast pointer -> scans through the array looking for new unique values.
// Time Complexity:  O(n)  -> single pass through the array
// Space Complexity: O(1)  -> modification is done in-place, no extra space

function removeDuplicates(nums) {
  // Edge case: a single element array has exactly 1 unique element
  if (nums.length === 1) return 1;

  // k = count of unique elements (first element is always unique)
  let k = 1;
  // x = index of the last unique element placed at the front
  let x = 0;

  // Start from index 1 since index 0 is already considered unique
  for (let i = 1; i < nums.length; i++) {
    // Found a new value different from the last unique element
    if (nums[i] != nums[x]) {
      // Place the new unique element right after the previous unique one
      nums[x + 1] = nums[i];
      x++; // move slow pointer to this new unique position
      k++; // one more unique element found
    }
    // If nums[i] == nums[x], it's a duplicate -> skip it
  }

  // k = length of the deduplicated portion [0..k-1]
  return k;
};

let nums = [0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4]

console.log(removeDuplicates(nums));
