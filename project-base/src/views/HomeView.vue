<script setup>
  import router from '../router';
</script>

<template>
    <div class="container">
      <div class="menu">
        <img src="..\assets\images\logoRobotoArena2.png" alt="Logo" class="gameImage">
        <div class= "options"> 
          <div clas="default">
            <div class="option">
              <img src="..\assets\images\icons\userIcon.png" alt="User" class="icon">
              <span>User</span>
            </div>
            <div class="option">
              <img src="..\assets\images\icons\rankingIcon.png" alt="Ranking" class="icon">
              <span>Ranking</span>
            </div>
            <div class="option">
              <img src="..\assets\images\icons\StoreIcon.png" alt="Store" class="icon">
              <span>Store</span>
            </div>
            <div class="option">
              <img src="..\assets\images\icons\myAttacksIcon.png" alt="MyAttacks" class="icon">
              <span>MyAttacks</span>
            </div>
            <div class="option">
              <img src="..\assets\images\icons\gamesIcon.png" alt="Games" class="icon">
              <span>Games</span>
            </div>
          </div>

          <div class="option">
              <img src="..\assets\images\icons\logoutIcon.png" alt="LogOut" class="icon">
              <span>LogOut</span>
            </div>
        </div>
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
    margin-left: 1vmax;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 6fr;
    background: white;
  }

  .gameImage  {
    margin-top: 1vmax;
    width: 5vmax;
  }

  .options {
    margin-top: 1vmax;
    display: grid;
    grid-template-rows: 6fr 1fr;
    justify-content: center;
    align-content: space-around;
    background-color: aquamarine;
  }

  .default {
    background-color: blue;
  }

  .option {
    margin: 1vmax;
    display: grid;
    grid-template-columns: 1fr 4fr;
    justify-content: center;
    align-items: center;
    background-color: violet;
  }

  .icon {
    width: 4vmax;
    margin-right: 1vmax;
    align-items: center;
    justify-content: center;

  }

  span {
    color: #362864;
    font-size: 1.5vmax;

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
  