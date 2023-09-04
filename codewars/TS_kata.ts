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

// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:
// C.....m returns 'Escaped!' <-- more than three characters between
// C...m returns 'Caught!' < --as there are three characters between the two, the cat can jump.
export function catMouse(x: string): string {
  if (x.indexOf("m") - x.indexOf("C") > 4) {
    return "Escaped!";
  } else {
    return "Caught!";
  }
}

catMouse("C...m");

//
