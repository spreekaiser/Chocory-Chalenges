import { Cards } from "./components/Card/cards.js";
import { App } from "./components/App/app.js";

const cards = Cards();

// function App() {
//   const app = document.createElement("main");
//   app.classList.add("app");
//   app.append(Header(), Form(), CardList());

//   return app;
// }

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
