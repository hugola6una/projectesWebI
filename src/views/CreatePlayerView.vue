<script setup>

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
      <h1 class="h1Register">CREATE PLAYER</h1>
      <div class="dIteractive">
        <div class="inputs">
          <img src="..\assets\images\addProfilePhoto.png" alt="Logo" class="addProfilePhoto">
          <input type="text" placeholder="Name" class="inPlayerName">
          <input type="password" placeholder="Password" class="inPassword">
          <input type="password" placeholder="Repeat Pasword" class="inPassword2">
        </div>
      <div class="buttons"> 
        <router-link to="/login-player" class="link">
          <button class="bSigIn">I HAVE A PLAYER</button>
        </router-link>
        <router-link to="/home" class="link">
          <button class="bCreate">CREATE</button>
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

  input {
    display: flex;
    margin-top: 1vmax;
    height: 4vmax;
    width: 35vmax;
    font-size: 2vmax;
    box-sizing: border-box;
    color: #362864;
    padding: 1vmax;
    border: none;
    border-bottom: 0.1em solid #633FC3;
  }

  input:focus {
    outline: 0.1em solid #633FC3;
  }

  .h1Register {
    font-size: 3vmax;
    color: #362864;
  }

  .addProfilePhoto {
    margin-top: 0vmax;
    width: 12vmax;
  }

  .inputs {
    margin-top: 5vmax;
  }

  .buttons {
    margin-top: 5vmax;
  }

  button {
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 1vmax;
    width: 35vmax;
    height: 4vmax;
    border: none;
    font-size: 1.5vmax;
    box-sizing: border-box;
  }

  .bSigIn {
    border: 0.1em solid #633FC3;
    background: white;
    color: #362864;
  }

  .bCreate {
    font-size: 3vmax;
    height: 8vmax;
    background: #633FC3;
    color: white;
    margin-bottom: 2vmax;
  }

  button:hover {
    background: #80547f;
    color: white;
  }

  

  @media (max-width: 820px) {

    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 3fr;
    }

    .left {
      background: #362864;
      text-align: center;
      justify-content: center;
    }

    .gameImage {
      margin-top: 3vmax;
      width: 5vmax;
    }

    .gameTitle {
      font-size: 1vmax;
    }

    .gameSubTitle {
      font-size: 1vmax;
    }

    .h1Register {
      color: white;
      font-size: 1.5vmax;
    }

    .right {
      display: grid;
      grid-template-rows: 1fr 4fr;
      width: 100%;
      background-color: #362864;
    }

    .dIteractive {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
    }

    .inputs {
      margin-top: 0vmax;
    }

    input {
      margin-top: 2vmax;
      background: none;
      width: 35vmax;
      height: 2vmax;
      font-size: 1.5vmax;
      color: white;
      border-bottom: 0.1em solid white;
    }

    .buttons {
      margin-top: 0.5vmax;
    }

    button {
      margin-top: 2vmax;
    }

    .bSigIn {
      border: 0.1em solid white;
      color: white;  
      background-color: #362864;
      height: 3vmax;
      font-size: 1.5vmax;
    }

    .bCreate {
      height: 5vmax;
      color: #362864;
      background-color: white;
    }

    .addProfilePhoto {
      margin-top: 0;
      width: 8vmax;
    }


    
    
  }
</style>