<script setup>
  // Librairies
  import { onMounted, ref, watch } from 'vue';

  // API Requests
  import { getCurrentGameRequest } from '@/services/api/GamesRequest.js';

  // Components
  import PlayerLife from '@/components/PlayerBattle.vue';

  const game = ref({});

  onMounted(() => {
    getCurrentGame();
  });

  watch(() => game.value, () => {
    console.log(game.value);
  });

  async function getCurrentGame() {
    try {
      const token = JSON.parse(localStorage.getItem('player')).token;
      game.value = await getCurrentGameRequest(token);
    } catch (error) {
      alert(error);
    }
  }


  function checkPlayerIn() {
    if (game.value.length > 0 && game.value[0].players_games && game.value[0].players_games.length === 1) {
      return game.value[0].players_games[0].player_ID + ' VS ' + 'Waiting...';
    }

    if (game.value.length > 0 && game.value[0].players_games && game.value[0].players_games.length === 2) {
      return game.value[0].players_games[0].player_ID + ' VS ' + game.value[0].players_games[1].player_ID;
    }
  }

</script>


<template>
  <header>
    <PlayerLife />
    <div class="mid">
      <p>{{checkPlayerIn()}}</p>
    </div>
    <PlayerLife />
  </header>
  <main>
    <div class="board">
      <div v-for="row in 10" :key="row" class="row">
        <div v-for="cell in 10" :key="cell" :class="{ cell, even: (row + cell) % 2 === 0, odd: (row + cell) % 2 !== 0 }">

        </div>
      </div>
    </div>
  </main>
  <footer>
    <p>Peus</p>
  </footer>
    
</template>

<style scoped>

  header {
    width: 100%;
    height: 100%;
    background-color: #ABA9F8;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    
  }

  .mid {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  } 
  

  main {
    width: 100%;
    height: 100%;
    background-color: #E1E2FE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0vh;
  }

  .cell {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    height: 5vh;
    width: 5vh;
  }

  .even {
    background-color: #E1E2FE;
  }

  .odd {
    background-color: #291D49;
  }

  footer {
    width: 100%;
    height: 100%;
    background-color: #ABA9F8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
  