
// LeetCode 27: Remove Element
// Problem: Given an integer array nums and an integer val, remove all occurrences
// of val in-place. Return the number of elements not equal to val (k).
// Note: The first k elements of nums should hold elements not equal to val
// (order may change).

// Approach: Two Pointers (overwrite pattern)
// - 'x' is the slow pointer -> position where the next "kept" element should go.
// - 'i' is the fast pointer -> scans every element of the array.
// Time Complexity:  O(n)  -> each element is visited once
// Space Complexity: O(1)  -> removal is done in-place

function removeElement(nums, val) {
      // k = count of elements that are NOT equal to val
      let k = 0
      // x = write index for the next kept element
      let x = 0

      // Visit every element one by one
      for (let i = 0; i < nums.length; i++) {
        // If current element should be kept...
        if (nums[i] != val) {
            // ...copy it to the write position and advance the pointers
            nums[x] = nums[i]
            x++;
            k++;
        }
        // If nums[i] == val, skip it (it gets overwritten by later kept elements)
      }

      // k = number of valid elements left in nums[0..k-1]
      return k
};


console.log(removeElement([0,2,2,2,2,2,2,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7], 4))
