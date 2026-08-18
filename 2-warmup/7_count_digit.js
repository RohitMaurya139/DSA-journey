
// Function to count the number of digits in an integer
function countDigit(n) {
    // Edge case: 0 has exactly 1 digit
    if (n === 0) return 1

    // Convert negative numbers to positive since digit count is same for both
    n = Math.abs(n)

    let count = 0

    // Keep dividing by 10 until number becomes 0
    // Each division removes the last digit
    while (n > 0) {
        // Use Math.floor to perform integer division
        // Without it, n /= 10 gives a decimal (e.g., 234/10 = 23.4)
        // and the loop never terminates
        n = Math.floor(n / 10)
        count++
    }

    return count
}

// Example: countDigit(234) should return 3 (digits: 2, 3, 4)
let ans = countDigit(234);
console.log(ans);
