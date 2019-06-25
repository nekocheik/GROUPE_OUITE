<template>
  <div class="audio-container">
    <!-- <h2>Ceci est le component Audio</h2> -->
     <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" id="waveform"></div>
     <section class="buttons">
     <div class="button" @click="playAudio">PLAY AUDIO</div>
     <div class="button" @click="stopAudio">STOP AUDIO</div>
     </section>
     <!-- <audio :src="audioUrl()"></audio> -->

  </div>
</template>



<script>

import AOS from 'aos';

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

    playAudio() {
      this.wavesurfer.play();
    },
    stopAudio() {
      this.wavesurfer.pause();
    }

  },

  mounted(){
    this.wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true,
    waveColor: 'white',
    backend: "MediaElement",
      barWidth: 1,
    });
    TweenMax.to('wave' , 0 , { 'overflow-x' : 'hidden' })
    this.wavesurfer.load('https://dev1.duckdiverllc.com/html/blues.mp3');

    if (!window.Cypress) AOS.init();
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
    justify-content: center;
    flex-direction: column;
  } 

  #waveform{
    z-index: 100;
    width: 42vw;
    height: 200px;
    overflow-x:hidden
    *{
     overflow-x:hidden;
    }
  }

  h2{
    color: white;
  }

  .buttons{
    display: flex;
    flex-direction: row;
  }

</style>
