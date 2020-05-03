/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ransomNoteArray = ransomNote.split("");
  let magazineArray = magazine.split("");

  for (let i = 0; i < ransomNoteArray.length; i++) {
    if (magazineArray.includes(ransomNoteArray[i])) {
      magazineArray[magazineArray.indexOf(ransomNoteArray[i])] = "";
    } else {
      return false;
    }
  }

  return true;
};

let a = canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi");
console.log(a);
