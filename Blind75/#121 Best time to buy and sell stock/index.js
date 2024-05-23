// two pointer approach
const solution = (nums) => {
  let left = 0; // Initialize the left pointer to 0
  let right = 1; // Initialize the right pointer to 1
  let currentMaxProfit = 0; // Initialize the maximum profit to 0

  for (let i = 0; i < nums.length - 1; i++) {
    // Iterate through the array, but stop one index before the end
    if (nums[left] < nums[right]) {
      // If the value at the left pointer is less than the value at the right pointer
      console.log(
        `${nums[left]} is at ${left} , and ${nums[right]} is at ${right} `,
      );
      currentMaxProfit = Math.max(currentMaxProfit, nums[right] - nums[left]); // Update the maximum profit if the current profit is greater
      console.log(
        "current max profit after comparison with previous is : ",
        currentMaxProfit,
      );
    } else {
      console.log(
        "\n left pointer moved to right, and right pointer moved to next since left > right and we dont want that",
      );
      left = right; // Move the left pointer to the right pointer
    }
    right++;
  }

  return currentMaxProfit; // Return the maximum profit
};

console.log("\n \n solution is ", solution([7, 1, 0, 3, 6, 4]));
