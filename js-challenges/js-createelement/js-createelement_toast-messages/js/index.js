console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  newToast = document.createElement("li");
  newToast.textContent = "A new Toast is born";
  newToast.classList.add("toast-container__message");
  // console.log(newToast);
  // console.log(newToast.innerText);
  toastContainer.append(newToast);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages

  toastContainer.innerHTML = "";
});
