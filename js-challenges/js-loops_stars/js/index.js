console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
var starnumber = 3;

function renderStars(starNumber) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i += 1) {
    const image = document.createElement("img");
    if (i <= starNumber) {
      console.log("if: " + i);
      image.src = "./assets/star-filled.svg";
    } else {
      console.log("else: " + i);
      image.src = "./assets/star-empty.svg";
    }
    image.alt = i + ". star";
    image.addEventListener("click", (e) => {
      // console.log(i);
      renderStars(i);
    });
    starContainer.append(image);
  }
  //--^-- your code here --^--
}

renderStars(0);
