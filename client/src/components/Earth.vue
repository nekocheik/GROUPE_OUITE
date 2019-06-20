<template>
  <div>
     <h1>Ceci est le component Earth</h1>
     <div class="earth">
       <router-link class="point" to="document/1"></router-link>
       <hr>
       <router-link class="point" to="document/2"></router-link>
     </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>

  .earth {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: black;
    border-radius: 50%;
  }

  .point {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
  }

</style>
