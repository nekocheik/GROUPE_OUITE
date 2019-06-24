<template>
  <div class="video-container">
    <video :src="vidUrl"></video>
    <h2>Ceci est le component Video</h2>
    <h2>{{child.title}}</h2>
    <p>{{child.text}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      vidUrl : this.videoUrl()
    }
  },
  props : ['childId', 'parentName', 'child'],
  methods : {
    videoUrl() {
      // return the video path, whith videoName variable defined on the db 
      if (this.child.videoName) {
        return require (`../../assets/videos/${this.child.videoName}.mp4`);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
   .video-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
    width: 100%;
    height: 100vh;
  } 
</style>
