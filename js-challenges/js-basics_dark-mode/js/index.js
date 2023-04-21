console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkButton = document.querySelector(".button--dark");
const lightButton = document.querySelector(".button--light");
const toggleButton = document.querySelector(".button--toggle");

darkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  //   console.log("toggle Button: " + toggleButton);
});
