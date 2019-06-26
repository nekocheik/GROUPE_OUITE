<template>
  <div class="header" :style="bgImage()">
    <h1 class="title">{{ parent.name }}</h1>
    <figure v-if="parent.quote">
      <blockquote>{{ parent.quote }}</blockquote>
      <figcaption class="author">{{ parent.quoteAuthor }}</figcaption>
    </figure>
    <p class="description" v-else>{{ parent.introduction }}</p>
    <span class="scroll" @click="scrollDown()">Scroll</span>
  </div>
</template>

<script>

const gsap = require('gsap');
const TweenMax = gsap.TweenMax;

export default {
  data() {
    return {
    }
  },
  props : {
    parent : {
    }
  },

  methods: {
    backgroundUrl() {
      if (this.parent.background) {
        return require (`../../../assets/images/${this.parent.background}.jpg`)
      }
    },
    bgImage() {
      return `background-image : url(${this.backgroundUrl()})`
    },
    scrollDown() {
      let pageHeight = window.innerHeight
      window.scrollBy(0, pageHeight)
    }
  },
}
</script>

<style lang="scss" scoped>

.title {
  font-size: 80px;
  text-transform: uppercase;
  letter-spacing: calc(80px * 10 / 100);
  margin-bottom: 60px;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  width: 100%;
  height: 100vh;
} 

blockquote {
  position: relative;
  line-height: 120%;
  width: 450px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

blockquote::before, blockquote::after {
  width: 22px;
  position: absolute;
}

blockquote::before {
  content: url('../../../assets/images/quote-start.svg');
  top: -20px;
  left: -50px;
}

blockquote::after {
  content: url('../../../assets/images/quote-end.svg');
  bottom: -20px;
  right: -50px;
}

.author {
  font-weight: lighter;
  font-style: italic;
  text-align: center;
}

.description {
  width: 650px;
  line-height: 130%;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.scroll {
  font-size: 14px;
  text-transform: uppercase;
  position: absolute;
  bottom: 100px;
  cursor: pointer;


  &::after {
    content: url('../../../assets/images/Arrow.svg');
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
}



</style>
