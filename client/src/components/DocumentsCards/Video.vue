<template>
  <div class="video-container" :poster="vidPoster">
        <div class="parentVideo">
    <video controls>
      <source :src="vidUrl" type="video/mp4">
    </video>
    <h2>{{child.title}} IS A WORLD WITHOUT MATHS POSSIBLE ? </h2>
    <p>{{child.text}}</p>
  </div>
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

h2{
  font-size: 50px;
  color: white;

  position: absolute;
  margin: auto;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  height: 0px;
  text-align: center;
  transform: translateY(30vh);
}
.video-container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: black;
    video {
      width: 100vw;
      min-height: 50vh;
      max-height: 100vh;
      background : black;
      margin: auto;
      display: block;
    }



  } 
</style>
