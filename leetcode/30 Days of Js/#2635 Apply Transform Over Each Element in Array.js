/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  var newArr = [];
  // arr.forEach((element) => newArr.push(fn(element)));
  for (const [index, element] of arr.entries()) {
    newArr.push(fn(element, index));
  }
  return newArr;
};
