<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import TheHeader from './components/TheHeader.vue'
// import Document from './components/Document.vue'

export default {
  // name: 'app',
  // components: {
  //   TheHeader,
  //   Document
  // },
  // data(){
  //   return {
  //     mathematics : false,
  //   }
  // },
  // methods : {

  // }
}
</script>

<style lang='scss' scoped>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .big-circle {
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background-color: red;
  }

  .big-circle__small-circle {
    position: relative;
    border-radius: 50%;
    background-color: white;
    width: 10px;
    height: 10px;
    left: 300px;
    top: 100px;
    cursor: pointer;
  }
</style>
