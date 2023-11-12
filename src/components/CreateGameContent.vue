<script>
export default {
  data() {
    return {
      name: '',
      size: 6,
      hp: 800,
    };
  },
  methods: {
    handleSubmit() {
      const name = document.getElementsByName("name")[0].value;
      const size = document.getElementsByName("size")[0].value;
      const hp = document.getElementsByName("hp")[0].value;
      
      this.$router.push({
        name: 'play',
        params: { name, size, hp },
      });
    },

    updateSizeValue(event) {
      this.size = event.target.value;
    },
    updateHpValue(event) {
      this.hp = event.target.value;
    },
  },
};
</script>

<template>
    <div class="createContent">

        <h4>Customize your game</h4>
        <form id="arena" @submit.prevent="handleSubmit">
          <p>Choose a name for the game</p>
          <input type="text" placeholder="Name" name="name">
          <p>Choose the size of the Arena (2-10)</p>
          <input type="range" min="2" max="10" value="6" class="slider" id="sizeSlider" name="size" @input="updateSizeValue">
          <p>Size:<span id="sizeValue">{{ size }}</span></p>
          <p>Choose the HP of the players</p>
          <input type="range" min="1" max="1500" value="800" class="slider" id="hpSlider" name="hp" @input="updateHpValue">
          <p>Hp:<span id="hpValue">{{ hp }}</span></p> 
          <button type="submit">CREATE</button>
      </form>
    </div>
</template>

<style scoped>
    .createContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 1vmax;
        background-color: white;
        justify-content: center;
        text-align: center;
        align-items: center;
        max-height: 60vh;
        padding: 4vmax;
    }

    .createContent h4{
      margin-top: 6vmax;
        color: #362864;
        font-size: 2.5vmax;
    }
    .createContent p{
        color: #362864;
        font-size: 1vmax;
        margin: 0.3%;
    }

  input {
    margin-top: 2vmax;
    height: 4vmax;
    width: 35vmax;
    font-size: 2vmax;
    box-sizing: border-box;
    color: #362864;
    padding: 1vmax;
    border: none;
    margin-bottom: 1vh;
    border-bottom: 0.1em solid #633FC3;
  }

  .slider {
  -webkit-appearance: none;
  appearance: none;
  width: 35vmax;
  height: 3vmax;
  border-radius: 5vmax;   
  background: #EFEFFE;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  padding: 1vmax;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
    appearance: none;
    width: 2vmax;
    height: 2vmax;
    border-radius: 1vmax; 
    background: #362864;
    cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 35vmax;
    height: 25vmax;
    border-radius: 1vmax;
    background: #362864;
    cursor: pointer;
}
  .inputs {
    margin-top: 2vmax;
  }

  button {
    color: white;
    background-color: #362864;
    height: 5vmax;
    width: 20vmax;
    font-size: 3vmax;
    border: none;
    margin-top: 3vh;
    }
    
    @media (max-width: 900px) {
    .createContent {
        max-height: 50vh;
    }

    .inputs {
      margin-top: 0;
    }

    input {
      background: none;
      width: 35vmax;
      height: 2vmax;
      font-size: 1.5vmax;
      color: #362864;
      border: none;
      border-bottom: 0.1em solid white;
    }

    p {
      font-size: 1vmax;
    }

    h4 {
      font-size: 2vmax;
    }

    button {
      color: white;
      background-color: #362864;
      height: 3vmax;
      width: 25vmax;
      font-size: 2vmax;
      border: none;
      margin-bottom: 6vmax;
    }
  .createContent h4{
      margin-top: 6vmax;
        color: #362864;
        font-size: 2.5vmax;
    }
}
</style>
