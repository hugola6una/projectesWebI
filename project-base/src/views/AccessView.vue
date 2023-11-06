<script setup>
  import MySecondComponent from '../components/MySecondComponent.vue'
  import router from '../router';
</script>

<template>
  <div class="container">
    <div class="left">
      <div class="left-content">
        <img src="../assets/images/logoRobotArena.png" alt="Logo" class="gameImage">
        <h1 class="gameTitle">ROBOT</h1>
        <h1 class="gameTitle">BATTLE</h1>
        <h2 class="gameSubTitle">ARENA</h2>
      </div>
    </div>
    <div class="right">
      <div class="right-content">
        <router-link to="/create-player" class="link">
          <button class="buttonOptions">CREATE PLAYER</button>
        </router-link>
        <router-link to="/login-player" class="link">
          <button class="buttonOptions">I HAVE A PLAYER</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 100vh;
    
  }

  .left {
    height: 100%;
    text-align: end;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(to right, #633FC3, #362864);
  }

  .left-content {
    text-align: center;
    margin-right: 4vmax;
  }

  .gameImage {
    width: 20vmax;
  }

  .gameTitle {
    margin: 0;
    font-size: 4vmax;
  }

  .gameSubTitle {
    margin: 0;
    font-size: 3vmax;
  }

  .right {
    height: 100%;
    text-align: start;
    color: white;
    display: flex;
    align-items: center;
    background-color: white;
  }

  .right-content {
    margin-left: 10vmax;
    margin-top: 4vmax;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .buttonOptions {
    background: #362864;
    color: #FFFF;
    margin: 1vmax;
    display: block;
    font-size: 2vmax;
    height: 10vmax;
    width: 25vmax;
  }

  .buttonOptions:hover {
    background: #80547f;
  }

</style>