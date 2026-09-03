
// Linear Search Algorithm
// Time Complexity: O(n) - worst case, element at end or not present
// Space Complexity: O(1) - no extra space used
// Works by checking each element one by one from start to end
// Returns true if target is found, false otherwise

function liner_search(arr, target) {
    
    // Traverse the array from index 0 to arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        // If current element matches target, return true
        if (arr[i]==target) {
            return true
        }
        
    }

    // Target not found after full traversal
    return false
    
}

// Example: searching for 5 in [2,3,4,5,6,7,1] -> true
let ans= liner_search([2,3,4,5,6,7,1],5)
console.log(ans);
