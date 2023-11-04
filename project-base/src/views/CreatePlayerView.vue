<template>
   <div class="container">
    <div class="left">
      <img src="../assets/images/logoRobotArena.png" alt="Logo" class="gameImage">
      <h1 class="gameTitle">ROBOT</h1>
      <h1 class="gameTitle">BATTLE</h1>
      <h2 class="gameSubTitle">ARENA</h2>
    </div>
    <div class="right">
      
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
  }

  .left {
    text-align: end;
    justify-content: center;
    color: white;
    font-family: 'PressStart2P', sans-serif;
    background: linear-gradient(to right, #633FC3, #362864);
    height: 100%;
    width: 100%;
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
    align-items: center;
    height: 100%;
    width: 100%;
  }

</style>
