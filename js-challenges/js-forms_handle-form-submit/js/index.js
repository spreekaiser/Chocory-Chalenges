console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // -->  Formular mit einzelnen Elementen auslesen  <--
  //   const elements = event.target.elements;
  //   console.log(elements.firstName.value + " " + elements.lastName.value);
  //   console.log(elements.details.value);

  // -->  Formular mit FormData - Objekt auslesen  <--
  const formData = new FormData(event.target);
  // const name = formData.get("firstName");  // direkt vom Objekt auslesen

  const data = Object.fromEntries(formData); // die <entries> aus dem Objekt auslesen
  const name = data.firstName;
  console.log(name);
});
