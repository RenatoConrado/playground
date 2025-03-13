export default function transverseTheDom() {
  const ListOfButtons = document.querySelectorAll(".question-btn") as NodeListOf<HTMLButtonElement>;

  function logButton(e: MouseEvent): void {
    const target = e.currentTarget as HTMLElement;
    const question = target.parentElement?.parentElement;

    question?.classList.toggle("show-text");
  }

  ListOfButtons.forEach(
    (button: HTMLButtonElement): void => {
      button.addEventListener("click", logButton);
    }
  );
}
