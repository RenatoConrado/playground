import "./style.css";
/* import transverseTheDom from "./functions/transverseTheDom";
transverseTheDom(); */

function toggleText(question: HTMLElement): void {
  const button = question.querySelector(".question-btn") as HTMLButtonElement;

  button.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
}

const QuestionsList = document.querySelectorAll(".question") as NodeListOf<HTMLElement>;

QuestionsList.forEach(toggleText);