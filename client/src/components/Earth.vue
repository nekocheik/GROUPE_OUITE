<template>
  <div>
     <h1>Ceci est le component Earth</h1>
     <div class="earth">
       <router-link to="document/1">Test routeur document</router-link>
       <hr>
       <router-link to="document/2">Test routeur document</router-link>
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
    width: 500px;
    height: 500px;
    background-color: black;
    border-radius: 50%;
  }

</style>
