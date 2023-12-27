<script setup>
  import { ref, defineProps } from 'vue';
  import { useRouter } from 'vue-router';

  const props = defineProps(['coin']);

  const router = useRouter();

  const coins = ref(props.coin);

  function navigateToHome() {
    router.push('/home');
  }

  function navigateToStore() {
    router.push('/store');
  }

</script>

<template>
  <header class="top">
    <img @click="navigateToHome" src="..\assets\images\logoRobotArena.png" alt="Logo" class="logo">
    <aside @click="navigateToStore" class="coins">
      <img src="..\assets\images\icons\coinIcon.png" alt="Coins" class="icon">
      <span>{{coins}}</span>
    </aside>
  </header>
</template>

<style scoped>

  .top {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .logo {
    display: none;
    cursor: pointer;
  }

  .coins {
    display: flex;
    order: 2;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-right: 8vh;
    cursor: pointer;
  }

  .coins img {
    width: 7vh;
    margin-right: 2vh;
    margin-left: 2vh;
    align-items: center;
    justify-content: center;
  }

  .coins span {
    color: white;
    font-size: 2.5vh;
  }

  @media (max-width:900px) {

    .top {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .logo {
      display: flex;
      width: 5vh;
      justify-self: flex-start;
      margin-left: 3vh;
    }

    .coins {
      justify-self: flex-end;
      margin: 0;
      margin-right: 2vh;
    }
  }

</style>