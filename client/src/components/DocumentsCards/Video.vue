<template>
  <div class="video-container">
     <h2>Ceci est le component Video</h2>
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
   .video-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    width: 50%;
    height: 400px;
  } 
</style>
