<template>
  <div>
     <!-- <h1>Facts</h1> -->
    <!-- CREATE FACT HERE -->
    <p v-if="error">{{error}}</p>
    <div>
      <!-- <div v-for="(fact, index) in facts" :item="fact" :index="index" :key="fact._id">
        {{`${fact.createdAt.getDate()}/`}}
        <p>{{fact.text}}</p>
      </div> -->
      <!--  -->
      <div v-if="facts.length" class="container">
        <!-- binding the attribute name, to get it on child component header -->
        <document-header :parent="facts[id-1]"></document-header>
        <component v-for="child in facts[id-1].childComponents" :is="child.type" :key="child.id" :childId="child.id" :parentName="facts[id-1].name" :child="child"></component>
        <document-footer ></document-footer>
      </div>
    </div>
    <!-- END OF FACTS -->
  </div>
  
</template>

<script>
import factService from '../factService'; 
import ImageType from './DocumentsCards/ImageType'; 
import Video from './DocumentsCards/Video'; 
import Poster from './DocumentsCards/Poster'; 
import TextType from './DocumentsCards/TextType'; 
import DocumentHeader from './DocumentsCards/Base/DocumentHeader.vue'; 
import DocumentFooter from './DocumentsCards/Base/DocumentFooter.vue'; 

export default {
  components: {
    ImageType,
    Video,
    Poster,
    TextType,
    DocumentHeader,
    DocumentFooter
  },
  data() {
    return {
      facts : [],
      error : '',
    }
  },
  // Call facts in db 
  async created() {
    try {
      this.facts = await factService.getFacts(); // getFacts is defined in factService.js
    } catch (err) {
      this.error = err.message;
    }
  },
  computed : {
    // Get the route parameters (in this case, the id)
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
    justify-content: flex-start;
    flex-wrap: wrap;
    * {
      box-sizing: border-box;
      border: 1px solid black;
    }
  }
</style>
