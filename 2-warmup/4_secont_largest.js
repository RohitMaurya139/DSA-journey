// ---------------------------------------------------------------------------
// FIND THE SECOND LARGEST NUMBER IN AN ARRAY
// ---------------------------------------------------------------------------
// Approach: Track both max and secMax in a single pass.
//   - When a[i] > max  -> old max becomes secMax, a[i] becomes new max
//   - When a[i] < max and a[i] > secMax -> update secMax only
// Time Complexity: O(n) — single pass through the array.

let arr = [10, 10, 5];

function secondLargest(a) {
  if (a.length < 2) {
    return null;  // need at least 2 elements
  }

  let max = -Infinity;
  let secMax = -Infinity;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      secMax = max;   // demote current max to second
      max = a[i];     // new max found
    } else if (secMax < a[i] && a[i] < max) {
      secMax = a[i];  // new second largest (strictly less than max)
    }
  }

  return secMax;
}

let ans = secondLargest(arr);

console.log(`Second largest number in the array is ${ans}`);
