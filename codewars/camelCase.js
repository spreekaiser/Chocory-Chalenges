"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = void 0;
function camelCase(str) {
    var result = "";
    str.split(" ").forEach(function (word) {
        var letterArray = word.split("");
        if (letterArray[0]) {
            letterArray[0] = letterArray[0].toUpperCase();
            result = result + letterArray.join("");
        }
    });
    console.log(result);
    return result;
}
exports.camelCase = camelCase;
camelCase("f un c tion is c a lled with the following arguments");
