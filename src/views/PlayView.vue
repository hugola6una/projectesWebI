<script setup>
import { ref , onMounted} from 'vue';
//import ItemCollection from '@/components/ItemCollection.vue';

// API request
import { getCurrentGame } from '@/services/api/GamesRequest.js';
const currentScreen = ref('joc');
const changeScreen = () => {
    currentScreen.value = currentScreen.value === 'joc' ? 'howto' : 'joc';
};

onMounted(async() => {
    getGame();
    generateBoard();
  });
const game = ref([]);
    // Funció per obtenirel joc actual del jugador de la API
    async function getGame() {
        const token = JSON.parse(localStorage.getItem('player')).token
        try {
            game.value = (await getCurrentGame(token));

        } catch (error) {
            console.log(error);
        }
      }

const board = ref([]); 
const generateBoard = () => {
    const boardSize = parseInt(game.value.size);
    const newBoard = [];

    for (let i = 0; i < boardSize; i++) {
        const row = [];
        for (let j = 0; j < boardSize; j++) {
            const color = (i + j) % 2 === 0 ? 'white' : 'black';
            row.push({ color });
        }
        newBoard.push(row);
    }

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = newBoard[i][j];
            cell.piece = null;
            cell.coordinates = { x: i, y: j };  
        }
    }

    board.value  = newBoard;
};

const x = ref();
const y = ref();

const handleKeyPress = (event) => {
    const step = 50;
    switch (event.key) {
        case 'w':
            if (x.value !== 0) {
                x.value -= step;
            }
            break;
        case 's':
            if (x.value !== ((parseInt(game.value.size) - 1) * step)) {
                x.value += step;
            }
            break;
        case 'a':
            if (y.value !== 0) {
                y.value -= step;
            }
            break;
        case 'd':
            if (y.value !== ((parseInt(game.value.size) - 1) * step)) {
              y.value += step;
            }
            break;
    }
};

const pieceIsInCell = (rowIndex, cellIndex) => {
    return x.value / 50 === rowIndex && y.value / 50 === cellIndex;
};

</script>

<template>
    <div class="container">
        <button class="show-content-button" @click="changeScreen()">
        {{ currentScreen === 'joc' ? 'How to Play' : 'Back to Game' }}
        </button>
      <div class="top">

        <img src="..\assets\images\icons\playerdefault.png" class="profile1">
        <div class="hp1">
            <div class="hpContainer">
                <div class="skills level1">1200xp</div>
            </div>
        </div>
        <div class="hp2">
            <div class="hpContainer">
                <div class="skills level2">1500xp</div>
            </div>
        </div>
        <img src="..\assets\images\icons\playerdefault.png" class="profile2">
        <div class="playerText">Player1 VS Player2</div>
      </div>
      <div class="arena-container" v-show="currentScreen === 'joc'">
        <div class="arena" @keydown="handleKeyPress" tabindex="0">
             <div v-for="(row, rowIndex) in board" :key="rowIndex" class="arena-row">
                <div v-for="(cell, cellIndex) in row" :key="cellIndex" :class="['arena-cell', cell.color]">
                    <img v-if="pieceIsInCell(rowIndex, cellIndex)" src="..\assets\images\icons\robot1.png"
                    :style="{ left: cellIndex * 50 + 'px', top: rowIndex * 50 + 'px', width: '100%', height: '100%' }"/> 
            
                </div>
            </div>
        </div>
      </div>
      <div class="arenaContainer" v-show="currentScreen === 'howto'">
        <div>
            <h1>How to Play?</h1>
            <p>Use w, a, s, d to move</p>
        </div>
    </div>
      <div class="bottom">
        <router-link to="/home" class="link">
          <button class="bLogout">
          <img src="../assets/images/icons/logout_9965863.png" class="profile1">
        </button>
        </router-link>
    
        <div class="bAttacks">
         
        </div>
      </div>
    </div>
  </template>

<style scoped>

h1 {
    text-align: center;
    font-size: 4vh;
}

p {
    text-align: center;
    font-size: 2vh;
}
.profile1 {
    height: 7vmax;
  width: 7vmax;
  grid-column: 1;
  grid-row: 1;
  margin: 1vh;
}
.playerText {
  grid-column: 1 / span 4; 
  grid-row: 2;
  text-align: center;
  color: white;
  font-size: 2vmax;
  margin-top: 1vh; 
}
.level1 {width: 90%; background-color: #291D49;}
.level2 {width: 100%; background-color: #291D49;}
.hp1 {
    height: 100%;
    width: 100%;
    grid-column: 2;
    grid-row: 1;
    display: flex;
}

.hpContainer {
    margin-top: 2.5vh;
    width: 90%;
    height: 3.5vh;
    background-color: white;
    display: flex;
    align-items: center;
}

.title {
    margin-left: 2vh;
    grid-row: 2;
    grid-column: 1 / 4;
    width: 100%;
    height: 100%;
}

.skills {
  color: white;
  font-size: 1.5vmax;
  text-align: right;
}
.hp2 {
    height: 100%;
  width: 100%;
    grid-column: 3;
  grid-row: 1;
  display: flex;
}

.profile2 {
    height: 7vmax;
  width: 7vmax;
  grid-column: 4;
  grid-row: 1;
  margin: 1vh;
}


.arena {
  display: grid;
  grid-template-columns: repeat(boardSize, 1fr);
  grid-template-rows: repeat(boardSize, 1fr);
  grid-gap: 2px;
}

.arena:focus {
  outline: 0.1em solid #383838;
}

.arena-row {
  display: flex;
}

.arena-cell {
  height: 7vh;
  width: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.arena-cell img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.white {
  background-color: #E1E2FE;
}

.black {
  background-color: #291D49;
}

.show-content-button {
  margin: 1vmax;
  font-size: 1vmax;
  height: 2vmax;
  border: none;
}

  .container {
    display: grid;
    grid-template-rows: 1fr 5fr 1fr;
    align-items: center;
    height: 100vh; 
  }

  .arenaContainer {
    background-color: #CACAFB;
    height: 100%;
    grid-row: 2;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .top {
    background-color: #ABA9F8;
    height: 100%;
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .bottom {
    background-color: #ABA9F8;
    height: 100%;
    grid-row: 3;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .bLogout {
    justify-self: start;
    display: flex;
    box-sizing: border-box;
    height: 3vmax;
    width: 4vmax;
    margin-left: 1vmax;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .bLogout img {
    width: 2vmax;
    height: 2vmax;
  }

  .bAttacks {
    display: flex;
    align-self: center;
    justify-self: center;
  }


  @media (max-width: 820px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 5fr 1fr;
    }

    .body,
    .top,
    .bottom,
    .arenaContainer {
      grid-column: 1;
    }

    .arena-cell {
        height: 5vh;
        width: 5vh;
    }

}
  
</style>