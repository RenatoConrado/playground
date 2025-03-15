export type Video = { src: string; };

export default function Video({ src }: Video) {
  return /* html */`
  <video class="video-container" muted autoplay loop>
    <source src="${src}" type="video/mp4" />
  </video>
  `;
}