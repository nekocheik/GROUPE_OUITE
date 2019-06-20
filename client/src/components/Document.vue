<template>
  <div>
     <h1>Facts</h1>
    <!-- CREATE FACT HERE -->
    <hr>
    <p v-if="error">{{error}}</p>
    <div>
      <!-- <div v-for="(fact, index) in facts" :item="fact" :index="index" :key="fact._id">
        {{`${fact.createdAt.getDate()}/`}}
        <p>{{fact.text}}</p>
      </div> -->
      <!--  -->
      <div v-if="facts.length" class="container">
        <component v-for="child in facts[id-1].childComponents" :is="child.type" :key="child.id"></component>
      </div>
    </div>
    <!-- END OF FACTS -->
    <hr style="height:50px; background-color:black">
  </div>
  
</template>

<script>
import factService from '../factService'; 
import Audio from './DocumentsCards/Audio'; 
import ImageType from './DocumentsCards/ImageType'; 
import Video from './DocumentsCards/Video'; 

export default {
  components: {
    Audio,
    ImageType,
    Video
  },
  data() {
    return {
      facts : [],
      error : '',
    }
  },
  async created() {
    try {
      this.facts = await factService.getFacts(); // getFacts is defined in factService.js
    } catch (err) {
      this.error = err.message;
    }
  },
  computed : {
    id(){
      return this.$route.params.id;
    },
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
