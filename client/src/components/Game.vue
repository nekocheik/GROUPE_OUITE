<template>
  <div class="background">
    <div class="title">
      <h1>How we built the world together</h1>
      <h2>Computing - Test your knowledge</h2>
    </div>
    <div class="web-gl">
    </div>
    <div class="quizz">
      <p>{{ question.question }}</p>
      <ul v-for="answer in findAnswers()" :key="answer">
        <li class="button" @click="choice(answer)"> {{ answer }}</li>
      </ul>
    </div>
    <div class="answer" v-if="showAnswer" >
      <span v-if="correct == true">Correct</span>
      <span v-if="correct == false">Incorrect</span>
      <img :src="image" alt="">
      <p>{{ question.description }}</p>
      <p @click="toDocument(question)">Learn more ></p>
      <button @click="nextQuestion()" class="button">Next question</button>
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
      <span>{{ level }} / {{ questions.length }}</span> 
    </div>
  </div>
</template>

<script>

import quizz from '../assets/quizz.json'
import images from "../assets/images/quizz.js"

let level = 1

export default {
  data() {
    return {
      level: level,
      question: this.findQuestion(level),
      questions: quizz.questions,
      showAnswer: false,
      image: this.findImage(level),
      correct: undefined
    }
  },
  methods: {
    findQuestion(level) {
      return quizz.questions.find(
        question => question.id === parseInt(level)
      )
    },
    findAnswers() {
      return this.question.answers
    },
     findImage(level) {
      return images[`question${level}`]
    },
    choice(answer) {
      if(!this.correct) {
        if(answer === this.question.answer) {
          this.correct = true
        } else {
          this.correct = false
        }
        this.showAnswer = true
      }
    },
    toDocument(question) {
      this.$router.push({ path: `/document/${question.doc}` });
    },
    nextQuestion() {
      level++
      this.showAnswer = false
      this.level = level
      this.question = this.findQuestion(level)
      this.image = this.findImage(level)
      this.correct = undefined

    }
  },
  mounted() {
    level = 1
    this.level = level
    this.question = this.findQuestion(level)
    this.showAnswer = false
    this.image = this.findImage(level)
    console.log(level)
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

.answer {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 35px 30px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;  
  }

  img {
    width: 100%;
  }
}


</style>

