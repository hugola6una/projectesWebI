<script>
    // Per refenciar variables
  import lateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';
  import SelectorComponent from '../components/SelectorComponent.vue';
  import PlayerContent from '../components/PlayerContent.vue';
  import AttacksContent from '../components/AttacksContent.vue';
  import GamesContent from '../components/GamesContent.vue';
  import ButtonPurple from '../components/ButtonPurpleComponent.vue';

  export default {
    components: {lateralMenu, Top, SelectorComponent, PlayerContent, AttacksContent, GamesContent, ButtonPurple},
    data() {
      return {
        contentToShow: 'player'
      }
    },
    methods: {
      activeButton(option) {
        this.contentToShow = option;
      },
      deleteUser() {
        this.$router.push('/')
      },
      cancelDelete() {
        this.contentToShow = 'player';
      }
    },
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
              <SelectorComponent @click="activeButton('player')" imageSrc="src/assets/images/icons/userIcon.png" strAlt="Player" :isSelected="contentToShow === 'player'"/>
              <SelectorComponent @click="activeButton('attacks')" imageSrc="src/assets/images/icons/swordIcon.png" strAlt="Attacks" :isSelected="contentToShow === 'attacks'"/>
              <SelectorComponent @click="activeButton('games')" imageSrc="src/assets/images/icons/historicGamesIcon.png" strAlt="Games" :isSelected="contentToShow === 'games'"/>
            </div>
            <div class="trashOption">
              <button class="bTrash" @click="activeButton('trash')">
                <img src="..\assets\images\icons\trashIcon.png" alt="Trash" class="iTrash">
              </button>
            </div>
          </nav>
          <article>
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
    height: 100%;
    width: 100%;
  }
  .body {
    height: 100%;
    width: 100%;
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
      justify-self: flex-start;
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

    article {
      display: flex;
      background: white;
      margin: 2vmax;
      overflow-y: auto;
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
