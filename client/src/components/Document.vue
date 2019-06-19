<template>
  <div>
    <h1>Component Document</h1>
  </div>
</template>

<script>
import factService from '../factService' 

export default {
  name: 'HelloWorld',
  data() {
    return {
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

<style lang="scss" scoped>

</style>
