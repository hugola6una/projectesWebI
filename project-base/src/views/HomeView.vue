<script setup>
  import router from '../router';
  import LateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';
</script>

<template>
    <div class="container">
      <LateralMenu />
      <div class="body">
        <Top />

        <div class="center">
          <h1 class="gameTitle">ROBOT</h1>
          <h1 class="gameTitle">BATTLE</h1>
          <h2 class="gameSubTitle">ARENA</h2>

          <router-link to="/games" class="link"> 
            <button class="bPlay">PLAY</button>
          </router-link>  
        </div>
      </div>

    </div>
  </template>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    height: 100vh; 
  }
  .body {
    height: 100%;
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

  .gameTitle {
    margin: 0;
    font-size: 4vmax;
  }

  .gameSubTitle {
    margin: 0;
    font-size: 3vmax;
  }

  .bPlay {
    margin-top: 3vmax;
    border-radius: 0px;
    border: none;
    width: 25vmax;
    height: 7vmax;
    color: #362864;
    justify-content: center;
    align-items: center;
    font-size: 4vmax;
  }

  .bPlay:hover {
    background: #80547f;
    color: white;
  }

  @media (max-width: 820px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 8fr 1fr;
    }

    .body {
      height: 100%;
      order: 1;
    }
}
  
</style>
  