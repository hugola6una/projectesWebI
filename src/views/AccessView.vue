<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  import LogoLeftComponent from '@/components/LogoLeftComponent.vue'
  import ButtonPurpleComponent from '@/components/ButtonPurpleComponent.vue';

  const router = useRouter();

  const strCreatePlayer = ref("CREATE PLAYER");
  const strHaveAPlayer = ref("I HAVE A PLAYER");

  function navigateToCreatePlayer () {
    router.push('/create-player')
  }

  function navigateToHaveAPlayer () {
    router.push('/login-player')
  }

</script>

<template>
    <LogoLeftComponent />
    <aside class="accessOptions">
      <ButtonPurpleComponent @click="navigateToCreatePlayer" :buttonText="strCreatePlayer"></ButtonPurpleComponent>
      <ButtonPurpleComponent @click="navigateToHaveAPlayer" :buttonText="strHaveAPlayer"></ButtonPurpleComponent>
    </aside>
</template>

<style scoped>
    
  .accessOptions {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  button {
    height: 10vh;
    font-size: 3vh;
  }

  @media (max-width: 900px) {
    .accessOptions{
      background-color: #362864;
      padding-top: 10vh;
      text-align: center;
      justify-content: start;
      align-items: center;
    }
    
  }
</style>