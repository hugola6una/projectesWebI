<script setup>
  // Librairies
  import { onMounted, ref, watch } from 'vue';

  // API Requests
  import { getCurrentGameRequest } from '@/services/api/GamesRequest.js';

  // Components
  import PlayerLife from '@/components/PlayerBattle.vue';

  const game = ref({}); // Info de la partida
  const nRows = ref(8); // Numero de rows
  const player1Position = ref({ row: 125, column: 290, direction: 0 }); // Més 5 equival a un row/column
  const player2Position = ref({ row: 50, column: 83, direction: 0}); // Més 5 equival a un row/column

  onMounted(() => {
    getCurrentGame(); // Obtenim la partida actual
    window.addEventListener('keydown', keyPressed);
  });

  // Comprova actualitzacions del component
  watch(() => game.value, () => {
    // nRows.value = game.value[0].size;
  });

  async function getCurrentGame() {
    try {
      const token = JSON.parse(localStorage.getItem('player')).token;
      game.value = await getCurrentGameRequest(token);
    } catch (error) {
      alert(error);
    }
  }

  function keyPressed(event) {
    const { key } = event;
    const cellSize = 50 / nRows.value;
    switch (key) {
      case 'w':
        if (player1Position.value.direction === 180) {
          movePlayer1(-cellSize, 0);
        } else {
          player1Position.value.direction = 180;
        }
        break;
      case 'a':
        if (player1Position.value.direction === 90) {
          movePlayer1(0, -cellSize);
        } else {
          player1Position.value.direction = 90;
        }
        break;
      case 's':
        if (player1Position.value.direction === 0) {
          movePlayer1(cellSize, 0);
        } else {
          player1Position.value.direction = 0;
        }
        break;
      case 'd':
        if (player1Position.value.direction === -90) {
          movePlayer1(0, cellSize);
        } else {
          player1Position.value.direction = -90;
        }
        break;
      default:
        break;
    }
  }

  function movePlayer1(y, x) {
    player1Position.value.row += y * (50 / nRows.value);
    player1Position.value.column += x * (50 / nRows.value);

    if (player1Position.value.row > 70) {
      player1Position.value.row = 70;
    } else if (player1Position.value.row < 25) {
      player1Position.value.row = 25;
    }

    if (player1Position.value.column < 58.1) {
      player1Position.value.column = 58.1;
    } else if (player1Position.value.column > 103.1) {
      player1Position.value.column = 103.1;
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
      <div class="player1" :style="{ top: player1Position.row / nRows + 'vh', left: player1Position.column / nRows + 'vh' , width:50/nRows + 'vh', height:50/nRows + 'vh', rotate: player1Position.direction + 'deg'}">
          <img src="@/assets/images/icons/robot1.png" alt="player1">
      </div>
      <div class="player2" :style="{ top: player2Position.row + 'vh', left: player2Position.column + 'vh' , width:50/nRows + 'vh', height:50/nRows + 'vh', rotate: player2Position.direction + 'deg'}">
          <img src="@/assets/images/icons/robot2.png" alt="player2">
      </div>
      <div v-for="row in nRows" :key="row" class="row">
        <div v-for="cell in nRows" :key="cell" :class="{ cell, even: (row + cell) % 2 === 0, odd: (row + cell) % 2 !== 0 }" :style="{width:50/nRows + 'vh', height:50/nRows + 'vh'}">
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
  }

  .even {
    background-color: #E1E2FE;
  }

  .odd {
    background-color: #291D49;
  }

  .player1 {
    margin: 0%;
    position: absolute;
    background-color: green; 
  }

  .player1 img {
    width: 100%;
    height: 100%;
  }

  .player2 {
    margin: 0;
    position: absolute;
    background-color: red; 
  }

  .player2 img {
    width: 100%;
    height: 100%;
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
  