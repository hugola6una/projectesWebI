<script setup>
  // Librairies
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Components
  import SelectorComponent from '../components/SelectorComponent.vue';
  import PlayerContent from '../components/PlayerContent.vue';
  import AttacksContent from '../components/AttacksContent.vue';
  import GamesContent from '../components/GamesContent.vue';
  import ButtonPurple from '../components/ButtonPurpleComponent.vue';

  const router = useRouter();

  const contentToShow = ref('player');

  function activeButton(option) {
    contentToShow.value = option;
  }

  function deleteUser() {
    router.push('/');
  }

  function cancelDelete() {
    contentToShow.value = 'player';
  }
</script>

<template>
      <nav class="userSelectors">
        <div class="userOptions">
          <SelectorComponent @click="activeButton('player')" imageSrc="src/assets/images/icons/userIcon.png" strAlt="Player" :isSelected="contentToShow === 'player'"/>
          <SelectorComponent @click="activeButton('attacks')" imageSrc="src/assets/images/icons/swordIcon.png" strAlt="Attacks" :isSelected="contentToShow === 'attacks'"/>
          <SelectorComponent @click="activeButton('games')" imageSrc="src/assets/images/icons/historicGamesIcon.png" strAlt="Games" :isSelected="contentToShow === 'games'"/>
        </div>
        <aside class="trashOption">
          <button class="bTrash" @click="activeButton('trash')">
            <img src="..\assets\images\icons\trashIcon.png" alt="Trash" class="iTrash">
          </button>
        </aside>
      </nav>
      <section class="content">
        <PlayerContent v-if="contentToShow === 'player'"/>
        <AttacksContent v-else-if="contentToShow === 'attacks'"/>
        <GamesContent v-else-if="contentToShow === 'games'"/>

        <article v-else class="trashContent">
          <h1>DELETE USER</h1>
          <h3>ARE YOU SURE YOU WANT TO DELETE “USER”?</h3>
          <p>All player-related information will be deleted</p>
          <div class="bTrashOptions">
            <ButtonPurple buttonText="CONFIRM" @click="deleteUser"/>
            <ButtonPurple buttonText="CANCEL" @click="cancelDelete"/>
          </div>   
        </article>
      </section>
</template>

<style scoped>
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
      height: 5vmax;
      justify-self: flex-end;
      align-items: center;
    }

    .trashOption img {
        width: 4vmax;
    }

    .trashOption button {
        background: none;
        border: none;
    }

    .trashOption button.active {
        background: none;
    }

    .content {
      display: flex;
      background: white;
      margin: 4vh;
      overflow-y: auto;
      height: 100%;
      width: 100%;
    }

    .trashContent {
      display: flex;
      flex-direction: column;
      background-color: white;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .trashContent h1 {
      color: #362864;
      font-size: 3vmax;
    }

    .trashContent h3 {
      color: #362864;
      font-size: 2vmax;
    }

    .trashContent p {
      color: #362864;
      font-size: 1.5vmax;
    }

    .trashContent button {
      margin-top: 2vmax;
      display: flex;
      width: 15vmax;
      flex-direction: row;
      margin: 4vmax;
    }

    .bTrashOptions {
      display: flex;
    }

  @media (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;
    }
    .menu {
      align-items: end;
      justify-content: center;
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

    .userOptions {
      margin-left: 2vh;
    }

    .userOptions span {
      display: none;
    }

    button {
      width: 8vmax;
    }

    .userOptions {
        margin-left: 2vmax;
      }

      .userOptions span {
        display: none;
      }   

      .trashContent button {
        background-color: #362864;
        color: white;
      }

    
  
  }
</style>
