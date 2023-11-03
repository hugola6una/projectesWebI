<script setup>
  import MySecondComponent from '../components/MySecondComponent.vue'
</script>

<template>
  <div class="container">
    <div class="left">
      <img src="" alt="Logo" class="gameImage">
      <h1 class="gameTitle">ROBOT</h1>
      <h1 class="gameTitle">BATTLE</h1>
      <h2 class="gameSubTitle">ARENA</h2>
    </div>
    <div class="right">
      <button class="startOptions">CREATE PLAYER</button>
      <button class="startOptions">I HAVE A PLAYER</button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #633FC3, #362864);
  }

  .left {
    text-align: center;
    color: white;
    font-family: 'PRESS START 2P', sans-serif;
  }

  .gameTitle {
    margin: 0;
  }

  .gameSubTitle {
    margin: 0;
  }

  .right {
   margin-left: 3rem;
   display: flex;
   flex-direction: column;
   align-items: center;
  }

  .startOptions {
    background: #362864;
    color: #FFFF;
    margin: 0.5rem;
    display: block;
    height: 50px;
    border-radius: 5px;
  }
</style>
