<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
import Header from './components/appHeader.vue'
import Footer from './components/appFooter.vue'
import Canvas from './components/canvas/appCanvas.vue'

</script>

<template>
  <div class="bg">
  <img class="bg-l-1" src="./assets/img/bg-l-1.png">
  <img class="bg-l-2" src="./assets/img/bg-l-2.png">
  <img class="bg-l-3" src="./assets/img/bg-l-3.png">
  <img class="bg-r-1" src="./assets/img/bg-r-1.png">
  <img class="bg-r-2" src="./assets/img/bg-r-2.png">
  <img class="bg-r-3" src="./assets/img/bg-r-3.png">
</div>
<Header />
<Canvas />
<Footer />

  <!-- <RouterView /> -->
</template>

<style scoped>
html{
  position: relative;
  height: 100%;
}

.bg{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 100vh;

  > img{
    position: absolute;
    opacity: 0.6;
    transform: scale(1.5);
  }
  .bg-l-1 {
    top: -18%;
    left: -8%;
    width: 420px;
    animation: bg-l-1 8s linear infinite;
  }
  @keyframes bg-l-1 {
      50% {
          transform: translate(20%, -10%);
          opacity: 1;
      }
  }
  .bg-l-2 {
      top: 5%;
      left: -15%;
      width: 345px;
      opacity: 0.2;
      animation: bg-l-2 10s linear infinite;
  }
  @keyframes bg-l-2 {
      50% {
          transform: translate(40%, 28%) rotate(40deg);
          opacity: 0.4;
      }
  }
  .bg-l-3 {
      bottom: -30%;
      left: -20%;
      width: 588px;
      animation: bg-l-3 10s linear infinite;
  }
  @keyframes bg-l-3 {
      50% {
          transform: translate(10%, -30%) rotate(60deg);
          opacity: 1;
      }
  }
  .bg-r-1 {
      top: -24%;
      right: -15%;
      width: 588px;
      animation: bg-r-1 8s linear infinite;
  }
  @keyframes bg-r-1 {
      50% {
          transform: translate(-10%, 20%) rotate(60deg);
          opacity: 1;
      }
  }
  .bg-r-2 {
      top: 10%;
      right: -20%;
      width: 588px;
      animation: bg-r-2 8s linear infinite;
  }
  @keyframes bg-r-2 {
      50% {
          transform: translate(-15%, -20%) rotate(60deg);
          opacity: 1;
      }
  }
  .bg-r-3 {
      right: -10%;
      bottom: -15%;
      width: 346px;
      animation: bg-r-3 8s linear infinite;
  }
  @keyframes bg-r-3 {
      50% {
          transform: translate(-20%, -30%) rotate(60deg);
          opacity: 1;
      }
  }
}

</style>
