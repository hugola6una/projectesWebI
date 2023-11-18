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
        strLoginPlayer: 'SIG IN'
      }
    },
    methods: {
      navigateToCreateAPlayer() {
        this.$router.push('/create-player')
      },
      navigateToLoginPlayer() {
        this.$router.push('/home')
      },
    },
  }
</script>

<template>
  <div class="container">
    <LogoLeftComponent />
    <div class="right">
      <h1>LOGIN</h1>
      <div class="dIteractive">
        <form class="inputs">
            <InputComponent inputType="text" inputPlaceholder="Name" />
            <InputComponent inputType="password" inputPlaceholder="Password" />
        </form>
      <div class="buttons"> 
          <ButtonWhiteComponent :buttonText="strCreatePlayer" @click="navigateToCreateAPlayer"/>
          <ButtonPurpleComponent :buttonText="strLoginPlayer" @click="navigateToLoginPlayer" class="bBig"/>
      </div>  
        
      </div>
    </div>
  </div>
</template>

<style scoped>
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

  .bBig {
    height: 8vmax;
    font-size: 2.2vmax;
  }

  .inputs {
    margin-top: 5vmax;
  }

  .buttons {
    margin-top: 5vmax;
  }  

  @media (max-width: 900px) {
    .container {
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;
    }
    .right {
      display: grid;
      grid-template-rows: 1fr 4fr;
      width: 100%;
      background-color: #362864;
      align-items: start;
    }

    .right h1 {
      font-size: 3vmax;
      color: white;
    }

    .dIteractive {
      align-self: self-start;
      display: flex;
      flex-direction: column;
    }

    .inputs {
      margin-top: 0;
    }
    .buttons {
      margin-top: 1vmax;
    }  

    .bBig {
      height: 5vmax;
    }
  }
</style>