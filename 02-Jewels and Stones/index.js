/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let jewels = new Set(J);
  let total = 0;
  for (let i = 0; i < S.length; i++) {
    if (jewels.has(S[i])) total++;
  }
  return total;
};
