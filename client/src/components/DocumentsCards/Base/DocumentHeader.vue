<template>
  <div class="header">
     <h1 class="title">{{parent.name}}</h1>
     <br>
     <h2>{{parent.slogan}}</h2>
     <br>
     <h2>{{parent.sloganAuthor}}</h2> 
     <br>
     <p>☼☼☼ Le header est toujours présent, seul son contenu (comme le titre et le slogan ci-dessus) est généré dynamiquement via la db ☼☼☼</p>
     <br>
      <p>SCROLL</p>
      <p>⬇</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props : {
    parent : {

    }
  }
}
</script>

<style lang="scss" scoped>

  .title {
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
    // This class should be removed on designing
  }

  .header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 100vh;
} 
</style>
