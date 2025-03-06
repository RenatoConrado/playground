import "./style.css";
import getRandomPredefinedColor from "./utils/predefinedcolor";
import getRandomHexColor from "./utils/hexColor";

function handleClick(colorFunction: () => string): void {
  const randomColor = colorFunction();
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
}

const buttonHex = document.getElementById("buttonHex") as HTMLButtonElement;
const buttonPre = document.getElementById("buttonPre") as HTMLButtonElement;
const colorText = document.querySelector(".color") as HTMLSpanElement;

buttonHex.addEventListener("click", () => handleClick(getRandomHexColor));

buttonPre.addEventListener("click", () => handleClick(getRandomPredefinedColor));