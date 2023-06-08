console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function createNewParagraf() {
  const paragraf = document.createElement("p");
  paragraf.classList.add("post__content");
  paragraf.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  return paragraf;
}

function createNewFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("post__footer");
  console.log(footer);

  const span = document.createElement("span");
  span.classList.add("post__username");
  span.textContent = "@username";

  const button = document.createElement("button");
  button.classList.add("post__button");
  button.addEventListener("click", handleLikeButtonClick);
  button.textContent = "♥ Like";

  footer.append(span);
  footer.append(button);
  return footer;
}

function createNewPost() {
  const article = document.createElement("article");
  article.classList.add("post");

  article.append(createNewParagraf());
  article.append(createNewFooter());
  console.log(article);

  const body = document.querySelector("body");
  body.append(article);
  console.log(body);
}

createNewPost();
createNewPost();
createNewPost();
createNewPost();
