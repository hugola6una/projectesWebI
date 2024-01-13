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
      // post cap a la arena
      const name = document.getElementsByName("name")[0].value;
      const size = document.getElementsByName("size")[0].value;
      const hp = document.getElementsByName("hp")[0].value;
      
      this.$router.push({
        name: 'play',
        params: { name, size, hp },
      });
    },

    handleMouseOver() {
      // Cambiar el color cuando el ratón pasa por encima
      document.querySelector('buttonCreate').style.backgroundColor = '#634864'; 
    },

    handleMouseOut() {
     // Restaurar el color cuando el ratón sale
      document.querySelector('buttonCreate').style.backgroundColor = '#362864'; 
    },

    // funcions per el slider
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
  <!-- Contingut de la pagina createGame -->
    <article class="createContent">
       <!-- Contingut del formulari per demanar les caracteristiques del game -->
        <form id="arena" @submit.prevent="handleSubmit">
          <h4>Customize your game</h4>
           <!-- Demana nom -->
          <p>Choose a name for the game</p>
          <input type="text" placeholder="Name" name="name">
          <!-- Demana mida amb slider -->
          <p>Choose the size of the Arena (2-10)</p>
          <input type="range" min="2" max="10" value="6" class="slider" id="sizeSlider" name="size" @input="updateSizeValue">
          <p>Size:<span id="sizeValue">{{ size }}</span></p>
          <!-- Demana HP amb slider -->
          <p>Choose the HP of the players</p>
          <input type="range" min="1" max="1500" value="800" class="slider" id="hpSlider" name="hp" @input="updateHpValue">
          <p>Hp:<span id="hpValue">{{ hp }}</span></p> 
          <!-- Boto per crear -->
          <button  @mouseover="handleMouseOver" @mouseout="handleMouseOut" type="submit" class="createButton">CREATE</button>
      </form>
    </article>
</template>

<style scoped>
 /* Estil del cotenidor principal */
    article {
        width: 100%;
        display: flex;
        flex-direction: column; /* Tipus flex per a emprar display en columna */
        background-color: white;
        justify-content: center;
        align-items: center;
    }
 /* Estil del formulari  */
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
    .createContent h4{
        color: #362864;
    }
    .createContent p{
      font-size: 2vh;
        color: #362864;
    }
 /* Estil del input */
    input {
        height: 4vmax;
        width: 35vmax;
        font-size: 2vmax;
        box-sizing: border-box;
        color: #362864;
        border: none;
        border-bottom: 0.1em solid #633FC3;
    }

     /* Estil del slider */
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

  button {
      color: white;
      background-color: #362864;
      height: 5vmax;
      width: 20vmax;
      font-size: 3vmax;
      border: none;
    }

     /* Estil del boto create */
    .createButton {
      color: white;
      background-color: #362864;
      height: 5vmax;
      width: 20vmax;
      font-size: 3vmax;
      border: none;
    }
    .createButton:hover {
    background-color: #634864; 
    }
    
    @media (max-width: 900px) {
      /* Estil per dimensions més petites */
    .createContent {
        max-height: 50vh;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
      font-size: 1.5vh;
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
    }
  .createContent h4{
        color: #362864;
        font-size: 2.5vmax;
    }
}
</style>
