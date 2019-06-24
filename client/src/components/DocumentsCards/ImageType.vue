<template>
  <div class="image-container">
    <img :src="Image()" :alt="getAlt()">
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
  props : ['childId', 'parentName', 'child'],
  data() {
    return {
      imagee : require (`../../assets/images/${this.child.image}.jpg`)
    }
  },
  methods : {
    imgUrl() {
      if (this.child.image) {
        return require (`../../assets/images/${this.child.image}.jpg`)
      }
    },
    Image() {
      return this.imgUrl()
    },
    audioName() {
      if (this.child.audio) {
        return this.child.audio
      }
    },
    getAlt() {
      if (this.child.alt) {
        return this.child.alt
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
<<<<<<< HEAD
    background-color: #000112;
    width: 50%;
    height: 100vh;
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
=======
    background: black;
    width: 50%;
    height: 100vh;
    padding: 30px 50px;
  }

  img {
    width: 100%;
    border-radius: 10px;
>>>>>>> 6004db895459d5d4f01911f0794ba0e96fd2dc27
  }
</style>
