/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    const calcSlope = function(arr1, arr2) {
        console.log(arr1, arr2)
        const [x1, y1] = arr1;
        const [x2, y2] = arr2;
        const slope = (y2 - y1) / (x2 - x1);
        return slope;
    };

    let len = coordinates.length;
    for(let x = 0; x < len-3; x++) {
        let slope1 = calcSlope(coordinates[x], coordinates[x+1]);
        let slope2 = calcSlope(coordinates[x+2], coordinates[x+3]);
        if(slope1 != slope2) {
            return false;
        }
    }

    return true;
};

// let x = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

let x = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]

console.log(checkStraightLine(x))