import menu from "../utils/menu";
import Card from "./components/Card";

export default function App(): string {
  return /*html*/`
  <section class="menu">
    <div class="title">
      <h2>our menu</h2>
      <div class="underline"></div>
    </div>
    <div class="section-center">
      ${ menu.map(item => Card(item)).join("") }
    </div>
  </section>
`;
}