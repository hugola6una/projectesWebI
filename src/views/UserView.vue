<script setup>
  import { ref } from 'vue';  // Per refenciar variables
  import lateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';
  import PlayerContent from '../components/PlayerContent.vue';
  import AttacksContent from '../components/AttacksContent.vue';
  import GamesContent from '../components/GamesContent.vue';
  import TrashContent from '../components/TrashContent.vue';
  
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
        <section class="center">
          <nav class="userSelectors">
            <div class="userOptions">
              <button class="active" @click="showContent('player')">
              <img src="../assets/images/icons/playerdefault.png" alt="User" class="iUser">
              <span>Player</span>
            </button>
            <button @click="showContent('attacks')">
              <img src="../assets/images/icons/swordIcon.png" alt="Attacks" class="iSword">
              <span>Attacks</span>
            </button>
            <button @click="showContent('games')">
              <img src="..\assets\images\icons\historicGamesIcon.png" alt="Games" class="iArchive">
              <span>Games</span>
            </button>
            </div>
            <div class="trashOption">
              <button class="bTrash" @click="showContent('trash')">
                <img src="..\assets\images\icons\trashIcon.png" alt="Trash" class="iTrash">
              </button>
            </div>
          </nav>
          <article class="userContent">
            <div v-if="contentToShow === 'player'">
              <PlayerContent />
            </div>
            <div v-else-if="contentToShow === 'attacks'">
              <AttacksContent />  
            </div>
            <div v-else-if="contentToShow === 'games'">
              <GamesContent />
            </div>
            <div v-else>
              <TrashContent />  
              </div>  
          </article>
        </section>
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

  div {
    width: 100%;
    height: 100%;
    justify-content: center;
    overflow-y: auto;
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

  .userSelectors {
    display: grid;
    grid-template-columns: 4fr 1fr;
    justify-content: center;
    align-items: end;
  }

  .userOptions {
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .trashOption {
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

  .bTrash.active {
    background: none;
  }

  .userContent {
      display: flex;
      justify-content: center;

    }
  .bOptions button {
    background-color: #362864;
    color: white;
    margin: 1vmax;
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

    .userContent {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    
  
  }
</style>
