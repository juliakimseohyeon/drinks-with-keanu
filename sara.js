console.log("hello JavaScript ✨");

async function getCocktail() {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    return response.data.drinks[0];
    console.log(cocktail);
  } catch (error) {
    console.error(error);
  }
}

getCocktail();

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

    const ingredients = [];
    for (let i = 1; i < 16; i++) {
      const ingredient = `cocktail.strIngredient${i}`;
      ingredients.push(ingredient);
    }

    console.log(ingredients);
    cocktailInstructions.innerText = cocktail.strInstructions;
  } catch (error) {
    console.error(error);
  }
}

showCocktail();

async function getKeanu() {
  try {
    const response = await axios.get("https://placekeanu.com/400/400/");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getKeanu();
