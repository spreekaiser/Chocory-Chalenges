let value;

// value = false;
// value = true;
// value = 0;
// value = 1;
// value = 40;
// value = -30;
// value = 'Chicory';
// value = '';
// value = null;

// if (value) {
//     console.log('Value is a truthy. \t Value: ', value);
// } else {
//     console.log('Value is falsy.\t Value: ', value);
// }

const max = 10;
let number = Math.random() * max;
number = Math.floor(number);

// let number1 = Math.floor(Math.random() * max);

// console.log("Before If Number is: '", number);
// if (number > 2) {
//     number--;
// } else {
//     number++;
// }
// console.log("After If Number is: '", number);

// const boolValue = number > 2;
// console.log("Before If Number is: '", number);
// console.log("After If boolValue is: '", boolValue);

// if (boolValue) {
//     number -= 1;
// } else {
//     number += 1;
// }
// console.log("After If Number is: '", number);

/* ------------------------------
        Ternary Operator.
---------------------------------- 
 condition ? expressionIfTURTHY : expressionIfFASLY
*/
// if (number > 2) {
//     number--;
// } else {
//     number++;
// }

// console.log("Before If Number is: '", number);
// number > 2 ? number-- : number++;
// console.log("After If Number is: '", number);

const animal = 'Cat';
let emoji;

if (animal === 'Dog') {
    emoji = '🐶';
} else if (animal === 'Tiger') {
    emoji = '🐯';
} else if (animal === 'Elephant') {
    emoji = '🐘';
} else if (animal === 'Cat') {
    emoji = '🐱';
} else if (animal === 'Monkey') {
    emoji = '🐒';
} else {
    emoji = '❓';
}

console.log('Animal is: ', animal, '\t Emoji is: ', emoji);

switch (animal) {
    case 'Dog':
        emoji = '🐶';
        break;
    case 'Tiger':
        emoji = '🐯';
        break;
    case 'Elephant':
        emoji = '🐘';
        break;
    case 'Cat':
        emoji = '🐱';
        break;
    case 'Monkey':
        emoji = '🐒';
        break;
    default:
        emoji = '❓';
}

console.log('Animal is: ', animal, '\t Emoji is: ', emoji);

/* 

typeof
*/
