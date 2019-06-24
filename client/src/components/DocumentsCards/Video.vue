<template>
  <div class="video-container" :poster="vidPoster">
    <video controls>
      <source :src="vidUrl" type="video/mp4">
    </video>
    <h2>{{child.title}}</h2>
    <p>{{child.text}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      vidUrl : this.videoUrl(),
      vidPoster: this.videoPoster()
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

    videoPoster() {
      // return the video path, whith videoName variable defined on the db 
      if (this.child.videoPoster) {
        return require (`../../assets/images/${this.child.videoPoster}.jpg`);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

   .video-container {
    width: 100%;
    height: 100vh;

    video {
      height: 100%;
      width: 100%;
      background: black;
    }
  } 
</style>
