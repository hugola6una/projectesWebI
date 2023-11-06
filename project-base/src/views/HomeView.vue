<script setup>
  import router from '../router';
</script>

<template>
    <div class="container">
      <div class="menu">
        <img src="../assets/images/logoRobotArena.png" alt="Logo" class="gameImage">

      </div>

      <div class="body">

      </div>

    </div>
  </template>

  <style scoped>

  .container {
      display: grid;
      grid-template-columns: 1fr 4fr;
      align-items: center;
      height: 100vh;
      
  }

  .menu {
    height: 100%;
    text-align: end;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: black;
  }

  .gameImage  {
    width: 15vmax;
  }

  .body {
    height: 100%;
    text-align: end;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #362864;
  }
  
  </style>
  