<script setup>
  import { ref } from 'vue';  // Per refenciar variables
  import router from '../router';
  import lateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';
  
  const contentToShow = ref('player');

  function showContent(contentType) {
    contentToShow.value = contentType;
  }

</script>

<template>
  <div class="container">    
    <lateralMenu />
    <div class="body">
        <Top />
        <div class="center">
          <div class="options">
            <div class="default">
              <button @click="showContent('player')" :class="{ active: contentToShow === 'player' }">
                <img src="..\assets\images\icons\userIcon.png" alt="user" class="iUser" />
                Player
              </button>
              <button @click="showContent('attacks')" :class="{ active: contentToShow === 'attacks' }">
                <img src="..\assets\images\icons\myAttacksIcon.png" alt="attacks" class="iSword" />
                Attacks
              </button>
              <button @click="showContent('games')" :class="{ active: contentToShow === 'games' }">
                <img src="..\assets\images\icons\historicGamesIcon.png" alt="games" class="iArchive" />
                Games
              </button>
            </div>
            <div class="other">
              <button class="bTrash"><img src="..\assets\images\icons\trashIcon.png" alt="delete" class="iTrash"/></button>
            </div>  
          </div>
          <div class="menuUser">
            <div class="content">
              <div v-if="contentToShow === 'player'" class="playerContent">
                <img src="..\assets\images\icons\userIcon.png" alt="userPhoto"/>
                <h1>Player</h1>
                <div class="level">
                  <div class="progressBarContainer">
                    <div class="progressBar">
                    </div>
                  </div>
                  <p>Lvl. X</p>
                </div>
                <p>55 / 100</p>
              </div>
              <div v-else-if="contentToShow === 'attacks'">
                <h1>Attacks</h1>
              </div>
              <div v-else-if="contentToShow === 'games'">
                <h1>Games</h1>
              </div>
            </div>
          </div>
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

  .body {
    height: 100%;
    background: #362864;
    display: grid;
    grid-template-rows: 1fr 8fr;
  }


  .center {
    display: grid;
    grid-template-rows: 1fr 8fr;
    height: 100%;
  }

  .options {
    display: grid;
    grid-template-columns: 4fr 1fr;
  }

  .default {
    display: flex;
    justify-content: center;
    align-items: end;
  }

  button {
    border: 0.1em solid #362864;
    height: 5vmax;
    width: 15vmax;
    font-size: 1.3vmax;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  button.active {
    background: #80547f;
    color: white;
  }

  .iUser {
    width: 4vmax;
    margin-right: 1vmax;
  }

  .iSword {
    width: 3.5vmax;
    margin-right: 1vmax;
  }

  .iArchive {
    width: 3vmax;
    margin-right: 1vmax;
  }

  .other {
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .iTrash {
    width: 4vmax;
  }

  .bTrash {
    background: none;
  }

  .menuUser {
    display: flex;
    align-items: start;
    justify-content: center;
  }
  .content {    
    height: 45vmax;
    width: 70vmax;
    background-color: white;
  }

  .playerContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .playerContent img {
    margin-top: 4vmax;
    width: 10vmax;
  }

  .playerContent p {
    font-size: 1vmax;
    color: black;
  }
  .level {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vmax;
  }

  .progressBarContainer {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 15vmax;
    height: 3vmax;
    margin-right: 1vmax;
    background-color: #362864;
  }

  .progressBar {
    display: flex;
    height: 1.5vmax;
    width: 50%; /* Ho fem % per el futur joc*/
    margin: 1vmax;
    background-color: white;
  }

  .playerContent h1 {
    margin-top: 3vmax;
    font-size: 2.5vmax;
    color: #362864; 
  }

  @media (max-width: 820px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 8fr 1fr;
    }

    .body {
      height: 100%;
      order: 1;
    }
  }
</style>
