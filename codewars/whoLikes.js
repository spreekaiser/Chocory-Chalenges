"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
var likes = function (a) {
    if (a.length == 0) {
        return "no one likes this";
    }
    else if (a.length == 1) {
        return a.join().concat(" likes this");
    }
    else if (a.length <= 3) {
        return a
            .join(", ")
            .replace(/,$/, "")
            .replace(/,([^,]*)$/, " and" + "$1")
            .concat(" like this");
    }
    else {
        var a1 = a.slice(0, 2);
        return a1
            .join(", ")
            .replace(/,$/, "")
            .concat(" and ".concat(a.length - 2, " others like this"));
    }
};
exports.likes = likes;
// best solution is to put it in a switch case function
console.log((0, exports.likes)(["Jacob", "Alex", "Jodi", "Gabi", "Peter"]));
