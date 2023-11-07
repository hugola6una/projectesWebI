<script setup>
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
        <h1 class="createTitle">CREATE PLAYER</h1>

        <div class="profilePhoto">
          <img src="../assets/images/addProfilePhoto.png" alt="Profile Photo" class="addProfilePhoto">
        </div>

        <div class="profileInputs">
          <form>
            <input type="text" placeholder="Name" class="inPlayerName">
            <input type="password" placeholder="Password" class="inPlayerPassword">
            <input type="password" placeholder="Repeat Password" class="inPlayerPassword2">
          </form>
        </div>

        <router-link to="/login-player" class="link">
          <button class="bHavePlayer">I HAVE A PLAYER</button>
        </router-link>
        <router-link to="/home" class="link">
          <button class="bCreate">CREATE</button>
        </router-link>
      
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
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
    margin-left: 4vmax;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: #362864;
  }

  .createTitle {
    margin: 0;
    font-size: 2vmax;
  }

  .addProfilePhoto {
    margin-top: 2vmax;
    width: 10vmax;
  }

  .profileInputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  input {
    display: flex;
    font-size: 2vmax;
    width: 35vmax;
    height: 5vmax;
    border: none;
    border-bottom:  1vmin solid #362864;
    margin-top: 1vmax;
  }

  button {
    text-align: center;
    color: #FFFF;
    height: 5vmax;
    width: 15vmax;
    font-size: 1vmax;
    align-items: center;
    margin: 1vmax;
  }

  button:hover {
    background: #80547f;
    color: white;
  }

  .bHavePlayer {
    color: #362864;
    background: #FFFF;
    border: 1px solid #362864;
  }
  .bCreate {
    background: #362864;
    border: 1px solid #362864;
  }

</style>
