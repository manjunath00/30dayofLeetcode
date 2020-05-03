/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteObj = ransomNote.split("").reduce((obj, curValue) => {
    if (obj[curValue]) {
      obj[curValue] += 1;
    } else {
      obj[curValue] = 1;
    }

    return obj;
  }, {});
  const magazineObj = magazine.split("").reduce((obj = {}, curValue) => {
    if (obj[curValue]) {
      obj[curValue] += 1;
    } else {
      obj[curValue] = 1;
    }

    return obj;
  }, {});
  for (let key in ransomNoteObj) {
    if (!magazineObj[key] || magazineObj[key] < ransomNoteObj[key]) {
      return false;
    }
  }

  return true;
};
// let a = canConstruct("aa", "aab")
let a = canConstruct("aa", "ab");
console.log(a);
