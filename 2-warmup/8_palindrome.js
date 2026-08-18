// Function to check if a number is a palindrome
// A palindrome reads the same forwards and backwards (e.g., 121, 1331)
function palindrome(n) {
    // Store original number for comparison at the end
    let num = n

    // Negative numbers are never palindromes (e.g., -121 != 121-)
    if (n < 0) return false

    // Variable to build the reversed version of the number
    let reverseNumber = 0

    // Extract each digit from right and build reversed number
    while (n > 0) {
        // Get the last digit (e.g., 123 % 10 = 3)
        let lastDigit = n % 10
        // Shift reversed number left by one digit and add new digit
        reverseNumber = (reverseNumber * 10) + lastDigit
        // Remove the last digit using floor division
        n = Math.floor(n / 10)
    }

    // If original and reversed numbers match, it's a palindrome
    return num === reverseNumber ? true : false
}

console.log(palindrome(56));
