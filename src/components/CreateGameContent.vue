<script>
</script>

<template>
    <div class="createContent">

        <h4>Customize your game</h4>
        <p>Choose a name for the game</p>
        <input type="text" placeholder="Name">
        <p>Choose the size of the Arena (2-10)</p>
        <input type="range" min="2" max="10" value="6" class="slider" id="sizeSlider">
        <p>Size:<span id="sizeValue"></span></p>
        <p>Choose the HP of the players</p>
        <input type="range" min="1" max="1500" value="800" class="slider" id="hpSlider">
        <p>Hp:<span id="hpValue"></span></p>
        <button>CREATE</button>
    </div>
</template>

<script>
    export default {
        mounted() {
            var sizeSlider = document.getElementById("sizeSlider");
            var sizeValue = document.getElementById("sizeValue");
            var hpSlider = document.getElementById("hpSlider");
            var hpValue = document.getElementById("hpValue");

            sizeValue.textContent = sizeSlider.value;
            hpValue.textContent = hpSlider.value;

            sizeSlider.oninput = function() {
                sizeValue.textContent = this.value;
            }

            hpSlider.oninput = function() {
                hpValue.textContent = this.value;
            }
        }
    }
</script>

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
        max-height: 100vh;
    }

    .createContent h4{
        color: #362864;
        font-size: 2.5vmax;
    }
    .createContent p{
        color: #362864;
        font-size: 1.5vmax;
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
  width: 30vh;
  height: 15px;
  border-radius: 5px;   
  background: #EFEFFE;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #362864;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
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
    @media (max-width: 800px) {
    .createContent {
        max-height: 60vh;
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

    button {
    color: white;
    background-color: #362864;
    height: 5vmax;
    width: 25vmax;
    font-size: 3vmax;
    border: none;
    margin-top: 5vh;
}
}
</style>
