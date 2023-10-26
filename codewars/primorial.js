"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numPrimorial = void 0;
function numPrimorial(n) {
    var numPrimorial = 1;
    var primNumber = [];
    function isPrime(prim) {
        if (prim <= 1)
            return false;
        for (var i = 2; i <= prim - 1; i++)
            if (prim % i == 0)
                return false;
        return true;
    }
    for (var i = 1; i++;) {
        if (isPrime(i)) {
            primNumber.push(i);
            console.log("primNumber: " + primNumber);
        }
        if (primNumber.length === n)
            break;
    }
    primNumber.map(function (m) { return (numPrimorial = numPrimorial * m); });
    console.log("numPrimorial finish: ", numPrimorial);
    return numPrimorial;
}
exports.numPrimorial = numPrimorial;
numPrimorial(6);
