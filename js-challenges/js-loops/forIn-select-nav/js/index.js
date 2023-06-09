console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

for (index in languages) {
  // console.log(index);
  // console.log(languages[index]);
  const option = document.createElement("option");
  option.innerText = languages[index];
  select.append(option);
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

for (index in nav) {
  // console.log(index);
  // console.log(nav[index]);
  const liItem = document.createElement("li");
  const aLink = document.createElement("a");

  for (liAtribute in nav[index]) {
    // console.log(liAtribute);
    // console.log(nav[index][liAtribute]);
    aLink[liAtribute] = nav[index][liAtribute];
  }
  console.log(aLink);
  liItem.append(aLink);
  ul.append(liItem);
}

// --^-- write/change code here --^--
