/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const stringObj = s.split("").reduce((obj, curValue) => {
    if (obj[curValue]) {
      obj[curValue] += 1;
    } else {
      obj[curValue] = 1;
    }

    return obj;
  }, {});
  let array = s.split("");

  for (let x in array) {
    let char = array[x];
    if (stringObj[char] === 1) {
      return x;
    }
  }

  return -1;
};

// const s = "leetcode"
// const s = "loveleetcode"
// const s = "cc";
// const s = "z";
// const s = "aadadaad";
// const s = "dddccdbba";

const res = firstUniqChar(s);
console.log(res);
