<script setup>
  import MySecondComponent from '../components/MySecondComponent.vue'
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
      <div class="right-content">
        <h1 class="loginTitle">LOGIN</h1>
        <div class="profileInputs">
          <input type="text" placeholder="Name" class="inPlayerName">
          <input type="text" placeholder="Password" class="inPlayerPassword">
        </div>

        <div class="bInputs">
          <router-link to="/create-player" class="link">
            <button class="bCreatePlayer">CREATE PLAYER</button>
          </router-link>
          <router-link to="/home" class="link">
            <button class="bLogin">SIGN IN</button>
          </router-link>
        </div>
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

  .right-content {
    display: grid;
    grid-template-rows: 1fr 1fr 2fr;
  }

  .loginTitle {
    color: #362864;
    font-size: 4vmax;
  }

  input {
    border: none;
    font-size: 1.5vmax;
    width: 30vmax;
    border-bottom: #362864 0.5px solid;
  }

  .profileInputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

  }

  .bInputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    margin-top: 1vmax;
    height: 4vmax;
    width: 20vmax;
    font-size: 1.5vmax;
    text-align: center;
    border: none;
  }

  button:hover {
    background-color: #633FC3;
  }

  .bCreatePlayer {
    background-color: white;
    border: 1px solid #362864;
    color: #362864;
  }

  .bLogin {
    color: white;
    height: 8vmax;
    width: 25vmax;
    background-color: #362864;
  }

  @media (max-width: 820px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }

    .loginTitle {
      color: white;
    }

    .left {
      background: #362864;
      text-align: center;
      justify-content: center;
    }

    .right {
      width: 100%;
      background-color: #362864;
    }

    .right-content {
      height: 100%;;
      justify-content: start;
      align-items: center;
    }

    input {
      color: white;
      background: none;
      border-bottom: 0.5px solid white;
    }
   
    
  }
</style>