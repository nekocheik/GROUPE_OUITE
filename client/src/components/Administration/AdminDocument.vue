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
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
      <link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css">
      <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css">
      <div v-if="facts.length" class="container">
        <h1 style="font-size: 30px; font-weight : bold;">{{facts[id-1].name}}</h1>
        <!-- binding the attribute name, to get it on child component header -->
        <button @click="changeSome(facts[id-1].name)">Envoyer</button>
        <component v-for="child in facts[id-1].childComponents" :is="child.type" :key="child.id" :child="child" :parentName="facts[id-1].name"></component>
      </div>
    </div>
    <!-- END OF FACTS -->
  </div>
  
</template>

<script>
import factService from '../../factService'; 
import Audio from './AdminAudio'; 
import ImageType from './AdminImageType'; 
import Video from './AdminVideo'; 
import Poster from './AdminPoster'; 
import TextType from './AdminTextType'; 

export default {
  components: {
    Audio,
    ImageType,
    Video,
    Poster,
    TextType,
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
  methods : {
    async changeSome(param) {
      try {
        await factService.insertFact( param )
      } catch (err) {
        alert('Fail to pull data from db')
      }
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
    flex-direction: column;
    justify-content: flex-start;
    justify-content: space-around;
    *{
      margin-top: 10%;
    }
  } button{
    background-color: gray;
    border: gray solid 1px ;
  }
</style>
