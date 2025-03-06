import "./style.css";

type Pages = "color";

declare global {
  interface Window {
    stupidFunction: (page: Pages) => void;
  }
}

window.stupidFunction = (page) => {
  location.href = `${page}/`;
};