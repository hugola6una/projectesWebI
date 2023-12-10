<script setup>
  // Librairies
  import {ref} from 'vue'
  import { useRouter } from 'vue-router'

  // Components
  import LogoLeftComponent from '@/components/LogoLeftComponent.vue'
  import ButtonWhiteComponent from '@/components/ButtonWhiteComponent.vue';
  import InputComponent from '@/components/InputComponent.vue';

  // Constants
  const router = useRouter();
  const strCreatePlayer = ref("CREATE PLAYER");
  const strLoginPlayer = ref("SIGIN");

  // Errors
  const errors = {
    name: ref({ value: false, message: '' }),
    password: ref({ value: false, message: '' }),
  };

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

  function loginPlayer() {
    router.push('/home')
    // localStorage.setItem('username', formData.name); // Guardar en local storage
    
  }

  // Other
  function updateModel (value, field)  {
    formData[field] = value;
    updateError(field);
  };

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

  const handleSubmit = () => {
    if (!formData.name) {
      errors.name.value = true;
      errors.name.message = "Missing Name";
    } 

    if (!formData.password) {
      errors.password.value = true;
      errors.password.message = "Missing Password";
    }

    // Agafa l'error en cas d'exitir
    if (Object.values(errors).some(error => error.value)) {
        return;
    }

    // ! Comprovar que si existeixi el jugador
    loginPlayer();
  };

</script>

<template>
  <LogoLeftComponent />
  <form class="player_login_form" @submit.prevent="handleSubmit">
    <h1>LOGIN</h1>
    <InputComponent inputType="text" inputPlaceholder="Name" :error="errors.name.value" :msgError="errors.name.message" @update:modelValue="(value) => updateModel(value, 'name')"/>
    <InputComponent inputType="password" inputPlaceholder="Password" :error="errors.password.value" :msgError="errors.password.message" @update:modelValue="(value) => updateModel(value, 'password')"/>

    <ButtonWhiteComponent :buttonText="strCreatePlayer" @click="navigateToCreateAPlayer"/>
    <input type="submit" :value="strLoginPlayer" class="submitPlayer">
  </form>
</template>

<style scoped>
  .player_login_form{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .player_login_form h1 {
    margin-bottom: 10vh;
    font-size: 3vmax;
    color: #362864;
  }

  button {
    margin-top: 10vh;
  }

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

  .submitPlayer:hover {
    background: #80547f;
    color: white;
  }

  

  @media (max-width: 900px) {
    .player_login_form {
      background-color: #362864;
    }

    .player_login_form h1 {
      margin-bottom: 2vh;
      font-size: 3vmax;
      color: white;
    }

    button {
      margin-top: 6vh;
    }

    .submitPlayer {
      margin-bottom: 4vh;
      background: white;
      color: #362864;
    }
  }
</style>