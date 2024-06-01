// Kadane's algorithm
// two vars, max, sum
// 1. sum = sum+num[i]
// 2. max = Math.max(max,sum )
// 3. if (sum < 0) then sum = 0; else retain previous value

const solution = (nums) => {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }

    return max;
  }
};

const
