<template>
  <div>
    <h1>Facts</h1>
    <!-- CREATE FACT HERE -->
    <hr>
    <p v-if="error">{{error}}</p>
    <div>
      <div v-for="(fact, index) in facts" :item="fact" :index="index" :key="fact._id">
        {{`${fact.createdAt.getDate()}/`}}
        <p>{{fact.text}}</p>
      </div>
    </div>
    <!-- END OF FACTS -->
    <hr style="height:50px; background-color:black">
    
  </div>
</template>

<script>
import factService from '../factService'

export default {
  name: 'HelloWorld',
  data() {
    return {
      facts : [],
      error : '',
      text : ''
    }
  },
  async created() {
    try {
      this.facts = await factService.getFacts();
    } catch (err) {
      this.error = err.message;
    }  
  }
}
</script>

<style scoped>

</style>
