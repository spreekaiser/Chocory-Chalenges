export default function high(str: string): string {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  const words: string[] = str.split(" ");
  let highestScore: number = 0;
  let highestWord: string = "";
  console.log("index of a: ", alphabet.indexOf("a"));
  for (let i: number = 0; i < words.length; i++) {
    let wordScore: number = 0;
    let wordLetters: string[] = words[i].split("");
    wordLetters.forEach((x) => {
      wordScore = wordScore + (alphabet.indexOf(x) + 1);
    });
    console.log(words[i], wordScore);
    if (wordScore > highestScore) {
      highestScore = wordScore;
      highestWord = words[i];
    }
  }
  console.log(highestWord);
  return highestWord;
}

high("aa b");
