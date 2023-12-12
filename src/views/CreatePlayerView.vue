<script setup>
  import { useRouter } from 'vue-router';
  import { ref, reactive, defineEmits } from 'vue';


  // Componentes
  import LogoLeftComponent from '@/components/LogoLeftComponent.vue';
  import ButtonWhiteComponent from '@/components/ButtonWhiteComponent.vue';
  import InputComponent from '@/components/InputComponent.vue';
  import ErrorSpan from '@/components/ErrorSpan.vue';

  // Variables
  const router = useRouter();
  const emit = defineEmits();
  const strCreatePlayer = ref('CREATE');
  const strHaveAPlayer = ref('I HAVE A PLAYER');

  // Variables de error
  const errors = {
    name: ref({ value: false, message: '' }),
    password: ref({ value: false, message: '' }),
    passwordConfirm: ref({ value: false, message: '' }),
    global: ref({ value: false, message: '' }),
  };

  Object.values(errors).forEach(error => {
      error.value = false;
      error.message = '';
    });

  const formData = reactive({ // Use of reactive to update the DOM
    name: ref(''),
    password: ref(''),
    passwordConfirm: ref(''),
    imgPath: ref(''),
  });

  // Inicialitza
  formData.name = "";
  formData.password = "";
  formData.passwordConfirm = "";
  formData.imgPath = "src/assets/images/addProfilePhoto.png";

  // Funciones
  // Navigation
  const navigateToHaveAPlayer = () => {
    router.push('/login-player');
  };

  // Update Erros and Model
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
      case 'passwordConfirm':
        errors.passwordConfirm.value = false;
        break;
      default:
      break;
    }
  };

  // Change Image // Falta acualitzar la imatge
  const changeImage = () => {
    const newImagePath = prompt("Enter the URL of the new image:");
    if (newImagePath) {
      formData.imgPath = newImagePath;
    }
  };
  // Other
  function createPlayer () {
    const playerData = {
      name: formData.name,
      password: formData.password,
    };
    emit('loginRequest', playerData);
    router.push('/home');
  };

  // Funció encarregada de fer el submit del formulari
  const handleSubmit = () => {
    errors.global.value = false; // Reset del error global 

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

    fetch("https://balandrau.salle.url.edu/i3/players", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        player_ID: formData.name,
        password: formData.password,
        img: formData.imgPath,
      }),
    })
      .then(async res => {
        if (res.ok) {   
          createPlayer();
        } else {
          const error = await res.json();
          throw new Error(`${error.error.message}`); // Envia codi d'error i missatge
        }
        
      })
      .catch((error) => {
          // Seteja missatge d'error a mostrar
          errors.global.value = true;
          errors.global.message = error.message;
          console.error(error);
      });
  };
  

</script>

<template>
    <LogoLeftComponent />
    <form class="player_cretion_form" @submit.prevent="handleSubmit">
      <h1>CREATE PLAYER</h1>
      <!-- Image button del formulari -->
      <img :src="formData.imgPath" alt="Logo" class="addProfilePhoto" @click="changeImage">

      
      <!-- Inputs del form -->
      <InputComponent inputType="text" inputPlaceholder="Name" :error="errors.name.value" :msgError="errors.name.message" @update:modelValue="(value) => updateModel(value, 'name')"/>
      <InputComponent inputType="password" inputPlaceholder="Password" :error="errors.password.value" :msgError="errors.password.message" @update:modelValue="(value) => updateModel(value, 'password')"/>
      <InputComponent inputType="password" inputPlaceholder="Confirm Password" :error="errors.passwordConfirm.value" :msgError="errors.passwordConfirm.message" @update:modelValue="(value) => updateModel(value, 'passwordConfirm')"/>
      
      <!-- Missatge error n cas d'haver-hi -->
      <ErrorSpan v-if="errors.global.value" :message="errors.global.message"/>

      <!-- Buttons del form -->
      <ButtonWhiteComponent :buttonText="strHaveAPlayer" @click="navigateToHaveAPlayer"/>
      <input type="submit" :value="strCreatePlayer" class="submitPlayer">
    </form>
</template>

<style scoped>
  /* Formulari de la creacio edl player */
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Titol del formulari */
  form h1 {
    font-size: 4vh;
    color: #362864;
  }

  /* Imatge del formulari */
  form img {
    width: 20vh;  /* Definim mides estatiques per evitar possibles errors de display */
    height: 20vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  /* Efecte borros on hover per especificar que es pot modificar */
  form img:hover {
    cursor: pointer;
    filter: blur(2px);
  }
  

  /* Buttons del form */
  button {
    margin-top: 8vh;
  }



  /* Input submit del form */
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

  /* Definim efecta hover del submit input */
  .submitPlayer:hover {
    background: #80547f;
    color: white;
  }
  

  /* Definim estil per a dispostius més petits */
  @media (max-width: 900px) {

    /* Form de creació del player */
    form {
      background-color: #362864;
    }

    /* Titol dl form */
    form h1 {
      display: none;
    }

    /* Imatge del form */
    form img {
      margin-top: 4vh;
      width: 10vh;
      height: 10vh;
    }

    /* Treiem filtre per error en mobil */
    form img:hover {
      filter: none;
    }

    /* Buttons del form */
    button {
      margin-top: 4vh;
    }
    /* Input submit del form */
    .submitPlayer {
      background-color: white;
      color: #362864;
      margin-bottom: 12vh;
    }
    
  }
</style>