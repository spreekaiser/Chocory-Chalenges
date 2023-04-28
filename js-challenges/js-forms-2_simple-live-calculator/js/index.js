console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

const multiply = () => {
  result.textContent = firstInput.value * secondInput.value;
};

firstInput.addEventListener("input", (e) => {
  multiply();
});

secondInput.addEventListener("input", (e) => {
  multiply();
});

// firstInput.addEventListener("input", (e) => {
//   let firstNumber = e.target.value;
//   firstNumber = parseInt(firstNumber);
//   result.textContent = multiplySum(firstNumber, secondInput.value);
//   console.log(result.value);
// });

// secondInput.addEventListener("input", (e) => {
//   result.textContent = multiplySum(firstInput.value, secondInput.value);
// });

// function multiplySum(a, b) {
//   return a * b;
// }
