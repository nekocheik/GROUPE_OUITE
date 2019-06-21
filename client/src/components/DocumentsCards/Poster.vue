<template>
  <div class="poster-container">
     <h2>Ceci est le component Poster</h2>
  </div>
</template>

<script>
import factService from '../../factService'; 


export default {
  data() {
    return {
    }
  },
  props : ['childId', 'parentName']
}
</script>

<style lang="scss" scoped>
   .poster-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(195, 158, 236);
    width: 100%;
    height: 400px;
  } 
</style>
