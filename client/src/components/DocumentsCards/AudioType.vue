<template>
  <div class="audio-container">
    <!-- <h2>Ceci est le component Audio</h2> -->
     <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" id="waveform"></div>
     <section class="buttons">
     <img v-if="!onplay" @click="playAudio" src="../../assets/images/button pause.svg"  >
     <img v-if="onplay" @click="stopAudio" src="../../assets/images/button play.svg"  >
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
      onplay : false,
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
      this.onplay =   this.onplay  ? false : true ;
    },
    stopAudio() {
      this.wavesurfer.pause();
      this.onplay = this.onplay  ? false : true  
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
    justify-content: flex-end;
    flex-direction: column;
    padding-bottom: 100px;
  } 

  #waveform{
    z-index: 100;
    width: 42vw;
    height: 143px;
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
    img{
      height: 48px;;
    }
  }

</style>
