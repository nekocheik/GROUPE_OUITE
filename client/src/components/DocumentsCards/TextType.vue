<template>
  <div class="text-container">
     <h2>Ceci est le component Texte</h2>
     <br>
     <h2>{{child.title}}</h2>
     <br>
     <p>{{child.text}}</p>
     <br>
     <p>{{child.text2}}</p>
     <br>
     <p v-if="child.knowledge1">{{child.knowledge1}}</p>
     <br>
     <p v-if="child.knowledge1">{{child.knowledge2}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props : ['childId', 'parentName', 'child'],

}
</script>

<style lang="scss" scoped>
   .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(237, 255, 133);
    width: 50%;
    height: 100vh;
    background-color: #000112;;
    color: white;
  } 
</style>
