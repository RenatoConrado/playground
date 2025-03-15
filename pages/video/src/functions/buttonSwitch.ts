function buttonSwitch(): void {
  const button = document.querySelector(".switch-btn") as HTMLButtonElement;
  const video = document.querySelector(".video-container") as HTMLVideoElement;

  function switchPlay(): void {
    if (!button.classList.contains("slide")) {
      button.classList.add("slide");
      video.pause();
    } else {
      button.classList.remove("slide");
      video.play();
    }
  };

  button.addEventListener("click", switchPlay);
}

export default buttonSwitch;