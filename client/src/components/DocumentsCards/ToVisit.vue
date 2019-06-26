<template>
  <div class="visit-container" :class="{shadow : isInStorage()}" :style="current()">
    <h2>{{child.name.toUpperCase()}}</h2>
    <router-link class="button" :to="goToDocument()">READ</router-link>
    <img class="visit__img" :src="earthImgSrc()">
    <pre>{{storageTable}}</pre>
  </div>
</template>

<script>

export default {
  data() {
    return {
      storageTable : JSON.parse(window.localStorage.getItem('readed')),
    }
  },
  props : ['parent', 'child', 'childIndex'],
  methods : {
    goToDocument(){
      return `/document/${this.childIndex+1}`
    },
    earthImgSrc(){
      return require (`../../assets/images/toVisit/${this.child.toVisitImg}.png`)
    },
    isInStorage(){
        this.storageTable = JSON.parse(window.localStorage.getItem('readed'))
          if (this.storageTable !== null && this.storageTable.includes(this.childIndex+1)) {
            return true;
          }
          return false;
    },
    current(){
      if (parseInt(this.$route.params.id) == this.childIndex+1) {
        return 'filter : grayscale(0); border-color: yellow';
      }
    }
  },
}
</script>

<style lang="scss" scoped>
   .visit-container {
    border: solid 1px white;
    width: 15vw;
    height: 50%;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    h2 {
      margin-top: 20px;
      font-size: 2em;
      font-weight: 600;
    }

    .visit__img {
      width: 100%;
      align-self: flex-end;
      // transform: translateY(400px);
    }
  } 

  .shadow {
    filter: grayscale(1);
  }


</style>
