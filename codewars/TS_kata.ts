// Codewars challenges in TypeScript

// strainth of 7

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s: string): number {
  const words: string[] = s.split(" ");
  let length: number = words[1].length;
  words.forEach((element) => {
    if (length > element.length) {
      length = element.length;
    }
  });
  return length;
}

findShort("bitcoin take over the world maybe who knows perhaps");
