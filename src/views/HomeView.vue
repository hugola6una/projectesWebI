<script setup>
  // Libraries
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function navigateToGamesAdministration() {
    router.push('/games-administration');
  }

  
 
</script>

<template>    
      <h1>ROBOT</h1>
      <h1>BATTLE</h1>
      <h2>ARENA</h2>
      <button @click="navigateToGamesAdministration" class="bPlay">PLAY</button>
</template>

<style scoped>

  h1 {
    margin: 0;
    font-size: 6vh;
  }

  h2 {
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
  } 
</style> 