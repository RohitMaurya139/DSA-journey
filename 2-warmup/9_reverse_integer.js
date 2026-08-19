
// Time Complexity: O(log10(n)) - we process each digit once
// Space Complexity: O(1) - only using a few variables

 function reverse(x) {
   // Store the sign of the number (-1 for negative, 1 for positive)
   let sign = x < 0 ? -1 : 1;
   
   // Initialize the reversed number to 0
   let reverseNumber = 0;
   
   // Handle trailing zeros: if number ends with 0, remove it
   // e.g., 1200 -> 120 (remove one trailing zero)
   if (x % 10 === 0) {
     x = x / 10;
   }
   
   // Work with absolute value to simplify digit extraction
   x = Math.abs(x);
     
     // Extract digits from right to left and build reversed number
     while (x > 0) {
         // Get the last digit (e.g., 123 % 10 = 3)
         let lastDigit = x % 10;
         
         // Shift reversed number left and add new digit
         // e.g., 0*10 + 3 = 3, then 3*10 + 2 = 32, then 32*10 + 1 = 321
         reverseNumber = reverseNumber * 10 + lastDigit;
         
         // Remove the last digit from x
         x = Math.floor(x / 10);
     }
     
     // Restore the original sign to the reversed number
     let num = sign * reverseNumber;
     
     // Check for 32-bit signed integer overflow
     // If result is outside [-2^31, 2^31 - 1], return 0
     if (num < -2147483648 || num > 2147483647) return 0;
     
     return num;
   
 };

 console.log(reverse(-123)) // Output: -321