<template>
       <form>
                <h1>Connexion</h1>
                
                <label><b>Nom d'utilisateur</b></label>
                <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required>

                <label><b>Mot de passe</b></label>
                <input type="password" placeholder="Entrer le mot de passe" name="password" required>

                <input type="submit" id='submit' value='LOGIN' >
            </form>
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
