
// LeetCode 344: Reverse String
// Problem: Reverse the given character array s in-place.
// Note: You must do this by modifying the input array in-place with O(1) extra memory.

// Approach: Two Pointers (swap from both ends)
// - 'i' starts at the beginning, 'j' starts at the end.
// - Swap the characters at i and j, then move i forward and j backward.
// - Stop when the pointers meet or cross -> array is fully reversed.
// Time Complexity:  O(n)  -> n/2 swaps for an array of length n
// Space Complexity: O(1)  -> only one temp variable used, reversal is in-place

function reverseString(s) {
  // Edge case: a single character string reversed is itself
  if (s.length == 1) return s;

  // Left pointer at start, right pointer at end
  let i = 0;
  let j = s.length - 1;

  // Keep swapping until the pointers meet in the middle
  while (i < j) {
    // Classic swap using a temp variable
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    // Move both pointers toward each other
    i++;
    j--;
  }

  // Array has been reversed in-place, return it
  return s;
};


let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
