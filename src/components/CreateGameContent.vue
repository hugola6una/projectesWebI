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
        <form class="createContent" id="arena" @submit.prevent="handleSubmit">
          <p>Choose a name for the game</p>
          <input type="text" placeholder="Name" name="name">
          <div class="slideContainer">
            <p>Choose the size of the Arena (2-10)</p>
            <input type="range" min="2" max="10" value="6" class="slider" id="sizeSlider" name="size" @input="updateSizeValue">
            <p>Size:<span id="sizeValue">{{ size }}</span></p>
          </div>
          <div class="slideContainer">
            <p>Choose the HP of the players</p>
            <input type="range" min="1" max="1500" value="800" class="slider" id="hpSlider" name="hp" @input="updateHpValue">
            <p>Hp:<span id="hpValue">{{ hp }}</span></p> 
          </div>           
      </form>
      <button type="submit">CREATE</button>
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
        padding: 1vmax;
        max-height: 70vh;
    }

    .createContent h4{
        color: #362864;
        font-size: 2vmax;
        margin: 0;
    }
    .createContent p{
      margin: 0;
        width: 100%;
        color: #362864;
        font-size: 1vmax;
    }

  input {
    height: 4vmax;
    width: 35vmax;
    font-size: 2vmax;
    box-sizing: border-box;
    color: #362864;
    padding: 1vmax;
    border: none;
    border-bottom: 0.1em solid #633FC3;
    resize: none;
    margin-top: 1vmax;
  }

  .slider {
    -webkit-appearance: none;
    width: 35vmax;
    height: 2vmax;
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
.slideContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 3vmax;
}

  .slideContainer p {
    font-size: 1vmax;
    margin-top: 0.5vmax;
  }

  button {
      box-sizing: border-box;
      text-align: center;
      align-items: center;
      color: white;
      background-color: #362864;
      height: 5vmax;
      width: 25vmax;
      font-size: 3vmax;
      border: none;
      margin: 0;
  }

  @media (max-width: 850px) {
    .createContent {
      max-height: 60vh;
    }
  }

</style>
