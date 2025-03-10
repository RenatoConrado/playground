import "./style.css";
import type { CustomWindow, Pages } from "./types";

declare let window: CustomWindow;

window.stupidFunction = (page: Pages) => {
  location.href = `/pages/${page}/`;
};