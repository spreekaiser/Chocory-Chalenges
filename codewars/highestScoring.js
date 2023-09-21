"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function high(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var words = str.split(" ");
    var highestScore = 0;
    var highestWord = "";
    console.log("index of a: ", alphabet.indexOf("a"));
    var _loop_1 = function (i) {
        var wordScore = 0;
        var wordLetters = words[i].split("");
        wordLetters.forEach(function (x) {
            wordScore = wordScore + (alphabet.indexOf(x) + 1);
        });
        console.log(words[i], wordScore);
        if (wordScore > highestScore) {
            highestScore = wordScore;
            highestWord = words[i];
        }
    };
    for (var i = 0; i < words.length; i++) {
        _loop_1(i);
    }
    console.log(highestWord);
    return highestWord;
}
exports.default = high;
high("aa b");
