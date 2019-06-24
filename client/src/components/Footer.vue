  <template>
  <div class="background">
    
    <div class="poster">
      <video poster="../assets/images/video-background.jpg" autoplay loop muted="true">
      <source src="../assets/videos/intro.mp4" type="video/mp4" />
      </video>
      <div class="text">
        <h1>A Web Documentary created by</h1>
        <ul>
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

    }
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
