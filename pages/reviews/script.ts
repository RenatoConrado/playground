import "./style.css";
import reviews from "./utils/reviews";
import getRandomNumber from "../../utils/randomNumber";
import renderProfile from "./utils/profile";
import { profiles, buttons } from "./utils/domElements";

const FirstItem = 1;
const LastItem = reviews.length;
let currentItem = FirstItem;

window.addEventListener("DOMContentLoaded", () => {
  renderProfile(profiles, currentItem);
});

buttons.prevButton.addEventListener("click", () => {
  currentItem = (currentItem < FirstItem)
    ? LastItem
    : --currentItem;
  renderProfile(profiles, currentItem);
});

buttons.nextButton.addEventListener("click", () => {
  currentItem = (currentItem > LastItem)
    ? FirstItem
    : ++currentItem;
  renderProfile(profiles, currentItem);
});

buttons.randomButton.addEventListener("click", () => {
  renderProfile(profiles, getRandomNumber(LastItem, FirstItem));
});