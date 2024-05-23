# Maximum Stock Profit Algorithm

This algorithm computes the maximum profit that can be obtained from buying and selling stocks on consecutive days.

## Algorithm Description

1. **Initialization:**

   - Initialize two pointers, `left` and `right`, to the first and second elements of the array, respectively.
   - Initialize a variable `currentMaxProfit` to store the maximum profit found so far.

2. **Iterate through the Array:**

   - Iterate through the array using a `for` loop, stopping one index before the end.
   - Inside the loop, compare the values at the `left` and `right` pointers.

3. **Profit Calculation:**

   - If the value at the `left` pointer is less than the value at the `right` pointer:
     - Calculate the potential profit by subtracting the value at `left` from the value at `right`.
     - Update `currentMaxProfit` with the maximum of the current profit and the previous maximum profit.

4. **Pointer Movement:**

   - If the value at the `left` pointer is greater than or equal to the value at the `right` pointer:
     - Move the `left` pointer to the `right` pointer's position.
     - Increment the `right` pointer to the next position.

5. **Return:**
   - After the loop finishes, return `currentMaxProfit` as the maximum profit.

## Usage

```python
def max_stock_profit(nums):
    left = 0
    right = 1
    current_max_profit = 0

    for i in range(len(nums) - 1):
        if nums[left] < nums[right]:
            current_profit = nums[right] - nums[left]
            current_max_profit = max(current_max_profit, current_profit)
        else:
            left = right
        right += 1

    return current_max_profit
```
