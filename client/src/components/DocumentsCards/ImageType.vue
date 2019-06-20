<template>
  <div class="image-container">
     <h2>Ceci est le component Image</h2>
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
  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #cecece;
    width: 50%;
    height: 400px;
  }
</style>
