export const getCards = async (numOfCards = 2) => {
    try {
        const response = await fetch(
            `https://deckofcardsapi.com/api/deck/new/draw/?count=${numOfCards}`
        );
        let cardSet = "";

        if (!response.ok) {
            console.error("Bad response: ", response.status);
            cardSet = "Ops! Try again.";
            return cardSet;
        }

        const deck = await response.json();

        deck.cards.forEach((card) => {
            cardSet += `<img src=${card.image} />`;
        });
        return cardSet;
    } catch (error) {
        console.log(error);
    }
};
