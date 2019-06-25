<template>
  <div class="background">
    <h1 class="title">How we build the world together</h1>
    <ul class="chapters">
      <li class="available" @click="toEarth()">
        <p class="episode">Episode 1</p>
        <h2 class="chapter">Computing</h2>
      </li>
      <li>
        <p class="episode">Episode 2</p>
        <h2 class="chapter">Medecine</h2>
      </li>
      <li>
        <p class="episode">Episode 3</p>
        <h2 class="chapter">Transport</h2>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {
    toEarth() {
      this.$router.push({ path: "/earth" });
    }
  }
}
</script>

<style lang="scss" scoped>

.background {
  background: url('../assets/images/space.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.title {
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 100px;
  letter-spacing: 0.1em;
  text-align: center;
}

.chapters {
  display: flex;

  li {
    border : 2px solid rgba(255, 255, 255, 0.466);    
    display: inline-block;
    padding: 20px 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 255, 255, 0.466);
  }

  .available {
    border : 2px solid white;
    color: white;
    cursor: pointer;
  }

  li:not(:last-child) {
    margin-right: 60px;
  }
}

.episode {
  font-size: 14px;
  font-style: italic;
  margin-bottom: 1em;
}


.chapter {
  font-size: 22px;
  text-transform: uppercase;
}



</style>
