import "./style.css";
import App from "./App";
import DOMPurify from "dompurify";

const app = document.getElementById("app") as HTMLDivElement;

app.innerHTML = App();