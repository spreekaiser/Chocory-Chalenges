console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (e) => {
  let upperInput = e.target.value.toUpperCase();
  input.value = upperInput;
});
