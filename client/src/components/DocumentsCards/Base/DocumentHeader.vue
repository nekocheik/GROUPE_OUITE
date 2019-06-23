<template>
  <div class="header">
     <h1 class="title">{{name}}</h1>
     <p>☼☼☼ Le header est toujours présent, seul son contenu (comme le titre ci-dessus) est généré dynamiquement via la db ☼☼☼</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props : {
    name : String
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
  height: 400px;
} 
</style>
