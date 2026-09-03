

// Binary Search Algorithm
// Time Complexity: O(log n) - halves the search space each iteration
// Space Complexity: O(1) - no extra space used
// Precondition: The array MUST be sorted in ascending order
// Strategy: repeatedly divide the search interval in half and narrow down
// based on whether the target is less than or greater than the middle element

function binarySearch(arr, target) {
    // Set search boundaries to the full array
    let start = 0
    let end = arr.length - 1 

    // Continue while search space is not empty
    while (start <= end) {
        // Calculate middle index
        let mid= Math.floor((start+end)/2)

        // Case 1: target found at middle -> return true
        if (arr[mid] == target) return true

        // Case 2: target is smaller than middle -> search left half
        else if (arr[mid] > target) end = mid - 1 

        // Case 3: target is larger than middle -> search right half
        else {
            start=mid+1
        }
    }

    // Target not present in the array
    return -1
}

// Example: searching for 5 in sorted array [2,3,4,5,6,7] -> true
let ans= binarySearch([2,3,4,5,6,7],5)
console.log(ans);