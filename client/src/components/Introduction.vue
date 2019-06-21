<template>
  <div class="background">
    
    <div class="poster">
      <video  poster="../assets/images/video-background.jpg" autoplay muted="true">
      <source src="../assets/videos/intro.mp4" type="video/mp4" />
      </video>
      <div class="text">
        <h1 class="title">A Web Documentary created by</h1>
        <ul class="names">
          <li>Amandine Donat-Filliod</li>
          <li>Cloé Coupris</li>
          <li>Emilie Tombuyses</li>
          <li>Diarit Salihaj</li>
          <li>Cheik Kone</li>
        </ul>
      </div>
      <router-link class="button above" to="/chapters">Skip</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showAuthors: false
    }
  },
  mounted() {
    //automatically go to next path after the video

    let vid = document.querySelector('video')


    vid.addEventListener('loadedmetadata', () => {
      let time = parseInt(vid.duration) + '000'      

      setTimeout(() => {

        this.showAuthors = true

        setTimeout(() => {
          if (this.$route.name === "introduction") {
            this.$router.push({ path: "/chapters" });
          }
        }, 3000)
      }, time)
    })   
  }
}
</script>

<style lang="scss" scoped>

.background {
  background: black;
  width: 100%;
  height: 100vh;
  color: white;
}

.title {
  width: 80%;
  font-size: 30px;
  margin-bottom: 5%;

  @media (min-width: 800px) {
    width: 60%;
    font-size: 50px;
  }
}

.names {
  display: flex;

  li {
    max-width: 150px;
    word-spacing: 100px;
  }
}

.poster {
  position: relative;
  width: 100%;
  height: 100%;
}

video {
  width: 100%;
  height: 100%;
}

.text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  text-align: center;
  width: 100%;
  height: 100vh;
}

.above {
  position: absolute;
  bottom: 20px;
  left: 40px;
}

</style>
