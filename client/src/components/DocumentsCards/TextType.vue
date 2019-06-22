<template>
  <div class="text-container">
     <h2>Ceci est le component Texte</h2>
     <h2>{{child.title}}</h2>
     <p>{{child.text}}</p>
     <p>{{child.text2}}</p>
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
    height: 400px;
  } 
</style>
