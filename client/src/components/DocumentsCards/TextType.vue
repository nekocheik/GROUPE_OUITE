<template>
  <div :class="textAlign()">
     <h2 class="title">{{child.title}}</h2>
     <p v-for="text in child.texts" :key="text" >{{text}}</p>
     <span v-if="child.hints" class="hints-available" @click="showHints()">Hints available</span>
     <ul v-if="child.hints" :class="hints">
       <li v-for="hint in child.hints" :key="hint">{{hint}}</li>
     </ul>
  </div>
</template>

<script>



export default {
  data() {
    return {
      hints: "hints hidden"
    }
  },
  props : ['childId', 'parentName', 'child'],


  methods: {
    textAlign() {
      if(this.child.position === "right") {
        return "text-container right"
      } else {
        return "text-container"
      }
    },

    showHints() {
      this.hints = "hints"
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
    background-color: black;
    color: white;
    width: 50%;
    height: 100vh;
    padding: 30px 50px;

    &.right {
      align-items: flex-end;
      justify-content: flex-start;
      text-align: right;
    }
  } 

  .title {
    font-size: 50px;
    letter-spacing: calc(50px * 10 / 100);
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    line-height: 150%;
  }

  p:not(:last-child) {
    margin-bottom: 30px;
  }

  .hints-available {
    text-transform: uppercase;
    position: relative;
    transform: translateX(-70px);
    font-size: 17px;
    font-style: italic;
    margin-bottom: 30px;
    cursor: pointer;

    &::after {
      content: url('../../assets/images/hint.svg');
      position: absolute;
      right: -70px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .hints {
    display: flex;
    justify-content: space-between;


    li {
      border: 2px solid white;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      line-height: 130%;
      margin-left: 10px;
      margin-right: 10px;
    }

    &.hidden {
      visibility: hidden;  
    }

  }
</style>
