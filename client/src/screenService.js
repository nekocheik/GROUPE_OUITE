class Screen {

  toFullScreen(screen) {
    if (screen.requestFullscreen) {
      screen.requestFullscreen();
    } else if (screen.mozRequestFullScreen) { /* Firefox */
      screen.mozRequestFullScreen();
    } else if (screen.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      screen.webkitRequestFullscreen();
    } else if (screen.msRequestFullscreen) { /* IE/Edge */
      screen.msRequestFullscreen();
    }
  }

  toWindowedScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }
}

export default new Screen()