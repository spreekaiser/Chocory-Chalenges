console.clear();

const form = document.querySelector('[data-js="form"]');
const numberA = document.querySelector("#number-a");
const numberB = document.querySelector("#number-b");

const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");

const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let result;

  // --v-- write your code here --v--
  if (addition.checked) {
    result = add(parseInt(numberA.value), parseInt(numberB.value));
    console.log(result);
  }
  if (subtraction.checked) {
    result = subtract(parseInt(numberA.value), parseInt(numberB.value));
    console.log(result);
  }
  if (multiplication.checked) {
    result = multiply(parseInt(numberA.value), parseInt(numberB.value));
    console.log(result);
  }
  if (division.checked) {
    result = divide(parseInt(numberA.value), parseInt(numberB.value));
    console.log(result);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
