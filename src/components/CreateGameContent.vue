<script setup>
  import { ref} from 'vue';
  // Libraries
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function navigateToPlay() {
    router.push('/play');
  }

  // Componentes
  import ErrorSpan from '@/components/ErrorSpan.vue';
  import InputComponent from '@/components/InputComponent.vue';
  import { createGameRequest} from '@/services/api/GamesRequest.js';

    let size = ref(6);
    let hp = ref(15);

    // Variables de error
    const errors = {
      name: ref({ value: false, message: '' }), // Error en el nom
      global: ref({ value: false, message: '' }), // Errors globals normalment en la request de la API
    };

    // Inciialitza els errors
    Object.values(errors).forEach(error => {
      error.value = false;
      error.message = '';
    });

    // Variables del formulari 
    const formData ={
        name: ref('')
      };
  //Inicialitza
  formData.name = "";

  // Actualitza el model i els seus errors
  function updateModel (value, field)  {
      formData[field] = value;
      updateError(field);
    };

    // Actualitza els errors en funció del camp respectiu
  function updateError (field) {
    switch (field) {
      case 'name':
        errors.name.value = false;
        break;
      default:
      break;
    }
  };

    // funcions per el slider
    function updateSizeValue(event) {
      size.value = event.target.value;
    }
    function updateHpValue(event) {
      hp.value = event.target.value;
    }

    
// Funció encarregada de fer el submit del formulari i del resgitre del nou usuari
async function handleSubmit () {
    errors.global.value = false; // Reset del error global 

    // Comprova camp no buit
    if (!formData.name) {
      errors.name.value = true;
      errors.name.message = "Missing Name";
    } 

    if (formData.name.length > 21) {
      errors.name.value = true;
      errors.name.message = "The name must have less than 21 characters";
    } 

    // Agafa l'error en cas d'exitir
    if (Object.values(errors).some(error => error.value)) {
      return;
    }

    // Fem peticio de registre + login per obtindre el token
    try {
      const token = JSON.parse(localStorage.getItem('player')).token
      await createGameRequest(token, formData.name, parseInt(size.value), parseInt(hp.value));
      //createGame(data); // Usuari creat
      navigateToPlay();
    } catch (error) {
      // Captura l'error en cas de error a la API
      errors.global.value = true;
      errors.global.message = error.message;
    }
  };
</script>

<template>
  <!-- Contingut de la pagina createGame -->
    <article class="createContent">
      <!-- Contingut del formulari per demanar les caracteristiques del game -->
      <form @submit.prevent="handleSubmit">
        <h4>Customize your game</h4>
          <!-- Demana nom -->
        <p>Choose a name for the game</p>
        <InputComponent inputType="text" inputPlaceholder="Name" :error="errors.name.value" :msgError="errors.name.message" @update:modelValue="(value) => updateModel(value, 'name')"/>
        <!-- Demana mida amb slider -->
        <p>Choose the size of the Arena (2-10)</p>
        <input type="range" min="2" max="10" value="6" class="slider" id="sizeSlider" name="size" @input="updateSizeValue">
        <p>Size:<span id="sizeValue">{{ size }}</span></p>
        <!-- Demana HP amb slider -->
        <p>Choose the HP of the players</p>
        <input type="range" min="15" max="10000" value="50" class="slider" id="hpSlider" name="hp" @input="updateHpValue">
        <p>Hp:<span id="hpValue">{{ hp }}</span></p> 

          <!-- Boto per crear -->
          <button type="submit" class="createButton">CREATE</button>
      </form>
      <!-- Mensaje de error en caso de haber -->
          <ErrorSpan v-if="errors.global.value" :message="errors.global.message" />

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
