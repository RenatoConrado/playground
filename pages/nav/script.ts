import './style.css';

const dom = {
  navToggle: document.querySelector(".nav-toggle") as HTMLButtonElement,
  links: document.querySelector(".links") as HTMLUListElement,
};

dom.navToggle.addEventListener("click", (): void => {
  dom.links.classList.toggle("show-links");
});