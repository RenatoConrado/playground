export type Pages =
  | "color"
  | "reviews"
  | "nav"
  | "modal"
  | "questions"
  | "menu"
  | "video";

/** {@link https://stackoverflow.com/a/45352250 StackOverflow reference} */
export interface CustomWindow extends Window {
  /** Redirect to one of the Pages */
  stupidFunction: (page: Pages) => void;
}