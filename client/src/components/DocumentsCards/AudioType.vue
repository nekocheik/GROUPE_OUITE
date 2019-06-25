<template>
  <div class="audio-container">
    <!-- <h2>Ceci est le component Audio</h2> -->
     <div id="waveform"></div>
     <div class="button" @click="playAudio">PLAY AUDIO</div>
     <div class="button" @click="stopAudio">STOP AUDIO</div>
     <!-- <audio :src="audioUrl()"></audio> -->

  </div>
</template>

<script>

require( "../../libs/wavesurfer" );
const gsap = require('gsap');
const TweenMax = gsap.TweenMax;

export default {
  data() {
    return {
      wavesurfer : null,
    }
  },
  props : ['child','audioName'],
  methods : {
    audioUrl() {
      // return the image path, whith imgName variable defined on the db 
        return require (`../../assets/audio/${this.audioName}.mp3`)
    },
    // playAudio() {
    //   if (this.audioTag) {
    //     this.audioTag.play();
    //   }
    // },
    // stopAudio() {
    //   if (this.audioTag) {
    //     this.audioTag.pause();
    //   }
    // }

    playAudio() {
      this.wavesurfer.play();
    },
    stopAudio() {
      this.wavesurfer.stop();
    }

  },

  mounted(){
    console.log('start ///////////////////////////////////////////////////')
    console.log(document.querySelector('#waveform'))

    this.wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true,
    waveColor: 'white',
    backend: "MediaElement",
      barWidth: 12,
    });
        TweenMax.to('wave' , 0 , { 'overflow-x' : 'hidden' })
    this.wavesurfer.load('https://dev1.duckdiverllc.com/html/blues.mp3');
    
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
    // background-color: gray;
    position: absolute;
    margin: auto;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
  } 
  #waveform{
    z-index: 100;
    width: 65px;
    height: 200px;
    overflow-x:hidden
    *{
     overflow-x:hidden;
    }
  }
  h2{
    color: white;
  }
</style>
