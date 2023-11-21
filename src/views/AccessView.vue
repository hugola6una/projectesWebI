<script>
  import LogoLeftComponent from '@/components/LogoLeftComponent.vue'
  import ButtonPurpleComponent from '@/components/ButtonPurpleComponent.vue';
  
  export default {
    components: {LogoLeftComponent, ButtonPurpleComponent},
    data() {
      return {
        strCreatePlayer: 'CREATE PLAYER',
        strHaveAPlayer: 'I HAVE A PLAYER'
      }
    },
    methods: {
      navigateToCreatePlayer() {
        this.$router.push('/create-player')
      },
      navigateToHaveAPlayer() {
        this.$router.push('/login-player')
      }
    },
  }
</script>

<template>
  <div class="container">
    <LogoLeftComponent />
    <div class="right">
      <ButtonPurpleComponent @click="navigateToCreatePlayer" :buttonText="strCreatePlayer" />
      <ButtonPurpleComponent @click="navigateToHaveAPlayer" :buttonText="strHaveAPlayer" />
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
  }
  .right {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  button {
    height: 8vh;
    font-size: 2.5vmax;
  }

  @media (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
    .right {
      background-color: #362864;
      text-align: center;
      justify-content: start;
      align-items: center;
    }
    
  }
</style>