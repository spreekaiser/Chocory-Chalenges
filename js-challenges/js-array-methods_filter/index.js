console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2";
  // const found = card.find(element => element == '2')  ---> possible to use find()
});

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length == 3;
});

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked == false;
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  // if (card.isBookmarked === true) {
  //   card.tags.includes("html") || card.tags.includes("js");
  //   return card;
  // }
  return (
    (card.tags.includes("html") || card.tags.includes("js")) &&
    card.isBookmarked
  );
});

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};

console.log(onlyCardWithIdTwo);
