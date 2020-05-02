/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    /**
     *
     * @param {integer} start
     * @param {integer} end
     */
    let recursive = function (start, end) {
      if (start > end) return start;
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        return recursive(start, mid - 1);
      } else {
        return recursive(mid + 1, end);
      }
    };
    return recursive(1, n);
  };
};
