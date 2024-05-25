// const solution = (nums) => {
//   let candidate = null;
//   count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (count == 0) {
//       candidate = nums[i];
//     }
//     if (candidate === nums[i]) {
//       count++;
//     } else {
//       count--;
//     }
//   }
//   return candidate;
// };
const solution = (nums) => {
  const map = new Map();
  let maxCount = 0;

  for (let n of nums) {
    map[n] = 1 + map.get(n, 0);
    if (map[n] > maxCount) {
      res = n;
    }
    maxCount = Math.max(map[n], maxCount);
  }
};
console.log(solution([1, 2, 2, 2, 2, 2, 2, 2, 1, 1]));
