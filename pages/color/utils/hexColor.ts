import getRandomNumber from "../../../utils/randomNumber.ts";

const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

export default function randomHexColor(): string {
  let hexColor = "#";
  for (let index = 0; index < 6; index++) {
    const j = getRandomNumber(hex.length - 1);
    hexColor += hex[j];
  }
  return hexColor;
}