<template>
  <div class="poster-container">
     <h2>Ceci est le component Poster</h2>
     <hr>
     <h3>C'est le child n°{{childId}} de {{parentName}}</h3>
     <hr>
     <h3>Modifiez le ici</h3>
     <!-- <button @click="updateCard(parentName, childId)">Uptade</button> -->
     <form @submit.prevent="sendInDb()" class="form">
       <label>Text</label>
       <textarea v-model="form.text" name="" id="" cols="30" rows="10"></textarea>
       <label>Image URL</label>
       <input v-model="form.imageUrl" type="text">
       <pre>{{$data.form}}</pre>
     </form>
  </div>
</template>

<script>
import factService from '../../factService'; 


export default {
  data() {
    return {
      form : {
        text : '',
        imageUrl : ''
      }
    }
  },
  props : ['childId', 'parentName'],
  methods : {
    async updateCard(parentName, childId) {
      try {
        await factService.insertFact( parentName, childId )
      } catch (error) {
        alert('Fail to pull data from db')        
      }
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
  } 
  .form {
    display: flex;
    flex-direction: column;
  }
</style>
