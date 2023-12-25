<script setup>
  // Libraries
  import { useRouter } from 'vue-router';

  // Components
  import Top from '../components/TopComponent.vue';

  const router = useRouter();

  function navigateToGamesAdministration() {
    router.push('/games-administration');
  }

  console.log('HomeView');
</script>

<template>
  <section class="body">
    <Top />
    <main class="center">
      <h1>ROBOT</h1>
      <h1>BATTLE</h1>
      <h2>ARENA</h2>
      <button @click="navigateToGamesAdministration" class="bPlay">PLAY</button>
    </main>
  </section>
</template>

<style scoped>
  .body {
    height: 100%;
    width: 100%;
    background: #362864;
    display: grid;
    grid-template-rows: 1fr 8fr;
  }

  .center {
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
  }

  .center h1 {
    margin: 0;
    font-size: 6vh;
  }

  .center h2 {
    margin: 0;
    font-size: 6vh;
  }

  .bPlay {
    margin-top: 5vh;
    border-radius: 0px;
    border: none;
    width: 40vh;
    height: 10vh;
    color: #362864;
    justify-content: center;
    align-items: center;
    font-size: 7vh;
  }

  .bPlay:hover {
    background: #80547f;
    color: white;
  }

  @media (max-width: 900px) {
    .body {
      widows: 100%;
      height: 100%;
      order: 1;
    }
  } 
</style> 