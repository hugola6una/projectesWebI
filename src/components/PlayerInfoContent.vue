<script setup>
    import { ref } from 'vue';
    import PlayerContent from '../components/PlayerContent.vue';
    import AttacksContent from '../components/AttacksContent.vue';
    import GamesContent from '../components/GamesContent.vue';
    const contentToShow = ref('player');

    function showContent(contentType) {
    contentToShow.value = contentType;
    }
</script>

<template>
    <section class="center">
          <nav class="userSelectors">
            <div class="userOptions">
              <button @click="showContent('player')" :class="{ active: contentToShow === 'player' }">
                <img src="../assets/images/icons/playerdefault.png" alt="User" class="iUser">
                <span>Player</span>
              </button>
              <button @click="showContent('attacks')" :class="{ active: contentToShow === 'attacks' }">
                <img src="../assets/images/icons/swordIcon.png" alt="Attacks" class="iSword">
                <span>Attacks</span>
              </button>
              <button @click="showContent('games')" :class="{ active: contentToShow === 'games' }">
                <img src="..\assets\images\icons\historicGamesIcon.png" alt="Games" class="iArchive">
                <span>Games</span>
              </button>
            </div>
          </nav>
          <article class="userContent">
            <div v-if="contentToShow === 'player'" class="userContent">
              <PlayerContent />
            </div>
            <div v-else-if="contentToShow === 'attacks'" class="userContent">
              <AttacksContent />  
            </div>
            <div v-else-if="contentToShow === 'games'" class="userContent">
              <GamesContent />
            </div>
            <div v-else class="trashContent">
              <h2>ARE YOU SURE YOU WANT TO DELETE "USER"?</h2>
              <p>All player-related information will be automaticly delated.</p>
              <div class="deleteOptions">
                <router-link to="/" class="link">
                  <button>Confirm</button>
                </router-link>
                <button @click="showContent('player')">
                  Cancel
                </button> 
              </div>
            </div>  
          </article>
        </section>
</template>

<style scoped>
    .center {
        display: grid;
        grid-template-rows: 1fr 8fr;
        height: 100%;
    }

    .userSelectors {
        display: grid;
        grid-template-columns: 4fr 1fr;
        align-items: end;
    }

    .userOptions {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-left: 3.3vh;
    }

    .trashOption {
        display: flex;
        width: 2vmax;
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
        width: 100%;
        display: flex;
        justify-content: center;

    }
    .bOptions button {
        background-color: #362864;
        color: white;
        margin: 1vmax;
    }

    .trashContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: white;
        color: #362864;
        width: 100%;
        margin: 2vmax;
        padding: 2vmax;
    }

    .trashContent h2 {
        font-size: 3vmax;
    }

    .trashContent p {
        font-size: 1vmax;
    }

    .trashContent button {
        display: inline-flex;
        background-color: #362864;
        color: white;
        margin: 2vmax;
    }
</style>