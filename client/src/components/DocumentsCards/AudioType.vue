<template>
  <div data-animate="true" class="audio-container">
    <!-- <h2>Ceci est le component Audio</h2> -->
     <img  v-if="hasVolume" @click="wavesurfer.toggleMute(),  hasVolume = false " class="mute" src="../../assets/images/sound-on.svg"  >
     <img  v-if="!hasVolume" @click="wavesurfer.toggleMute(),  hasVolume = true " class="mute" src="../../assets/images/sound-off.svg"  >

     <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" id="waveform"></div>

     <section class="buttons">
     <img v-if="!onplay" @click="playAudio" src="../../assets/images/button pause.svg"  >
     <img v-if="onplay" @click="stopAudio" src="../../assets/images/button play.svg"  >
     <img  @click="wavesurfer.stop() ,  onplay = false " src="../../assets/images/Icon - Back.svg"  >
     </section>
     <!-- <audio :src="audioUrl()"></audio> -->

  </div>
</template>



<script>

import { ViewPort } from '../../libs/viewPort' ;

require( "../../libs/wavesurfer" );
const gsap = require('gsap');
const TweenMax = gsap.TweenMax;

export default {
  data() {
    return {
      wavesurfer : null,
      onplay : false,
      hasVolume : true,
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

    // this.pathAudio = require( `../../assets/audio/${this.audioName}.mp3` )
    // this.wavesurfer.load(     this.pathAudio  );

    this.wavesurfer.load('https://dev1.duckdiverllc.com/html/blues.mp3');


    let elementDetected =  new ViewPort( this.$el.querySelector('#waveform') );
      elementDetected.detectViewport( ( callback , element )=>{
        if (callback) {
          element.classList.add('active');
        }else{
          element.classList.remove('active');
        }
     });
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
    overflow-x:hidden;
    transform: translateY(100px) scale( 0.8 ) ;
    opacity: 0;
    transition-duration: 1s;
    &.active{
    transform: translateY(0px) scale( 1.0 );
    opacity: 1;
    }

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
    justify-content: space-around;
    width: 300px;
    img{
      height: 48px;;
    }
  }

  .mute{
      position: absolute;
      height: 48px;
      top: 13vh;
      right: 7vw;
   }

</style>
