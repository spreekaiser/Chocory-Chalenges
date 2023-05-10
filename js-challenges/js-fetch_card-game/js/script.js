import { CardsDisplay } from "../components/CardsDisplay/CardsDisplay.js";
import { Button } from "../components/Button/Button.js";
import { getCards } from "./getCards.js";

const main = document.querySelector("main");

const playButton = Button("Play");
const resetButton = Button("Reset");
const cardsDisplay = CardsDisplay();
main.append(cardsDisplay, playButton, resetButton);

playButton.addEventListener("click", async () => {
    const cards = await getCards();
    console.log(cards);
    cardsDisplay.innerHTML = cards;
});

resetButton.addEventListener("click", () => {
    cardsDisplay.innerHTML =
        "<h1>Press play to get your first set of cards</h1>";
});
