import getCocktail from "./getCocktail.js";

const cocktailDiv = document.querySelector(".cocktail");
const cocktailTitle = document.querySelector(".cocktail__title");
const cocktailImage = document.querySelector(".cocktail__image");
const cocktailGlass = document.querySelector(".cocktail__glass");
const cocktailIngredients = document.querySelector(".cocktail__ingredients");
const cocktailMeasure = document.querySelector(".cocktail__measurement");
const cocktailInstructions = document.querySelector(".cocktail__instructions");

// function removeAllIngrediants() {
//   cocktailIngredients.innerText = '';

// }

async function showCocktail() {
  cocktailIngredients.innerText = '';
  cocktailMeasure.innerText = '';
  
  try {
    const cocktail = await getCocktail();
    console.log(cocktail);
    cocktailTitle.innerText = cocktail.strDrink;
    cocktailImage.src = cocktail.strDrinkThumb;
    cocktailGlass.innerText = cocktail.strGlass;

    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }

    ingredients.forEach((ingredient) => {
      console.log(ingredient);
      const cocktailItem = document.createElement('li');
      cocktailItem.innerText = ingredient;
      cocktailItem.classList.add('cocktail__ingredient');
      cocktailIngredients.appendChild(cocktailItem);
      console.log(cocktailItem);
    });

    let measures = [];
    for (let i = 1; i <= 15; i++) {
      const measure = cocktail[`strMeasure${i}`];
      if (measure) {
        measures.push(measure);
      }
    }

    measures.forEach((measure) => {
      const cocktailMeasureItem = document.createElement('li');
      cocktailMeasureItem.innerText = measure;
      cocktailMeasureItem.classList.add('cocktail__measure');
      cocktailMeasure.appendChild(cocktailMeasureItem);
    });
  
    cocktailInstructions.innerText = cocktail.strInstructions;
  } catch (error) {
    console.error(error);
  }
}

showCocktail();





export default showCocktail;
