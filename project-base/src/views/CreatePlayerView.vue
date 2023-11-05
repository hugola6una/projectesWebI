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

</style>