export default function preloader(): void {
  const preloader = document.querySelector(".preloader") as HTMLDivElement;

  window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
  });
}