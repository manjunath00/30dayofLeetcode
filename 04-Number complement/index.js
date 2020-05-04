/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // converts num to binary & then splits it
  const numString = parseInt(num, 10).toString(2).split("");
  let result = numString.map((digit) => Number(digit) ^ 1);

  return parseInt(result.join(""), 2);
};

const result = findComplement(5);
console.log(result);
