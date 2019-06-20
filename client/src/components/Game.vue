<template>
  <div class="background">
    <div class="title">
      <h1>How we built the world together</h1>
      <h2>Computing - Test your knowledge</h2>
    </div>
    <div class="web-gl">
    </div>
    <div class="quizz">
      <p>What was the first objects we used to count in the ancient Sumerian civilization ?</p>
      <ul>
        <li class="button">answer</li>
        <li class="button">answer</li>
        <li class="button">answer</li>
        <li class="button">answer</li>
      </ul>
    </div>
    <router-link  class="game" to="/earth">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="14.25" stroke="white" stroke-width="1.5"/>
        <rect x="19.5078" y="8.90118" width="1.875" height="15" rx="0.9375" transform="rotate(45 19.5078 8.90118)" fill="white"/>
        <rect x="21.0988" y="19.5078" width="1.875" height="15" rx="0.9375" transform="rotate(135 21.0988 19.5078)" fill="white"/>
      </svg>
      <p>Quit the game</p>
    </router-link>
    <div class="questions-count">
      <span>Question</span>    
      <span>{{ currentQuestion }}/{{ numberQuestion }}</span> 
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

.background {
  background: black;
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.web-gl {
  width: 500px;
  height: 500px;
  background: red;
  border-radius: 50%;
}

.icons {
  display: flex;
  flex-direction: column;
  align-items: center;  
}

.title {
  position: absolute;
  top: 30px;
  text-align: center;
}

h1 {
  font-size: 16px;
}

h2 {
  font-size: 30px;
  text-transform: uppercase;
}

.game {
  position: absolute;
  bottom: 0;
  left: 0;
}

.questions-count {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  text-align: center;
}

.quizz {
  position: absolute;
  left: 0;
  width: 300px;
}

li {
  width: 250px;
}


</style>
