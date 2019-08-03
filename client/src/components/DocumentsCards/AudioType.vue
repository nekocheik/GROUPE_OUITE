<template>
  <div data-animate="true" class="audio-container">

     <section class="buttons">
     <img v-if="!onplay" @click="playAudio" src="../../assets/images/button play black.svg"  >
     <img v-if="onplay" @click="stopAudio" src="../../assets/images/button pause black.svg"  >
     <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" id="waveform"></div>
     <img  @click="wavesurfer.stop() ,  onplay = false " src="../../assets/images/Icon - Back black.svg"  >
     </section>


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
    waveColor: 'black',
    backend: "MediaElement",
    barWidth: 0.5 ,
    });

    TweenMax.to('wave' , 0 , { 'overflow-x' : 'hidden' , 'height' : '50px' } )
    // ${this.audioName}.mp3
    this.pathAudio = require( `../../assets/audio/${this.audioName}.mp3` )
    this.wavesurfer.load(  this.pathAudio  );



    let elementDetected =  new ViewPort( this.$el.querySelector('#waveform') );
      elementDetected.detectViewport( ( callback , element )=>{
        if (callback) {
          // console.log( elementDetected )

          element.classList.add('active');
        }else{
          element.classList.remove('active');
        }
     });
  },
  
  
  beforeMount(){
    // let path =  require(`../../assets/audio/${this.audioName}.mp3`); 
    // console.log(path)
    // this.wavesurfer.load(path);
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
    width: 37vw;
    padding: 0px 50px 0px 50px; 
    height: 50px;
    overflow-x:hidden;
    transform: translateY(100px) scale( 0.8 ) ;
    opacity: 0;
    z-index: 2;
    // transition-duration: 1s;
    background-color: #F8F8F8;
    border-radius: 35px;
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
    // width: 300px;
    img{
      height: 32px;
      position: relative;
      z-index: 3;
      display: block;
      margin: auto; 
      &:nth-child(1){
      right: -40px;
      }
      &:nth-child(3){
      right: 40px;
      }
    }
  }

  .mute{
      position: absolute;
      height: 48px;
      top: 13vh;
      right: 7vw;
   }

</style>
