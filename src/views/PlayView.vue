<script>
  import router from '../router';

  export default {
  data() {
    return {
      piece: {x: 0, y: 0},
      name: '',
      size: '',
      hp: '',
      board: [],
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
      const step = 50; // Adjust the step size as needed
      switch (event.key) {
        case 'w':
          this.piece.x -= step;
          break;
        case 's':
          this.piece.x += step;
          break;
        case 'a':
          this.piece.y -= step;
          break;
        case 'd':
          this.piece.y += step;
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
      <div class="body"></div>
      <div class="top"></div>
      <div class="arenaContainer">
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
      <div class="bottom"></div>
    </div>
  </template>

<style scoped>

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

  .container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr 5fr 1fr;
    align-items: center;
    height: 100vh; 
  }
  .body {
    height: 100%;
    width: 100%;
    background: #362864;
    display: grid;
    grid-template-rows: 1fr 8fr;
    grid-column: 1;
    grid-row: 1 / 4;
  }

  .arenaContainer {
    background-color: #CACAFB;
    height: 100%;
    grid-row: 2;
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .top {
    background-color: #ABA9F8;
    height: 100%;
    grid-row: 1;
    grid-column: 2;
  }

  .bottom {
    background-color: #ABA9F8;
    height: 100%;
    grid-row: 3;
    grid-column: 2;
  }

  .center {
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
  }

  .gameTitle {
    margin: 0;
    font-size: 4vmax;
  }

  .gameSubTitle {
    margin: 0;
    font-size: 3vmax;
  }

  .bPlay {
    margin-top: 3vmax;
    border-radius: 0px;
    border: none;
    width: 25vmax;
    height: 7vmax;
    color: #362864;
    justify-content: center;
    align-items: center;
    font-size: 4vmax;
  }

  .bPlay:hover {
    background: #80547f;
    color: white;
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
  