"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistence = void 0;
function persistence(num) {
    var result = 0;
    var numArray = num.toString().split("");
    console.log("1. numArray.length: ", numArray.length);
    while (numArray.length > 1) {
        result += 1;
        var newNum = 1;
        for (var i = 0; i < numArray.length; i++) {
            newNum *= parseInt(numArray[i]);
            console.log("numArray[".concat(i, "]"), numArray[i]);
        }
        console.log("newNum: ", newNum);
        numArray = newNum.toString().split("");
        console.log("2. numArray.content: ", numArray);
        console.log("2. numArray.length: ", numArray.length);
        console.log("Repeatings: : ", result);
    }
    console.log("EndResult is: : ", result);
    return result;
}
exports.persistence = persistence;
persistence(39);
