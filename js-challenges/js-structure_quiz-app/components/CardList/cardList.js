import { Cards } from "../Card/cards.js";
import { Card } from "../Card/card.js";

const cards = Cards();

export function CardList() {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}
