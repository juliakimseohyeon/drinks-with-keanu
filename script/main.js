import keanu from "./keanu.js";
import getCocktail from "./getCocktail.js";
import showCocktail from "./showCocktail.js";

getCocktail();
showCocktail();
keanu();

const btnElement = document.querySelector('.btn');

btnElement.addEventListener('click',() => {
    getCocktail();
    showCocktail();
    keanu();
    playAudio();
    btnElement.innerText = "HAVE ANOTHER DRINK WITH KEANU";
});

function playAudio() {
    var audio = new Audio('../audio/YES.wav');
    audio.play();
}