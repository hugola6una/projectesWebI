<script setup>
  // Librairies
  import { defineEmits } from 'vue';
  import { useRouter } from 'vue-router';

  // Components
  import LogoLeftComponent from '@/components/LogoLeftComponent.vue'
  import ButtonPurpleComponent from '@/components/ButtonPurpleComponent.vue';

  // Constants
  const router = useRouter();
  defineEmits(['havePlayer']);


  // Functions
  // Navigation
  function navigateToCreatePlayer () {
    router.push('/create-player')
  }

  function navigateToHaveAPlayer () {
    router.push('/login-player')
  }
</script>

<template>
    <!-- Component aside amb el logo -->
    <LogoLeftComponent v-once/>
    <!-- Component aside amb els botons -->
    <aside class="accessOptions">
      <!-- Butó per a crear player -->
      <ButtonPurpleComponent v-once @click="navigateToCreatePlayer" buttonText="CREATE PLAYER"></ButtonPurpleComponent>
      <!-- Butó per a inciiar sessió -->
      <ButtonPurpleComponent v-once @click="navigateToHaveAPlayer" buttonText="I HAVE A PLAYER"></ButtonPurpleComponent>
    </aside>
</template>

<style scoped>
  /* Estil del contenidor amb les opcions d'accés */
  .accessOptions {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  /* Estil dels botons */
  button {
    height: 10vh;
    font-size: 3vh;
  }

  /* Estil per resolucions petites */
  @media (max-width: 900px) {
    /* Estil del contenidor amb les opcions d'accés */
    .accessOptions{
      background-color: #362864;
      padding-top: 10vh;
      text-align: center;
      justify-content: start;
      align-items: center;
    }
  }
</style>