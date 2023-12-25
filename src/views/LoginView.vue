<script setup>
  // Librairies
  import {ref} from 'vue'
  import { useRouter } from 'vue-router'
  import { loginRequest } from '@/services/api.js'

  // Components
  import LogoLeftComponent from '@/components/LogoLeftComponent.vue'
  import ButtonWhiteComponent from '@/components/ButtonWhiteComponent.vue';
  import InputComponent from '@/components/InputComponent.vue';
  import ErrorSpan from '@/components/ErrorSpan.vue';

  // Constants
  const router = useRouter();
  const strCreatePlayer = ref("CREATE PLAYER");
  const strLoginPlayer = ref("SIGIN");

  // Errors
  const errors = {
    name: ref({ value: false, message: '' }),
    password: ref({ value: false, message: '' }),
    global: ref({ value: false, message: '' }),
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

  function loginPlayer(data) {
    localStorage.setItem('token', data.token); // Guardar en local storage
    router.push('/home') 
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

  async function handleSubmit () {
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

    try {
      const data = await loginRequest(formData.name, formData.password);
      loginPlayer(data);
    } catch (error) {
      errors.global.value = true;
      errors.global.message = error.message;
      console.log(error);
    }

    
    
  };

</script>

<template>
  <LogoLeftComponent />
  <form class="player_login_form" @submit.prevent="handleSubmit">
    <h1>LOGIN</h1>
    <!-- Compnents de Input per el login -->
    <InputComponent inputType="text" inputPlaceholder="Name" :error="errors.name.value" :msgError="errors.name.message" @update:modelValue="(value) => updateModel(value, 'name')"/>
    <InputComponent inputType="password" inputPlaceholder="Password" :error="errors.password.value" :msgError="errors.password.message" @update:modelValue="(value) => updateModel(value, 'password')"/>
    
      <!-- Missatge error n cas d'haver-hi -->
    <ErrorSpan v-if="errors.global.value" :message="errors.global.message"/>
    
    <ButtonWhiteComponent :buttonText="strCreatePlayer" @click="navigateToCreateAPlayer"/>
    
    <input type="submit" :value="strLoginPlayer" class="submitPlayer">
  </form>
</template>

<style scoped>
  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  form h1 {
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