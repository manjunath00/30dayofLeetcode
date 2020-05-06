/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let numsObj = {};
  let len = nums.length;
  nums.forEach((item) =>
    numsObj[item] ? numsObj[item]++ : (numsObj[item] = 1)
  );

  for (let num in numsObj) {
    if (numsObj[num] > len / 2) {
      return num;
    }
  }
};
