<template>
  <div class="image-container" :style="bgImage()">
     <h2>Ceci est le component Image</h2>
     <br>
     <div v-if="child.audio">
       <audio-type :audioName="audioName()" :child="child"></audio-type>
     </div>
  </div>
</template>

<script>
import AudioType from './AudioType.vue'; 


export default {
  components : {
    AudioType
  },
  data() {
    return {
    }
  },
  props : ['childId', 'parentName', 'child'],
  methods : {
    imgUrl() {
      // return the image path, whith imgName variable defined on the db 
      if (this.child.imgName) {
        return require (`../../assets/images/${this.child.imgName}.jpg`)
      }
    },
    bgImage() {
      return `background-image : url(${this.imgUrl()})`
    },
    audioName() {
      if (this.child.audio) {
        return this.child.audio
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 50%;
    height: 100vh;
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
