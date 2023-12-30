function openFullScreen() {
    let body = document.getElementsByTagName("body")[0];
    body.requestFullscreen();
  }

  document.addEventListener("fullscreenchange", function () {
    let fullScreen = window.matchMedia(
      "(display-mode: fullscreen)"
    ).matches;
    body = document.getElementsByTagName("body")[0];

    if (fullScreen == true) {
      body.style.backgroundColor = "black";
  
      // fullScreen = false;
      let container = document.querySelector("div.screen_bleed_container");
      container.style.display = "none";
    } else {
      body.style.backgroundColor = "white";

      let container = document.querySelector("div.screen_bleed_container");
      container.style.display = "block";
    }
  });