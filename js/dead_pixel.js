const color = [
  "#FFFFFF",
  "#000000",
  "#FF0000",
  "#0000FF",
  "#00FF00",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
];

let i = 0;
function openFullScreen() {
  let container = document.querySelector("div.dead_pixel_container");
  container.style.display = "none";

  document.documentElement.requestFullscreen();
}

document.addEventListener("keydown", function (e) {
  let fullScreen = window.matchMedia(
    "(display-mode: fullscreen)"
  ).matches;

  if (e.keyCode == 32 && fullScreen) {
    let doc = document.documentElement;
    doc.style.backgroundColor = color[i];
    i++;
    if (i == 8) {
      i = 0;
    }
  }
});

document.addEventListener("fullscreenchange", function () {
  let fullScreen = window.matchMedia(
    "(display-mode: fullscreen)"
  ).matches;
  if (fullScreen == false) {
    document.documentElement.style.backgroundColor = "white";

    let container = document.querySelector("div.dead_pixel_container");
    container.style.display = "unset";
  }
});