function validBraces(expression) {
    var bracketsArray = [];
    var bracketsObject = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (var _i = 0, expression_1 = expression; _i < expression_1.length; _i++) {
        var char = expression_1[_i];
        if (char in bracketsObject) {
            var topElement = bracketsArray.pop() || "#";
            if (bracketsObject[char] !== topElement) {
                return false;
            }
        }
        else {
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
