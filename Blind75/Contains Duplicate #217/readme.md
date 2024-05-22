# Contains Duplicate Problem

## Problem Statement

Given an array `nums`, determine if the array contains any duplicate elements. Return `true` if any value appears at least twice in the array, and `false` if every element is distinct.

## Explanation

For example, if `nums = [1, 2, 3, 1]`, the function should return `true` because the number `1` appears twice. If `nums = [1, 2, 3, 4]`, the function should return `false` because all elements are distinct.

## Approach: Using a Set

### Explanation

The optimal approach uses a Set to track elements we have seen so far:

1. Convert the array to a Set. A Set automatically removes duplicates because it only allows unique values.
2. Compare the size of the Set to the length of the array.
   - If the Set's size is smaller, it means there were duplicates in the array.
   - If the Set's size is equal to the array's length, all elements were unique.

### Example Code in JavaScript

```javascript
var containsDuplicate = function (nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
};

// Example usage
let nums1 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1)); // Output: true

let nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums2)); // Output: false
```
