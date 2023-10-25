export function spinWords(words: string): string {
  let wordArray: string[] = words.split(" ");
  console.log(wordArray);
  let spinWords: string[] = [];
  for (let i: number = 0; i < wordArray.length; i++) {
    let word: string = wordArray[i];
    if (wordArray[i].length > 4) {
      let reverseWord: string[] = wordArray[i].split("").reverse();
      word = reverseWord.join("");
      console.log(wordArray[i], word);
    }
    spinWords.push(word + " ");
  }
  return spinWords.join("").replace(/ (?=[^ ]*$)/, "");
}

console.log(spinWords("Hey fellow warriors"));
