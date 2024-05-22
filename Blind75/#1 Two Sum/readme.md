# Two Sum Problem

## Problem Statement

Given an array `nums = [2, 1, 4, 5]` and a target value `target = 6`, return the indices of the two values that add up to the target.

## Explanation

For example, if `nums = [2, 1, 4, 7]` and `target = 6`, the solution would be `[0, 2]` since the sum of `2` (at index `0`) and `4` (at index `2`) is `6`.

## Approach #1: Brute Force

This approach uses two nested loops.

If `nums = [2, 1, 4, 7]`, the iterations would be as follows:

1. Keep `i` fixed at the first element (`2` at index `0`).
2. Move `j` across the array to compare all other elements.
3. If the sum of `nums[i]` and `nums[j]` equals the target, return `[i, j]`.

Here is a more detailed explanation of the brute force approach:

- For each element `i` in the array, iterate through the rest of the array with index `j` (starting from `i + 1`).
- Check if `nums[i] + nums[j]` equals the target.
- If a pair is found, return their indices `[i, j]`.

## Optimal Approach: Using a Hash Map

### Explanation

Instead of using a brute force approach with two nested loops, we can use a hash map to store the indices of the elements we have seen so far. This allows us to check if the complement (the difference between the target and the current element) exists in the map, which can be done in constant time.

### Steps:

1. Initialize an empty hash map.
2. Iterate through the array `nums`.
3. For each element, calculate its complement as `target - nums[i]`.
4. Check if the complement exists in the hash map:
   - If it does, return the indices of the current element and the complement.
   - If it does not, add the current element and its index to the hash map.

### Optimal solution Code in JavaScript

```javascript
function twoSum(nums, target) {
  let numIndices = {}; // Hash map to store number and its index
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }
    numIndices[nums[i]] = i;
  }
  return null; // Return null if no solution is found
}

// Example usage
let nums = [2, 1, 4, 7];
let target = 6;
console.log(twoSum(nums, target)); // Output: [0, 2]
```
