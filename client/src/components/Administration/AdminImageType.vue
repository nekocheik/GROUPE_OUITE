<template>
  <div class="image-container">
     <h2>Ceci est le component Image</h2>
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
  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #cecece;
    width: 50%;
    height: 400px;
  }
</style>
