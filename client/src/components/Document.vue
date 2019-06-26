<template>
  <div>
    <router-link to="/earth" class="back-to-earth">
      <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78">
        <g id="Groupe_4" data-name="Groupe 4" transform="translate(-1057 -287)">
          <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(1057 287)" fill="none" stroke="#ffbf67" stroke-width="5">
            <circle class="exterieur" cx="39" cy="39" r="36.5" fill="none"/>
          </g>
        </g>
      </svg>
      <span>Back to earth</span>
    </router-link>


    <p v-if="error">{{error}}</p>
    <div>

   

      <div v-if="facts.length" class="container">
        <document-header :parent="facts[id-1]"></document-header>
        <component v-for="child in facts[id-1].childComponents" :is="child.type" :key="child.id" :childId="child.id" :parentName="facts[id-1].name" :child="child"></component>
        <document-footer :parent="facts"></document-footer>
      </div>
    </div>
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
           new scrollControlled( 0.5 , window , 800 );
    };
  },


  updated() {
    window.scrollTo(0,0);

      // eventBus.visited.push(this.id);
      // eventBus.toVisit.
      // if (window.localStorage.getItem('readed') !== null) {
      //   this.getStorage = JSON.parse(window.localStorage.getItem('readed'));
      //   this.readed = this.getStorage;
      // }
      // if (!this.readed.includes(this.$route.params.id)) {
      //   this.readed.push(parseInt(this.id))
      // }
      window.localStorage.setItem('readed', JSON.stringify(this.readed));
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
    }
  }


.back-to-earth {
  position: fixed;
  height: 40px;
  z-index: 30;
  top: 20px;
  left: 20px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: none;

  svg {
    height: 100%;

    &::after {
      content: '';
    }
  }
}

  
</style>
