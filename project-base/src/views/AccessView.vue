<script setup>
  import router from '../router';
</script>

<template>
  <div class="container">
    <div class="left">
        <img src="../assets/images/logoRobotArena.png" alt="Logo" class="gameImage">
        <div class="titles">
          <h1 class="gameTitle">ROBOT</h1>
          <h1 class="gameTitle">BATTLE</h1>
          <h2 class="gameSubTitle">ARENA</h2>
        </div>
    </div>
    <div class="right">
        <router-link to="/create-player" class="link">
          <button class="buttonOptions">CREATE PLAYER</button>
        </router-link>
        <router-link to="/login-player" class="link">
          <button class="buttonOptions">I HAVE A PLAYER</button>
        </router-link>
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
    color: white;
    display: flex;
    flex-direction: column;;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #633FC3, #362864);
  }

  .titles {
    text-align: center;
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
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  button {
    border: none;
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

  @media (max-width: 820px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 2fr 1fr;
    }

    .left {
      background: #362864;
      text-align: center;
      justify-content: center;
    }

    .right {
      background-color: #362864;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
    .buttonOptions {
      background: white;
      color: #362864;
    }
    
  }

</style>