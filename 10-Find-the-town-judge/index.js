/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    if(N == 2) return trust[0][1]
  let obj = {};
  for (let x of trust) {
    const [first, second] = x;
    if (obj[second]) {
      obj[second]++;
    } else {
      obj[second] = 1;
    }
  }
  const max = Math.max(...Object.values(obj));
  if (max == N) {
    return max;
  } else {
    return -1;
  }
};

let N = 4;
let trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];
// let N = 3;
// let trust = [
//   [1, 2],
//   [2, 3],
// ];

let result = findJudge(N, trust);

console.log(result);
