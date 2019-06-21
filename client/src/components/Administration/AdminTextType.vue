<template>
  <div class="text-container">
     <h2>Ceci est le component Texte</h2>
     <h3>{{childId}}</h3>
     <button @click="updateCard(parentName, childId)">Uptade</button>
  </div>
</template>

<script>
import factService from '../../factService'; 


export default {
  data() {
    return {
    }
  },
  props : ['childId', 'parentName'],
  methods : {
    async updateCard(parentName, childId) {
      try {
        await factService.insertFact( parentName, childId )
      } catch (error) {
        
      }
    }
  }
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
