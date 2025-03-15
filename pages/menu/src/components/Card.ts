import DOMPurify from "dompurify";

export type Item = {
  img: string,
  title: string,
  price: number,
  desc: string;
};

export default function Card(item: Item): string {
  const price= item.price;
  const img = DOMPurify.sanitize(item.img);
  const title = DOMPurify.sanitize(item.title);
  const desc = DOMPurify.sanitize(item.desc);

  return /* html */`
  <article class="menu-item">
    <img src="/playground/${img}" alt="Image of ${title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${title}</h4>
        <h4 class="price">$${price}</h4>
      </header>
      <p class="item-text">
        ${desc}
      </p>
    </div>
  </article>
  `;
}