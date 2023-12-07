<script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  // Componentes
  import LogoLeftComponent from '@/components/LogoLeftComponent.vue';
  import ButtonWhiteComponent from '@/components/ButtonWhiteComponent.vue';
  import InputComponent from '@/components/InputComponent.vue';

  // Variables
  const router = useRouter();
  const strCreatePlayer = ref('CREATE');
  const strHaveAPlayer = ref('I HAVE A PLAYER');

  // Variables de error
  const errors = {
    name: ref({ value: false, message: '' }),
    password: ref({ value: false, message: '' }),
    passwordConfirm: ref({ value: false, message: '' }),
  };

  Object.values(errors).forEach(error => {
      error.value = false;
      error.message = '';
    });

  const formData = {
    name: ref(""),
    password: ref(""),
    passwordConfirm: ref(""),
    imgPath: ref("src/assets/images/addProfilePhoto.png"),
  };

  // Inicialitza
  formData.name = "";
  formData.password = "";
  formData.passwordConfirm = "";

  // Funciones
  // Navigation
  const navigateToHaveAPlayer = () => {
    router.push('/login-player');
  };

  // Update
  function updateModel (value, field)  {
    console.log(value, field);
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
      case 'passwordConfirm':
        errors.passwordConfirm.value = false;
        break;
      default:
      break;
    }
  };

  const createPlayer = () => {
    // localStorage.setItem('username', formData.name); // Guardar en local storage
    router.push('/home');
  };

  const handleSubmit = () => {
      // Comprova camp no buit
      if (!formData.name) {
        errors.name.value = true;
        errors.name.message = "Missing Name";
      } 

      // Comprova camp no buit
      if (formData.passwordConfirm !== formData.password) {
        errors.password.value = true;
        errors.passwordConfirm.value = true;
        errors.password.message = "Passwords don't match";
        errors.passwordConfirm.message = "Passwords don't match";
      }

      // Comprova camp no buit
      if (!formData.password) {
        errors.password.value = true;
        errors.password.message = "Missing Password";
      }

      // Comprova camp no buit
      if (!formData.passwordConfirm) {
        errors.passwordConfirm.value = true;
        errors.passwordConfirm.message = "Missing Password Confirmation";
      }

      // Agafa l'error en cas d'exitir
      if (Object.values(errors).some(error => error.value)) {
        return;
      }
      // ! Comprovar que no existeixi el jugador
      createPlayer();
  };
  // Other

</script>

<template>
    <LogoLeftComponent />
    <form class="player_cretion_form" @submit.prevent="handleSubmit">
      <h1>CREATE PLAYER</h1>
      <img :src="formData.imgPath.value" alt="Logo" class="addProfilePhoto"><!-- ! Falta fer afigr etc etc -->
      
      <InputComponent inputType="text" inputPlaceholder="Name" :error="errors.name.value" :msgError="errors.name.message" @update:modelValue="(value) => updateModel(value, 'name')"/>
      <InputComponent inputType="password" inputPlaceholder="Password" :error="errors.password.value" :msgError="errors.password.message" @update:modelValue="(value) => updateModel(value, 'password')"/>
      <InputComponent inputType="password" inputPlaceholder="Confirm Password" :error="errors.passwordConfirm.value" :msgError="errors.passwordConfirm.message" @update:modelValue="(value) => updateModel(value, 'passwordConfirm')"/>
      
      <ButtonWhiteComponent :buttonText="strHaveAPlayer" @click="navigateToHaveAPlayer"/>
      <input type="submit" :value="strCreatePlayer" class="submitPlayer">
    </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  form h1 {
    font-size: 4vh;
    color: #362864;
  }

  form img {
    width: 20vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  button {
    margin-top: 8vh;
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

    form {
      background-color: #362864;
    }

    form h1 {
      display: none;
    }


    form img {
      margin-top: 4vh;
      width: 10vh;
    }

    button {
      margin-top: 4vh;
    }

    .submitPlayer {
      background-color: white;
      color: #362864;
      margin-bottom: 12vh;
    }
    
  }
</style>