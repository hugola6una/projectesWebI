<script setup>
import { ref } from 'vue';  // Per refenciar variables
import ItemCollection from '../components/ItemCollection.vue';
const currentScreen = ref('joc');
const changeScreen = () => {
    currentScreen.value = currentScreen.value === 'joc' ? 'howto' : 'joc';
};
</script>
<script>
  export default {
  data() {
    return {
      piece: {x: 0, y: 0},
      name: '',
      size: '',
      hp: '',
      board: [],
      isLargeScreen: window.innerWidth >= 820,
    };
  },
  mounted() {
    this.name = this.$route.params.name;
    this.size = this.$route.params.size;
    this.hp = this.$route.params.hp;
    this.generateBoard();
  },

  methods: {
    generateBoard() {
      const boardSize = parseInt(this.size);
      const newBoard = [];

      for (let i = 0; i < boardSize; i++) {
        const row = [];
        for (let j = 0; j < boardSize; j++) {
          const color = (i + j) % 2 === 0 ? 'white' : 'black';
          row.push({ color });
        }
        newBoard.push(row);
      }

      this.board = newBoard;
    },

    handleKeyPress(event) {
      const step = 50;
      switch (event.key) {
        case 'w':
            if (this.piece.x != 0) {
                this.piece.x -= step;
            }
          break;
        case 's':
            if (this.piece.x != ((parseInt(this.size)-1)*step)) {
            this.piece.x += step;
            }
          break;
        case 'a':
            if (this.piece.y != 0) {
            this.piece.y -= step;
            }
            break;
        case 'd':
            if (this.piece.y != ((parseInt(this.size)-1)*step)) {
            this.piece.y += step;
            }
          break;
      }
      this.$forceUpdate();
    },

    pieceIsInCell(rowIndex, cellIndex) {
        return this.piece.x / 50 === rowIndex && this.piece.y / 50 === cellIndex;
    },
  },
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
      <div class="arenaContainer" v-show="currentScreen === 'joc'">
        <div class="arena" @keydown="handleKeyPress" tabindex="0" >
        <div v-for="(row, rowIndex) in board" :key="rowIndex" class="arena-row">
          <div
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            :class="['arena-cell', cell.color]"
          >
          <img v-if="pieceIsInCell(rowIndex, cellIndex)" src="..\assets\images\icons\robot1.png"
          :style="{ x: piece.x, y: piece.y , width: '100%', height: '100%' }"
        />
            
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
        <ItemCollection />
        <ItemCollection />
        <ItemCollection />
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
  grid-column: 1 / span 4;  /* Ocupa dos columnas, comenzando desde la tercera columna */
  grid-row: 2;  /* Está en la segunda fila */
  text-align: center;  /* Centra el texto horizontalmente */
  color: white;
  font-size: 2vmax;
  margin-top: 1vh;  /* Ajusta el espacio superior según sea necesario */
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
  color: white; /* White text color */
  font-size: 2vh;
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
  grid-template-columns: repeat(${boardSize}, 1fr);
  grid-template-rows: repeat(${boardSize}, 1fr);
  grid-gap: 2px;
}

.arena-row {
  display: flex;
}

.arena-cell {
  height: 7vh;
  width: 7vh;
}

.white {
  background-color: #E1E2FE;
}

.black {
  background-color: #291D49;
}

.show-content-button {
  /* Estilo del botón para mostrar el contenido oculto */
  margin: 10px;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
  