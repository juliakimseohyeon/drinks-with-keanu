/* -------------------------------------------------------------------------- */
/*                             get Keanu function                             */
/* -------------------------------------------------------------------------- */
const backgroundEl = document.querySelector("body");

function generateRandomKeanu() {
  const randNum = Math.floor(Math.random() * 100) + 450;
  return randNum;
}

async function getKeanu() {
  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://placekeanu.com/${generateRandomKeanu()}/${generateRandomKeanu()}`
    );
    const keanuImgUrl = response.config.url;
    backgroundEl.style.backgroundImage = `url('${keanuImgUrl}')`;
  } catch (error) {
    console.error(error);
  }
}

getKeanu();

export default getKeanu;
