export type PreloaderProps = { src: string; };

export default function Preloader({ src }: PreloaderProps) {
  return /*html*/`
  <div class="preloader">
    <img src="${src}" alt="preloader" class="preloader__item" />
  </div>
  `;
}