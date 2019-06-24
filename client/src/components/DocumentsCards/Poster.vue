<template>
  <div :class="cardPosition()" :style="bgImage()">
    <div class="card">
      <h2 class="title">{{child.title}}</h2>
      <p v-for="text in child.texts" :key="text" class="content">{{text}}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props : ['childId', 'parentName', 'child'],
  methods : {
    imgUrl() {
      if (this.child.image) {
        return require (`../../assets/images/${this.child.image}.jpg`)
      }
    },
    bgImage() {
      return `background-image : url(${this.imgUrl()})`
    },
    cardPosition() {
      if (this.child.position === "left") {
        return "poster-container "
      } else {
        return "poster-container right"
      }
    }
  },
}
</script>

<style lang="scss" scoped>


.poster-container {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 50px;

  &.right {
    justify-content: flex-end;
  }
} 

.title {
  font-size: 50px;
  text-transform: uppercase;
  letter-spacing: calc(50px * 10 / 100);
  margin-bottom: 25px;
}

.card {
  background: rgba(255, 255, 255, 0.10);
  border-radius: 10px;
  padding: 46px 20px;
  width: 502px;
}

.content {
  font-size: 20px;
  line-height: 150%;


  &:not(:last-child) {
    margin-bottom: 20px;
  }
}




</style>
