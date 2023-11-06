<script setup>
  import router from '../router';
</script>

<template>
    <div class="container">
      <div class="menu">
        <img src="..\assets\images\logoRobotoArena2.png" alt="Logo" class="gameImage">
        <div class= "options"> 
          <div class="default">
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
          <div class="logout">
            <div class="option">
              <img src="..\assets\images\icons\logoutIcon.png" alt="LogOut" class="icon">
              <span>LogOut</span>
            </div>
           </div>
        </div>
      </div>

      <div class="body">
        <div class="top">
          <div class="coins">
            <img src="..\assets\images\icons\coinIcon.png" alt="Coins" class="icon">
            <span class="coin">1000</span>
          </div>
        </div>
        <div class="center">
          
          <h1 class="gameTitle">ROBOT</h1>
          <h1 class="gameTitle">BATTLE</h1>
          <h2 class="gameSubTitle">ARENA</h2>

          <button class="bPlay">PLAY</button>
          
        </div>
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
    display: grid;
    grid-template-rows: 1fr 6fr;
    background: white;
  }

  .gameImage  {
    margin: 1vmax;
    width: 5vmax;
  }

  .options {
    display: grid;
    grid-template-rows: 3fr 1fr;
  }

  .default {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .option {
    height: 5vmax;
    display: grid;
    grid-template-columns: 1fr 4fr;
    justify-content: center;
    align-items: center;

  }

  .logout {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .option:hover {
    background: #80547f;
    cursor: pointer;
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
    background: #362864;
    display: grid;
    grid-template-rows: 1fr 8fr;
  }

  .top {
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   align-items: center;
  }

  .coins {
    margin-top: 1vmax;
    color: white;
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: end;
    align-items: center;
  }

  .coin {
    color: white;
    justify-content: center;
    align-items: center;
  }
  .center {
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
  }

  .gameTitle {
    margin: 0;
    font-size: 4vmax;
  }

  .gameSubTitle {
    margin: 0;
    font-size: 3vmax;
  }

  .bPlay {
    margin-top: 3vmax;
    border-radius: 0px;
    width: 25vmax;
    height: 7vmax;
    justify-content: center;
    align-items: center;
    font-size: 4vmax;
  }
  
  </style>
  