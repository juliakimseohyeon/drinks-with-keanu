const cocktailDiv = document.querySelector(".cocktail");
const cocktailTitle = document.querySelector(".cocktail__title");
const cocktailImage = document.querySelector(".cocktail__image");
const cocktailGlass = document.querySelector(".cocktail__glass");
const cocktailIngredients = document.querySelector(".cocktail__ingredients");
const cocktailMeasure = document.querySelector(".cocktail__measure");
const cocktailInstructions = document.querySelector(".cocktail__instructions");

async function showCocktail() {
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
      cocktailIngredients.innerText += `${ingredient},`;
    });

    console.log(ingredients);
    cocktailInstructions.innerText = cocktail.strInstructions;
  } catch (error) {
    console.error(error);
  }
}

showCocktail();

export default showCocktail;
