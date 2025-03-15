import "../style.css";
import App from "./App";
import buttonSwitch from "./functions/buttonSwitch";
import preloader from "./functions/preloader";

const root = document.getElementById("app") as HTMLDivElement;
root.innerHTML = App();

buttonSwitch();
preloader();