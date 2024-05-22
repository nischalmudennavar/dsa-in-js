# Two Sum Problem

## Problem Statement

Given an array nums = [2, 1, 4, 5] and a target value target = 6, return the indices of the two values that add up to the target.

### Explanation

For example, if nums = [2, 1, 4, 7] and target = 6, the solution would be [0, 2] since the sum of 2 (at index 0) and 4 (at index 2) is 6.

### Approach #1: Brute Force

This approach uses two nested loops.

If nums = [2, 1, 4, 7], the iterations would be as follows:

- Keep i fixed at the first element (2 at index 0).
- Move j across the array to compare all other elements.
- If the sum of nums[i] and nums[j] equals the target, return [i, j].
- Here is a more detailed explanation of the brute force approach:

- For each element i in the array, iterate through the rest of the array with
- index j (starting from i + 1).
- Check if nums[i] + nums[j] equals the target.
- If a pair is found, return their indices [i, j].

### Approach #2 Optimal Approach: Hash Map

Initialize an empty hash map.
Iterate through the array nums.

- For each element nums[i], calculate its complement as target - nums[i].
- Check if the complement exists in the hash map:
- If yes, return the indices [numIndices[complement], i].
- If no, add nums[i] and its index to the hash map.
