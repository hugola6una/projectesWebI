<script setup>
  // Librairies
  import { onMounted, ref, watch } from 'vue';

  // API Requests
  import { getCurrentGameRequest, changeDirectionRequest } from '@/services/api/GamesRequest.js';

  // Components
  import PlayerLife from '@/components/PlayerBattle.vue';

  const token = JSON.parse(localStorage.getItem('player')).token;
  const title = ref('Waiting... vs Waiting');
  

  const game = ref({}); // Info de la partida
  const nRows = ref(); // Numero de rows
  const player1Position = ref({ row: 0, column: 0, direction: "down" }); // Més 5 equival a un row/column
  const player2Position = ref({ row: nRows.value -1, column: nRows.value-1, direction: "up"}); // Més 5 equival a un row/column

  const player1 = ref({}); // Info del player1
  const player2 = ref({}); // Info del player2 

  const player1orNplayer2 = ref('');

  onMounted(() => {
    getCurrentGame(); // Obtenim la partida actual
    window.addEventListener('keydown', keyPressed); // Crea listener en tota la fienstre
  });

  // Comprova actualitzacions del component
  watch(() => game.value[0], () => {
    console.log(game.value[0]);
      nRows.value = game.value[0].size; // Actualitzem el numero de rows
      player2Position.value = { row: nRows.value -1, column: nRows.value-1, direction: 0}; // Actualitzem la posició del player2
      if (game.value[0].players_games) { // Comprova si hi ha 2 jugadors
        player1.value = game.value[0].players_games[0]; // Actualitzem la info del player1
        player1Position.value = { row: player1.value.y_game, column: player1.value.x_game, direction: player1.value.direction }; // Actualitzem la posició del player
      }
      if ( game.value[0].players_games[1]) { // Comprova si hi ha 2 jugadors
        player2.value = game.value[0].players_games[1]; // Actualitzem la info del player2
        player2Position.value = { row: player2.value.y_game, column: player2.value.x_game, direction: player2.value.direction }; // Actualitzem la posició del player
      }
      // player2.value = game.value[0].players_games[1]; // Actualitzem la info del player2
      checkPlayerIn();
  });

  // Request a la API per obtenir la partida actual
  async function getCurrentGame() {
    try {
      game.value = await getCurrentGameRequest(token);
    } catch (error) {
      alert(error);
    }
  }

  function whoIam() {
    const player = JSON.parse(localStorage.getItem('player')).player_ID;
    if (player == game.value[0].players_games[0].player_ID) {
      player1orNplayer2.value = '1';
    } else {
      player1orNplayer2.value = '0';
    }

    console.log(player);
    console.log(game.value[0].players_games[0].player_ID);
    console.log(player1orNplayer2.value);
  }
  // Controla les tecles que es prem
  function keyPressed(event) {
    const { key } = event;
    const player = JSON.parse(localStorage.getItem('player')).player_ID;
    if (player == game.value[0].players_games[0].player_ID) {
      switch (key) {
        case 'w':
          if (player1Position.value.direction === "up") { //Comprova que el jugador estigui mirant cap a on es mou
            movePlayer1(-1, 0); // En cas que miri cap a on es mou, es mou 
            return;
          } else {
            player1Position.value.direction = "up"; // Si no està mirant cap a on es mou, actualitza la mirada
          }
          break;
        case 'a':
          if (player1Position.value.direction === "left") { //Comprova que el jugador estigui mirant cap a on es mou
            movePlayer1(0, -1); // En cas que miri cap a on es mou, es mou 
            return;
          } else {
            player1Position.value.direction = "left"; // Si no està mirant cap a on es mou, actualitza la mirada
          }
          break;
        case 's':
          if (player1Position.value.direction === "down") {
            movePlayer1(1, 0);
            return;
          } else {
            player1Position.value.direction = "down";
          }
          break;
        case 'd':
          if (player1Position.value.direction === "right") {
            movePlayer1(0, 1);
            return;
          } else {
            player1Position.value.direction = "right";
          }
          break;
        default:
          break;
      }
    } else {

      switch (key) {
        case 'w':
          if (player2Position.value.direction === "up") { //Comprova que el jugador estigui mirant cap a on es mou
            movePlayer2(-1, 0); // En cas que miri cap a on es mou, es mou 
            return;
          } else {
            player2Position.value.direction = "up"; // Si no està mirant cap a on es mou, actualitza la mirada
          }
          break;
        case 'a':
          if (player2Position.value.direction === "left") { //Comprova que el jugador estigui mirant cap a on es mou
            movePlayer2(0, -1); // En cas que miri cap a on es mou, es mou 
            return;
          } else {
            player2Position.value.direction = "left"; // Si no està mirant cap a on es mou, actualitza la mirada
          }
          break;
        case 's':
          if (player2Position.value.direction === "down") {
            movePlayer2(1, 0);
            return;
          } else {
            player2Position.value.direction = "down";
          }
          break;
        case 'd':
          if (player2Position.value.direction === "right") {
            movePlayer2(0, 1);
            return;
          } else {
            player2Position.value.direction = "right";
          }
          break;
        default:
          break;
      }

    }

    changeDirection();
  }

  async function changeDirection() {
    const player = JSON.parse(localStorage.getItem('player')).player_ID;
      try {
        if (player == game.value[0].players_games[0].player_ID) {
          await changeDirectionRequest(token, player1Position.value.direction);
        } else {
          await changeDirectionRequest(token, player2Position.value.direction);
          }
      } catch (error) {
        alert(error);
      }
  }

  // Mou el player1
  function movePlayer1(y, x) {
    player1Position.value.row += y; // Actualitza el valor y del player1
    player1Position.value.column += x; // Actualitza el valor x del player1

    if (player1Position.value.row > nRows.value - 1) { // Limitem que no sorti de la taula en x
      player1Position.value.row = nRows.value - 1;
    } else if (player1Position.value.row < 0) {
      player1Position.value.row = 0;
    }

    if (player1Position.value.column > nRows.value - 1) { // Limitem que no sorti de la taula en y
      player1Position.value.column = nRows.value - 1;
    } else if (player1Position.value.column < 0) {
      player1Position.value.column = 0;
    } 
  } 

  // Mou el player2
  function movePlayer2(y, x) {
    player2Position.value.row += y; // Actualitza el valor y del player1
    player2Position.value.column += x; // Actualitza el valor x del player1

    if (player2Position.value.row > nRows.value - 1) { // Limitem que no sorti de la taula en x
      player2Position.value.row = nRows.value - 1;
    } else if (player2Position.value.row < 0) {
      player2Position.value.row = 0;
    }

    if (player2Position.value.column > nRows.value - 1) { // Limitem que no sorti de la taula en y
      player2Position.value.column = nRows.value - 1;
    } else if (player2Position.value.column < 0) {
      player2Position.value.column = 0;
    } 
  } 
  // Decodifica el Up,right, elft , down
  function decodeDirection() {
    const player = JSON.parse(localStorage.getItem('player')).player_ID;
    if (player == game.value[0].players_games[0].player_ID) {
      switch (player1Position.value.direction) {
        case "up":
          return 180;
        case "right":
          return -90;
        case "down":
          return 0;
        case "left":
          return 90;
        default:
          return 0;
      }
    } else {
      switch (player2Position.value.direction) {
        case "up":
          return 180;
        case "right":
          return -90;
        case "down":
          return 0;
        case "left":
          return 90;
        default:
          return 0;
      }
    }
  }

  // Comprovem el estat dels jugadors en la partida
  function checkPlayerIn() {
    if (game.value.length > 0 && game.value[0].players_games && game.value[0].players_games.length === 1) {
      title.value = game.value[0].players_games[0].player_ID + ' VS ' + 'Waiting...';
    }

    if (game.value.length > 0 && game.value[0].players_games && game.value[0].players_games.length === 2) {
      title.value = game.value[0].players_games[0].player_ID + ' VS ' + game.value[0].players_games[1].player_ID;
    }
  }

  // Comprova si hi ha una peça en una cel·la
  function pieceInCell(row, cell, player) {
    if (player == 1) {
      if (player1Position.value.row === row && player1Position.value.column === cell) {
        return true;
      } 
    } else {
      if (player2Position.value.row === row && player2Position.value.column === cell) {
        return true;
      } 
    }
    return false;
  }

</script>


<template>
  <!-- Header del game mostra info dels player -->
  <header>
    <!-- Vida jugador 1 -->
    <PlayerLife :playerAux="player1"/> 
    <!-- Infonoms jugadors -->
    <div class="mid">
      <p>{{title}}</p>
    </div>
    <!-- Vida jugador 2 -->
    <PlayerLife :playerAux="player2"/>
  </header>
  <main>
    <!-- Estil board -->
    <div class="board"  tabindex="0">
      <!-- Bucle passant per les columnes -->
      <div v-for="(row, x) in nRows" :key="row" class="row">
        <!-- Bucle passant pintant les celles -->
        <div v-for="(cell, y) in nRows" :key="cell" :class="{ cell, even: (row + cell) % 2 === 0, odd: (row + cell) % 2 !== 0 }" :style="{width:50/nRows + 'vh', height:50/nRows + 'vh'}">
          <!-- Element player 1 pinta si esta aqui -->
          <div v-if="pieceInCell(x,y, 1)" class="player1" :style="{ top: player1Position.row / nRows + 'vh', left: player1Position.column / nRows + 'vh' , width:50/nRows + 'vh', height:50/nRows + 'vh', rotate: decodeDirection() + 'deg'}">
            <img src="@/assets/images/icons/robot1.png" alt="player1">
          </div>
          <!-- Element player 2 pinta si esta aqui -->
          <div v-if="pieceInCell(x,y, 2)" class="player2" :style="{ top: player2Position.row + 'vh', left: player2Position.column + 'vh' , width:50/nRows + 'vh', height:50/nRows + 'vh', rotate: decodeDirection() + 'deg'}">
            <img src="@/assets/images/icons/robot2.png" alt="player2">
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <p>Peus</p>
  </footer>
    
</template>

<style scoped>

  /* Estil header */
  header {
    width: 100%;
    height: 100%;
    background-color: #ABA9F8;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr; /* Definim tipus grid per tindre 3 camps */
    
  }

  /* Estil per del mig del header */
  .mid {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vh;
  } 
  

  /* Estil del cos*/
  main {
    width: 100%;
    height: 100%;
    background-color: #E1E2FE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Estil de la row */
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0vh;
  }

  /* Estil de la cella */
  .cell {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
  }

  /* Estil color cell parell */
  .even {
    background-color: #E1E2FE;
  }

  /* Estil color cell imparell */
  .odd {
    background-color: #291D49;
  }

  /* estil player 1 */
  .player1 {
    margin: 0%;
    padding: 0%;
    background-color: green; 
  }

  /* Estil imatge player 1 ocupa tot el espai */
  .player1 img {
    width: 100%;
    height: 100%;
  }

  /* Estil player 2 */
  .player2 {
    margin: 0;
    background-color: red; 
  }

  /* estil imatge player 2 */
  .player2 img {
    width: 100%;
    height: 100%;
  }

  /* estil footer */
  footer {
    width: 100%;
    height: 100%;
    background-color: #ABA9F8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
  