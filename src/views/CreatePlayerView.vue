<script>
  import LogoLeftComponent from '@/components/LogoLeftComponent.vue'
  import ButtonPurpleComponent from '@/components/ButtonPurpleComponent.vue';
  import ButtonWhiteComponent from '@/components/ButtonWhiteComponent.vue';
  import InputComponent from '@/components/InputComponent.vue';

  export default {
    components: {LogoLeftComponent, ButtonPurpleComponent, ButtonWhiteComponent, InputComponent},
    data() {
      return {
        strCreatePlayer: 'CREATE PLAYER',
        strHaveAPlayer: 'I HAVE A PLAYER'
      }
    },
    methods: {
      navigateToHaveAPlayer() {
        this.$router.push('/login-player')
      },
      navigateToCreatePlayer() {
        this.$router.push('/home')
      },
    },
  }

</script>

<template>
  <div class="container">
    <LogoLeftComponent />
    <div class="right">
      <h1>CREATE PLAYER</h1>
      <div class="dIteractive">
        <div class="inputs">
          <img src="..\assets\images\addProfilePhoto.png" alt="Logo" class="addProfilePhoto">
          <form>
            <InputComponent inputType="text" inputPlaceholder="Name" />
            <InputComponent inputType="password" inputPlaceholder="Password" />
            <InputComponent inputType="password" inputPlaceholder="Confirm Password" />
          </form>    
        </div>
        <div class="buttons">
          <ButtonWhiteComponent :buttonText="strHaveAPlayer" @click="navigateToHaveAPlayer"/>
          <ButtonPurpleComponent :buttonText="strCreatePlayer" @click="navigateToCreatePlayer" class="bBig"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  button {
    height: 4vmax;
    width: 35vmax;
  }

  .bBig {
    height: 8vmax;
    width: 35vmax;
    font-size: 2.2vmax;
  }


  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
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

  .right h1 {
    font-size: 3vmax;
    color: #362864;
  }

  .dIteractive {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    align-items: center;
    justify-content: center;
  }


  .inputs {
    margin-top: 3vmax;
    padding: 1vmax;
    justify-content: center;
    align-items: center;
  }

  .inputs img {
    margin-top: 0vmax;
    width: 12vmax;
  }

  .buttons {
    margin-top: 2vmax;
  }  

  @media (max-width: 900px) {

    .container {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .right {
      height: 100%;
      display: grid;
      grid-template-rows: 1fr 5fr;
      width: 100%;
      background-color: #362864;
      margin: 0%;
    }

    .right h1 {
      color: white;
      font-size: 1.5vmax;
    }

    .inputs {
      margin: 0;
    }
    .dIteractive {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
    }


    .buttons {
      margin-top: 0.5vmax;
      margin-bottom: 2vmax;
    }

    .inputs img {
      margin-top: 0;
      width: 8vmax;
    }

    .bBig {
      height: 5vmax;  
    }


    
    
  }
</style>