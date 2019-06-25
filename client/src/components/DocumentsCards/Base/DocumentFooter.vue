<template>
  <div class="footer">
     <to-visit v-for="child in parent" :key="child._id" :parent="parent" :child="child" :childIndex="parent.indexOf(child)"></to-visit>
<!--      
     <to-visit v-for="child in toVisit" :key="child" :parent="parent" :child="parent[child-1]" :childIndex="child"></to-visit> -->
  </div>  
</template>

<script>
import ToVisit from '../ToVisit';
import {eventBus} from '../../../main';

export default {
  components : {
    ToVisit
  },
  props : ['parent'],
  data() {
    return {
      // toVisit : eventBus.toVisit
    }
  },
  created() {
  //   eventBus.toVisit = [];
  //   this.parent.forEach(child => {
  //     eventBus.toVisit.push(this.parent.indexOf(child)+1);
  //   });
  // console.log(this.toVisit);
  // console.log(this.parent);
  
  }
  
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
