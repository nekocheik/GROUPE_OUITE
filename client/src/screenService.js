class Screen {

  constructor() {
    this.fullScreen = false
  }

  toFullScreen(screen) {
    if (screen.requestFullscreen) {
      screen.requestFullscreen();
      this.fullScreen = true
    } else if (screen.mozRequestFullScreen) { /* Firefox */
      screen.mozRequestFullScreen();
      this.fullScreen = true
    } else if (screen.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      screen.webkitRequestFullscreen();
      this.fullScreen = true
    } else if (screen.msRequestFullscreen) { /* IE/Edge */
      screen.msRequestFullscreen();
      this.fullScreen = true
    }
  }

  toWindowedScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      this.fullScreen = false
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
      this.fullScreen = false
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
      this.fullScreen = false
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
      this.fullScreen = false
    }
  }
}

export default new Screen()