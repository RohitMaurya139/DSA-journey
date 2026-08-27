
/**
 * PROBLEM: Find the single number.
 * Given a non-empty array `nums` where every element appears exactly twice EXCEPT
 * for one element that appears only once, return the single (unique) number.
 *
 * Example:
 *   nums = [2, 3, 4, 5, 4, 3, 2]  -> 5 appears only once, so answer is 5
 *
 * APPROACH: Bit Manipulation using XOR
 * -------------------------------------
 * XOR (^) has three useful properties:
 *   1. a ^ a = 0     (a number XORed with itself becomes 0)
 *   2. a ^ 0 = a     (a number XORed with 0 stays unchanged)
 *   3. XOR is commutative & associative (order does not matter)
 *
 * 1. Start `result` with the first element.
 * 2. XOR every element in the array together.
 * 3. Because XOR is commutative, all the elements that appear twice will pair up
 *    and cancel each other out to 0 (a ^ a = 0).
 * 4. Only the single, non-repeated element remains (0 ^ x = x), which is returned.
 *
 * Why it works on the example:
 *   2 ^ 3 ^ 4 ^ 5 ^ 4 ^ 3 ^ 2
 *   = (2 ^ 2) ^ (3 ^ 3) ^ (4 ^ 4) ^ 5
 *   = 0 ^ 0 ^ 0 ^ 5
 *   = 5
 *
 * TIME COMPLEXITY : O(n) - single pass over the array
 * SPACE COMPLEXITY: O(1) - uses only one variable
 */
function singleNumber (nums) {
  let result = nums[0];
  // XOR every element together; duplicates cancel out, leaving the unique number
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

let nums = [2, 3, 4, 5, 4, 3, 2]
console.log(singleNumber(nums));
