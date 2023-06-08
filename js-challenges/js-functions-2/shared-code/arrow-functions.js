() => {};

function sayHello(name) {
    console.log('Hi there, ' + name + '!');
}

const sayHelloArrow = (name) => {
    console.log('Hi there, ' + name + '!');
};

sayHello('Sam');
sayHelloArrow('Sally');

// f(x) = x + 5

const add = (number1, number2) => {
    return number1 + number2;
};

const addShorter = (num1, num2) => num1 + num2;
const square = (num) => num * num;

console.log('the answer is ' + add(9, 3));
console.log('the answer is ' + addShorter(9, 3));

// Maybe a bit too complex for now... 😅
console.log('2 squared is ' + ((n) => n * n)(2));
