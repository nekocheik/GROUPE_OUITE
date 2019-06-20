<template>
  <div class="background">
    <h1>How we built the world together</h1>
    <ul>
      <li @click="toEarth()">
        <p>Episode 1</p>
        <h2>Computing</h2>
      </li>
      <li>
        <p>Episode 2</p>
        <h2>Medecine</h2>
      </li>
      <li>
        <p>Episode 3</p>
        <h2>Transport</h2>
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
  background: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

h1 {
  font-size: 50px;
  margin-bottom: 100px;
}

ul {
  display: flex;
}

li {
  border : 2px solid white;
  display: inline-block;
  padding: 30px;
}

</style>
