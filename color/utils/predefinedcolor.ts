import getRandomNumber from "./randomNumber";

type Colors = "green" | "red" | "rgba(133,122,200)" | "#f15025";

const colors: Colors[] = ["green", "red", "rgba(133,122,200)", "#f15025"];

export default function getRandomPredefinedColor(): Colors {
  const randomNumber = getRandomNumber(colors.length - 1);
  return colors[randomNumber];
}
