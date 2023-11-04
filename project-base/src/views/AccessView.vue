<script setup>
  import MySecondComponent from '../components/MySecondComponent.vue'
  import router from '../router';
</script>

<template>
  <div class="container">
    <div class="left">
      <img src="../assets/images/logoRobotArena.png" alt="Logo" class="gameImage">
      <h1 class="gameTitle">ROBOT</h1>
      <h1 class="gameTitle">BATTLE</h1>
      <h2 class="gameSubTitle">ARENA</h2>
    </div>
    <div class="right">
      <router-link to="/create-player">
        <button class="buttonOptions">CREATE PLAYER</button>
      </router-link>
      <router-link to="/login-player">
        <button class="buttonOptions">I HAVE A PLAYER</button>
      </router-link>
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
    font-family: 'PressStart2P', sans-serif;
  }

  .gameImage {
    width: 130px;
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
   align-items: center
  }

  .buttonOptions {
    background: #362864;
    color: #FFFF;
    margin: 0.5rem;
    display: block;
    height: 50px;
  }

  .buttonOptions:hover {
    background: #440042;
    color: #FFFF;
  }

</style>
