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
            <input type="text" placeholder="Password" class="inPlayerPassword">
            <input type="text" placeholder="Repeat Password" class="inPlayerPassword2">
          </form>
        </div>

        <router-link to="/login-player">
          <button class="bHavePlayer">I HAVE A PLAYER</button>
        </router-link>
        <router-link to="/home">
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
    align-items: flex-start; /* Anclar todo el contenido a la parte superior de la columna */
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
    margin-right: 3rem;
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
    height: 100%;
    text-align: start;
    color: white;
    display: flex;
    align-items: center;
    background-color: white;
  }

  .right-content {
    margin-left: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: #362864;
  }

  .createTitle {
    margin: 0;
    font-size: 1rem;
  }

  .addProfilePhoto {
    margin: 1rem;
    width: 80px;
  }

  .profileInputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  input {
    display: flex;
    margin: 1rem;
    width: 200px;
    height: 10px;
    border: none;
    border-bottom:  1px solid #362864;
    padding: 0.5rem;
  }

  button {
    text-align: center;
    color: #FFFF;
    margin: 0.5rem;
    display: flex;
    height: 40px;
    width: 200px;
    text-decoration: none;
    align-items: center;
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
