<template>
  <div class="visit-container" :style="current()" :class="{shadow : isInStorage()}">
    <h2>{{child.name.toUpperCase()}}</h2>
    <router-link class="button" :to="goToDocument()">READ</router-link>
    <img class="visit__img" :src="earthImgSrc()">
    <!-- <pre>{{storageTable}}</pre> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props : ['parent', 'child', 'childIndex'],
  mounted: function() {
    const order = JSON.parse(localStorage.getItem('cardOrder'));
    console.log(order, this.childIndex + 1);
    const position = order.indexOf(this.childIndex +1);
    console.log(position);
    console.log(this.$el.style.order = position);
  },
  methods : {
    goToDocument(){
      return `/document/${this.childIndex+1}`
    },
    earthImgSrc(){
      return require (`../../assets/images/toVisit/${this.child.toVisitImg}.png`)
    },
    isInStorage(){
        this.storageTable = JSON.parse(localStorage.getItem('readed'))
          if (this.storageTable !== null && this.storageTable.includes(this.childIndex+1)) {
            console.log('this.storageTable');
            return true;
          }
          return false;
    },
    current(){
      // console.log(parseInt(this.$route.params.id));
      // console.log(this.childIndex+1);

      if (parseInt(this.$route.params.id) == this.childIndex+1) {
        console.log()
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
