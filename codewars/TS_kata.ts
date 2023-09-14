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

// smaler version:
export function catMouse1(x: string): string {
  return x.indexOf("m") - x.indexOf("C") > 4 ? "Escaped!" : "Caught!";
}

catMouse1("C...m");

// Dog between Cat and mouse protect the mouse
export function catMouse2(x: string, j: number): string {
  let indexCat: number = x.indexOf("C");
  let indexMouse: number = x.indexOf("m");
  let indexDog: number = x.indexOf("D");
  let mouseCatDiff: number = indexMouse - indexCat;
  console.log(indexCat, indexMouse, indexDog);
  console.log(mouseCatDiff);

  if (indexDog == -1 || indexCat == -1 || indexMouse == -1) {
    return "boring without all three";
  }
  if (mouseCatDiff > 0) {
    if (indexMouse - indexCat <= j) {
      return indexDog > indexCat && indexDog < indexMouse
        ? "Protected!"
        : "Caught!";
    } else {
      return "Escaped!";
    }
  }
  console.log(indexCat - indexMouse);
  if (mouseCatDiff < 0) {
    if (indexCat - indexMouse <= j) {
      return indexDog > indexMouse && indexDog < indexCat
        ? "Protected!"
        : "Caught!";
    } else {
      return "Escaped!";
    }
  }
  return "is nich";
}

catMouse2("....m.....D....C..................", 9);

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
const findOdd = (numArray: number[]): number => {
  let oddNum: number = 0;
  for (let i: number = 0; i < numArray.length; i++) {
    let currentNum: number = 0;
    numArray.forEach((num: number) => {
      if (numArray[i] == num) {
        currentNum += 1;
      }
    });
    if (currentNum % 2 != 0) {
      oddNum = numArray[i];
    }
  }

  return oddNum;
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}

// 1st try:
export function validBraces(braces: string): boolean {
  let bracetState: boolean = false;
  const bracesArray: string[] = braces.split("");
  let openA: number = 0,
    endA: number = 0,
    openB: number = 0,
    endB: number = 0,
    openC: number = 0,
    endC: number = 0;
  bracesArray.forEach((brac) => {
    switch (brac) {
      case "(":
        openA += 1;
        break;
      case ")":
        endA += 1;
        break;
      case "[":
        openB += 1;
        break;
      case "]":
        endB += 1;
        break;
      case "{":
        openC += 1;
        break;
      case "}":
        endC += 1;
        break;
    }
  });
  if (openA === endA && openB === endB && openC === endC) {
    bracetState = true;
  }
  return bracetState;
} // just checks the numbers of bracets - not the order
