<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push('/home')
      },
      navigateToStore() {
        this.$router.push('/store')
      },
    },
  }
</script>

<template>
  <header class="top">
    <img @click="navigateToHome" src="..\assets\images\logoRobotArena.png" alt="Logo" class="logo">
    <div @click="navigateToStore" class="coins">
      <img src="..\assets\images\icons\coinIcon.png" alt="Coins" class="icon">
      <span>1000</span>
    </div>
  </header>
</template>

<style scoped>

  .top {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
  }

  .logo {
    display: none;
  }

  .coins {
    display: flex;
    order: 2;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-right: 3vmax;
  }

  .coins img {
    width: 4vmax;
    margin-right: 1vmax;
    margin-left: 1vmax;
    align-items: center;
    justify-content: center;
  }

  .coins span {
    color: white;
    font-size: 1.5vmax;
  }

  @media (max-width:900px) {

    .top {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .logo {
      display: flex;
      width: 5vmax;
      justify-self: flex-start;
      margin-left: 3vmax;
    }

    .coins {
      justify-self: flex-end;
    }
  }

</style>