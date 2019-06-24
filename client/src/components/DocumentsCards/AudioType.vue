<template>
  <div class="audio-container">
     <h2>Ceci est le component Audio</h2>
     <audio :src="audioUrl()"></audio>
     <button @click="playAudio">PLAY AUDIO</button>
     <button @click="stopAudio">STOP AUDIO</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  props : ['child','audioName'],
  methods : {
    audioUrl() {
      // return the image path, whith imgName variable defined on the db 
        return require (`../../assets/audio/${this.audioName}.mp3`)
    },
    playAudio() {
      if (this.audioTag) {
        this.audioTag.play();
      }
    },
    stopAudio() {
      if (this.audioTag) {
        this.audioTag.pause();
      }
    }
  },
  computed : {
    audioTag() { 
      const x = document.querySelector('audio');
      return x;
    }
  }
}
</script>

<style lang="scss" scoped>
  .audio-container {
    display: flex;
    color: white;
  } 
  h2{
    color: white;
  }
</style>
