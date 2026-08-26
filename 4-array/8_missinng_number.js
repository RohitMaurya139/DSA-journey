
function missingNumber  (nums) {
  const n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += nums[i];
  }

  return totalSum - count;
};

let nums = [3, 0, 1];
console.log(missingNumber(nums));
