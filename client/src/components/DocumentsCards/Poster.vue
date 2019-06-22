<template>
  <div class="poster-container" :style="bgImage()">
     <h2>Ceci est le component Poster</h2>
     <h1>{{child.title}}</h1>
     <p>{{child.text}}</p>
  </div>
</template>

<script>
// import factService from '../../factService'; 


export default {
  data() {
    return {
    }
  },
  props : ['childId', 'parentName', 'child'],
  methods : {
    imgUrl() {
      // return the image path, whith imgName variable defined on the db 
      if (this.child.imgName) {
        return require (`../../assets/images/${this.child.imgName}.jpg`)
      }
    },
    bgImage() {
      return `background-image : url(${this.imgUrl()})`
    }
  }
}
</script>

<style lang="scss" scoped>
   .poster-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(195, 158, 236);
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
  } 
</style>
