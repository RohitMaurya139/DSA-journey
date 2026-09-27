

// Bubble Sort Algorithm
// Time Complexity: O(n^2) - worst case, reverse sorted input
// Time Complexity: O(n) - best case, already sorted input (early exit below)
// Space Complexity: O(1) - sorts in place, no extra array needed
// Strategy: compare every adjacent pair and swap them when they are out of order,
// which bubbles the largest remaining element to the end of the array on each pass
// After pass i the last i elements are already in their final position, so every
// pass scans one element less than the previous one
// Stability: uses '>' instead of '>=' so equal elements keep their relative order

function bubbleSort(arr) {

    // One full pass per element, the last one needs no pass
    for (let i = 0; i < arr.length - 1; i++) {

        // Tracks whether this pass changed anything, used to exit early
        let swapped = false

        // Compare adjacent pairs, shrinking range as the tail becomes sorted
        // the -1 keeps j + 1 inside the array bounds
        for (let j = 0; j < arr.length - i - 1; j++) {

            // Left element is bigger -> swap them to fix this order
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swapped = true
            }
        }

        // A pass with zero swaps means the array is already sorted, so stop
        if (!swapped) {
            break
        }
    }

    // Return the same array reference, sorted in place
    return arr
}

// Example: sorting [9,6,8,2,1,10,12,3] -> [1,2,3,6,8,9,10,12]
let arr = [9, 6, 8, 2, 1, 10, 12, 3]
let ans = bubbleSort(arr)
console.log(ans);
