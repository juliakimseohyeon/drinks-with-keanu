import keanu from "./keanu.js";
import getCocktail from "./getCocktail.js";
import showCocktail from "./showCocktail.js";

keanu();

const btnElement = document.querySelector(".btn");
const cocktailDiv = document.querySelector(".cocktail");

btnElement.addEventListener("click", () => {
  getCocktail();
  showCocktail();
  keanu();
  playAudio();
  btnElement.innerText = "HAVE ANOTHER DRINK WITH KEANU";
  cocktailDiv.classList.remove("display-none");
});

function playAudio() {
  var audio = new Audio("../audio/YES.wav");
  audio.play();
}
