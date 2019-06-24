<template>
  <div class="footer">
     <to-visit v-for="child in parent" :key="child._id" :parent="parent" :child="child"></to-visit>
  </div>
</template>

<script>
import ToVisit from '../ToVisit'

export default {
  components : {
    ToVisit
  },
  props : ['parent'],
  data() {
    return {

    }
  },
}

</script>

<style lang="scss" scoped>
   .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    height: 100vh;
  } 
</style>
