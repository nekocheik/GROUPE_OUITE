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
        <h1 style="font-size: 30px; font-weight : bold;">{{facts[id-1].name}}</h1>
        <!-- binding the attribute name, to get it on child component header -->
        <button @click="changeSome(facts[id-1].name)">Envoyer</button>
        <component v-for="child in facts[id-1].childComponents" :is="child.type" :key="child.id" :childId="child.id" :parentName="facts[id-1].name"></component>
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

</style>
