console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const FormData = new FormData(event.target);
  const data = Object.fromEntries(FormData);
  buildTask(data);

  form.reset();
  form.nextElementSibling.headline.focus();
});

function buildTask(data) {
  const listItem = document.createElement("li");
  todoList.appendChild(listItem);
}
