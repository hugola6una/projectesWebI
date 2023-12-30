<script setup>
  // Librairies
  import {ref, defineEmits} from 'vue'
  import { useRouter } from 'vue-router'
  import { loginRequest } from '@/services/api/PlayerRequest.js'

  // Components
  import LogoLeftComponent from '@/components/LogoLeftComponent.vue'
  import ButtonWhiteComponent from '@/components/ButtonWhiteComponent.vue';
  import InputComponent from '@/components/InputComponent.vue';
  import ErrorSpan from '@/components/ErrorSpan.vue';

  // Constants
  const router = useRouter();
  const emit = defineEmits(['havePlayer']);
  // String constants
  const strCreatePlayer = ref("CREATE PLAYER");
  const strLoginPlayer = ref("SIGIN");

  // Errors
  const errors = {
    name: ref({ value: false, message: '' }), // Error en el nom
    password: ref({ value: false, message: '' }), // Error en el password
    global: ref({ value: false, message: '' }), // Error en les request a la API
  };

  // Iniciañitza els errors
  Object.values(errors).forEach(error => {
      error.value = false;
      error.message = '';
    });

  // Variables
  const formData = {
    name: ref(""),
    password: ref(""),
  };

  // Inicialitza
  formData.name = "";
  formData.password = "";
  
  // Fucntions
  // Navigation
  function navigateToCreateAPlayer() {
    router.push('/create-player')
  }

  // Navega cap a login guardant el player louejat
  function loginPlayer(data) {
    const player = { // Creem player object
      player_ID: data.player_ID,
      xp: data.xp,
      level: data.level,
      coins: data.coins,
      token: data.token,
      img: data.img,
    }
    localStorage.setItem('player', JSON.stringify(player)); // Guardem plaeyr info a localstorage
    emit('havePlayer'); // Emitim event de login
  }

  // Other
  // Modifica el mdoel actual amb nous valors mostrant els errors
  function updateModel (value, field)  {
    formData[field] = value;  // Actualitza el model del correspoennt camp
    updateError(field);
  };

  // Seelcciona error a mostra en fució del camp que correspon
  function updateError (field) {
    switch (field) {
      case 'name':
        errors.name.value = false;
        break;
      case 'password':
        errors.password.value = false;
        break;
      default:
      break;
    }
  };

  // Funció encarregada de fer el submit del formulari
  async function handleSubmit () {  // Fem async per esperar la resposta de la API
    errors.global.value = false; // Reset del error global 

    // Comprova camp no buit
    if (!formData.name) {
      errors.name.value = true;
      errors.name.message = "Missing Name";
    } 

    // Comprova camp no buit
    if (!formData.password) {
      errors.password.value = true;
      errors.password.message = "Missing Password";
    }

    // Agafa l'error en cas d'exitir
    if (Object.values(errors).some(error => error.value)) {
        return;
    }

    // Fem peticio de login
    try {
      const data = await loginRequest(formData.name, formData.password); // Espera resposta de la API
      loginPlayer(data); // Logueja usuari
    } catch (error) {
      // Captura l'error en cas de error a la API
      errors.global.value = true;
      errors.global.message = error.message;
    } 
  };

</script>

<template>
  <!-- Component aside amb el logo -->
  <LogoLeftComponent />
  <!-- Formulari de inici de sessió del login -->
  <form class="player_login_form" @submit.prevent="handleSubmit">
    <h1>LOGIN</h1>
    <!-- Compnents de Input per el login -->
    <InputComponent inputType="text" inputPlaceholder="Name" :error="errors.name.value" :msgError="errors.name.message" @update:modelValue="(value) => updateModel(value, 'name')"/>
    <InputComponent inputType="password" inputPlaceholder="Password" :error="errors.password.value" :msgError="errors.password.message" @update:modelValue="(value) => updateModel(value, 'password')"/>
    
      <!-- Missatge error n cas d'haver-hi -->
    <ErrorSpan v-if="errors.global.value" :message="errors.global.message"/>
    
    <!-- Button per a crear un nou player -->
    <ButtonWhiteComponent :buttonText="strCreatePlayer" @click="navigateToCreateAPlayer"/>
    <!-- Butó per a fer login -->
    <input type="submit" :value="strLoginPlayer" class="submitPlayer">
  </form>
</template>

<style scoped>
  /* Format del form */
  form {
    height: 100%;
    width: 100%;
    display: flex; /* Tipus flex per a tindre columnes i inserir contigut un sota l'altre */
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  /* Estil del titol del formulari */
  form h1 {
    margin-bottom: 10vh;
    font-size: 3vmax;
    color: #362864;
  }

  /* Estil dels butons del formulari */
  button {
    margin-top: 10vh;
  }

  /* Input de Submit del formulari */
  .submitPlayer {
    background: #362864;
    color: white;
    border: 0.1vh solid white;
    width: 35vh;
    height: 8vh;
    font-size: 2.5vh;
    margin-top: 2vh;
    box-sizing: border-box;
    padding: 1vh;
  }

  /* Animació en cas de hover de subtmit button */
  .submitPlayer:hover {
    background: #80547f;
    color: white;
  }

  
  /* Estil per a telefon */
  @media (max-width: 900px) {
    /* Esil nou del fons del formulari */
    form {
      background-color: #362864;
    }

    /* Mida reduida per a telefons en el titol 1 */
    form  h1 {
      margin-bottom: 2vh;
      font-size: 3vmax;
      color: white;
    }

    /* Mida butó reduida per a mobils */
    button {
      margin-top: 6vh;
    }

    /* Mida reduida per el submit button */
    .submitPlayer {
      margin-bottom: 4vh;
      background: white;
      color: #362864;
    }
  }
</style>