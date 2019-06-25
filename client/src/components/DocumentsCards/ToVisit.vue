<template>
  <div class="visit-container">
    <h2>{{child.name}}</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props : ['parent', 'child'],
  mounted() {
  }

}
</script>

<style lang="scss" scoped>
   .visit-container {
    background-color: rgb(237, 255, 133);
    width: 15vw;
    height: 50%;
    border-radius: 10px;
    color: black;
    display: flex;
    flex-direction: column;
    
  } 
</style>
