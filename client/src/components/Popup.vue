<template>
  <div class="popup">
    <div v-if="facts.length && index>0" class="popup__if">
      <transition>
        <h2>{{facts[index-1].name.toUpperCase()}}</h2>
      </transition>
      <div class="popup__card">
        <p>{{facts[index-1].popupIntro}}</p>
        <router-link class="button discover" :to="indexDoc()">DISCOVER</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import factService from '../factService'; 


export default {
  props : {
    index : {
    }
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
  methods : {
    indexDoc() {
      return `document/${this.index}`
    }
  },
  mounted() {
  
  }

}
</script>

<style lang="scss" scoped>

  .popup {
    position: absolute;
    left: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 380px;
    width: 300px;

    .popup__if {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      justify-content: space-around;
      
      h2 {
        font-size: 40px;
      }
      
    }
    
  }
  .popup__card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    position: relative;
    height: 300px;
    width: 100%;
    background-color:#02152B;
    border-radius: 15px;
    color: white;

    p {
      font-size: 18px;
      line-height: 20px;
      width: 90%;
    }

    .discover {
      width : 100px;
      padding: 10px 10px;
    }

  }
</style>
