function validBraces(expression: string): boolean {
  const bracketsArray: string[] = [];
  const bracketsObject: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of expression) {
    if (char in bracketsObject) {
      const topElement = bracketsArray.pop() || "#";
      if (bracketsObject[char] !== topElement) {
        return false;
      }
    } else {
      bracketsArray.push(char);
    }
  }

  return bracketsArray.length === 0;
}

console.log(validBraces("(){}[]")); // True
console.log(validBraces("([{}])")); // True
console.log(validBraces("(}")); // False
console.log(validBraces("[(])")); // False
console.log(validBraces("[({})](]")); // False
