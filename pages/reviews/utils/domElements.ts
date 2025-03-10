import type { Profile } from "./types";

export const profiles: Profile = {
  img: document.getElementById("person-img") as HTMLImageElement,
  author: document.getElementById("author") as HTMLHeadingElement,
  job: document.getElementById("job") as HTMLParagraphElement,
  info: document.getElementById("info") as HTMLParagraphElement,
};

export const buttons: Record<string, HTMLButtonElement> = {
  prevButton: document.querySelector(".prev-btn") as HTMLButtonElement,
  nextButton: document.querySelector(".next-btn") as HTMLButtonElement,
  randomButton: document.querySelector(".random-btn") as HTMLButtonElement
};