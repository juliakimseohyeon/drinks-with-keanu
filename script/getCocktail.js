/* -------------------------------------------------------------------------- */
/*                            get Cocktail function                           */
/* -------------------------------------------------------------------------- */
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

export default getCocktail;
