### Max Subarray

My understanding is we are given an array nums=[5,4,-1,7,8] , i need to find maximu possible sum in that array... and the sub array is contiguous, meaning it it only flow from left to right.

// Kadane's algorithm
// two vars, max, sum
// 1. sum = sum+num[i]
// 2. max = Math.max(max,sum )
// 3. if (sum < 0) then sum = 0; else retain previous value
