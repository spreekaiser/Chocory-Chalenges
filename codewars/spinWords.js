"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinWords = void 0;
function spinWords(words) {
    var wordArray = words.split(" ");
    console.log(wordArray);
    var spinWords = [];
    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        if (wordArray[i].length > 4) {
            var reverseWord = wordArray[i].split("").reverse();
            word = reverseWord.join("");
            console.log(wordArray[i], word);
        }
        spinWords.push(word + " ");
    }
    return spinWords.join("").replace(/ (?=[^ ]*$)/, "");
}
exports.spinWords = spinWords;
console.log(spinWords("Hey fellow warriors"));
