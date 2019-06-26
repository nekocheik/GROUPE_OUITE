<template>
  <div>
     <!-- <h1>Facts</h1> -->
    <!-- CREATE FACT HERE -->
    <router-link to="/earth" class="back-to-earth">Back to earth</router-link>
    <p v-if="error">{{error}}</p>
    <div>
      <!-- <div v-for="(fact, index) in facts" :item="fact" :index="index" :key="fact._id">
        {{`${fact.createdAt.getDate()}/`}}
        <p>{{fact.text}}</p>
      </div> -->
      <!--  -->

    <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78">
      <g id="Groupe_4" data-name="Groupe 4" transform="translate(-1057 -287)">
        <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(1057 287)" fill="none" stroke="#ffbf67" stroke-width="5">
          <!-- <circle cx="39" cy="39" r="39" stroke="none"  fill="none"/> -->
          <circle class="exterieur" cx="39" cy="39" r="36.5" fill="none"/>
        </g>
      </g>
    </svg>

      <div v-if="facts.length" class="container">
        <!-- binding the attribute name, to get it on child component header -->
        <document-header :parent="facts[id-1]" :functions="scrollControlled" ></document-header>
        <component v-for="child in facts[id-1].childComponents" :is="child.type" :key="child.id" :childId="child.id" :parentName="facts[id-1].name" :child="child"></component>
        <document-footer :parent="facts"></document-footer>
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
import { draw } from '../libs/svgDrawing';
import { scrollControlled } from '../libs/scrollControlled';
import {eventBus} from '../main';


const gsap = require('gsap');
const TweenMax = gsap.TweenMax;

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
      getStorage : [],
      readed : [1,2,4],
      scrollControlled : null ,
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

  mounted(){
    window.onload = function() {
           draw( document.querySelector('body') );
    };
  },


  updated() {
    window.scrollTo(0,0);
        console.log(  this.scrollControlled )

      // eventBus.visited.push(this.id);
      // console.log(eventBus.visited);
      // eventBus.toVisit.
      // console.log(this.$route);
      // if (window.localStorage.getItem('readed') !== null) {
      //   this.getStorage = JSON.parse(window.localStorage.getItem('readed'));
      //   this.readed = this.getStorage;
      // }
      // if (!this.readed.includes(this.$route.params.id)) {
      //   this.readed.push(parseInt(this.id))
      // }
      window.localStorage.setItem('readed', JSON.stringify(this.readed));
  },

  beforeUpdate(){

       this.scrollControlled = new scrollControlled( 0.2 , window , 900 );

  },

  beforeDestroy(){
    console.log(  this.scrollControlled )
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
.circle{
  position: fixed;
  top: 10px;
  right: 10px;
  height: 40px;
  z-index: 30;
}
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    * {
      box-sizing: border-box;
    }
  }


.back-to-earth {
  position: fixed;
  z-index: 30;
  top: 20px;
  left: 20px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: none;
}

  
</style>
