console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
firstNameInput.focus();
console.log(firstNameInput);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
});

firstNameInput.addEventListener("input", (e) => {
  let inputValue = Math.round((e.target.value.length / 4) * 100);
  console.log(inputValue);

  if (inputValue >= 100) {
  }
});
