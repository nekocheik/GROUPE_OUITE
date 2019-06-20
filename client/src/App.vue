<template>
  <div id="app">
    <!-- <the-header></the-header>
    <document v-if="mathematics" :paramter="takeJsonId"></document>
    <div class="big-circle">
      <div class="big-circle__small-circle" @click="mathematics = true"></div>
    </div> -->
    
    <router-link to="/">Home</router-link>
    <router-link to="document/1">Document</router-link>
    <router-link to="earth">Earth</router-link>
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
  // #app {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  // }
</style>
