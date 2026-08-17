// ---------------------------------------------------------------------------
// LOOP PRACTICE PROBLEMS
// ---------------------------------------------------------------------------
// These are common beginner DSA problems solved using loops.

// 1. FIND INDEX OF A NUMBER
// Traverse the array, return the index when found, return -1 if not found.
// Time Complexity: O(n) — we check each element once in the worst case.
/*
let arr = [3, 4, 6, 7, 8, 9, 12, 13, 16, 82];

function find(a, num) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === num) {
            return i;  // found, return index
        }
    }
    return -1;  // not found
}

let ans = find(arr, 13);

if (ans < 0) {
    console.log("element not found in the array");
} else {
    console.log(`element found at index ${ans}`);
}
*/

// ---------------------------------------------------------------------------
// 2. COUNT NEGATIVE NUMBERS
// Loop through array, increment count for each negative value.
// Time Complexity: O(n)
/*
let arr = [3, 4, 6, -7, -8, 9, 12, -13, 16, 82];

function countNegative(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            count++;  // found a negative number
        }
    }
    return count;
}

let ans = countNegative(arr);
console.log(`count of negative number is ${ans}`);
*/

// ---------------------------------------------------------------------------
// 3. FIND LARGEST NUMBER
// Track max value, update it whenever we find a bigger element.
// Time Complexity: O(n)
/*
let arr = [5, 0, 10, 8, 17, 100];

function largestnum(a) {
    let max = -Infinity;  // start with smallest possible value
    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];  // update max
        }
    }
    return max;
}

let ans = largestnum(arr);
console.log(`largest number in the array is ${ans}`);
*/

// ---------------------------------------------------------------------------
// 4. FIND SMALLEST NUMBER
// Track min value, update it whenever we find a smaller element.
// Time Complexity: O(n)
let arr = [5, 0, 10, -8, 17, 100];

function smallestnum(a) {
  let min = Infinity;  // start with largest possible value

  for (let i = 1; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];  // update min
    }
  }

  return min;
}

let ans = smallestnum(arr);

console.log(`smallest number in the array is ${ans}`);
