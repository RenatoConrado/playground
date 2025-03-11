import './style.css';

const dom = {
  open:   <HTMLButtonElement>  document.getElementById("open-modal"),
  modal:  <HTMLDivElement>     document.getElementById("modal"),
  close:  <HTMLButtonElement>  document.getElementById("close-modal")
};

dom.open.addEventListener("click", (e) => {
  dom.modal.classList.add("open-modal");
});
dom.close.addEventListener("click", (e) => {
  dom.modal.classList.remove("open-modal");
});
