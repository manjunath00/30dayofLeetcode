/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
   
    var start = false;
        for (var i = 31; i >= 0; --i) {
            if (num & (1 << i)) {//find the leftmost hightest bit 1 and start from there
                start = true;
            }
            if (start) {
               
                num ^= (1 << i);
              
            }
        }
        return num;
};
