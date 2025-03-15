import Preloader from "./components/Preloader";
import Video from "./components/Video";
import Play from "./components/Play";
// @ts-ignore
import video from "/video.mp4";
// @ts-ignore
import gif from "/preloader.gif"

export default function App(): string {
  return /* html */`
  ${Preloader({ src: gif })}
  <header>
    ${Video({ src: video })}
    <h1>video project</h1>
    ${Play()}
  </header>
  `;
}