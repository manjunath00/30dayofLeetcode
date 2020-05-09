/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num == 1) {
    return true;
  }

  const findRes = function (start = 0, end = num, num) {
    // let start = 0;
    // let end = num;
    let mid = Math.floor((start + end) / 2);

    if (mid * mid == num) {
      return true;
    } else if (mid * mid > num) {
      return findRes(start, mid, num);
    } else {
      return findRes(mid, num, num);
    }

    return false;
  };

  const res = findRes(num);
  return res;
};
