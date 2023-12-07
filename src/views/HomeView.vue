<script>
  import LateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';

  export default {
    components: {LateralMenu, Top},
    data() {
      return {
        
      }
    },
    methods: {
      navigateToGamesAdministration() {
        this.$router.push('/games-administration')
      },
    },
  }
</script>

<template>
    
  <LateralMenu />
  <div class="body">
    <Top />
    <div class="center">
      <h1>ROBOT</h1>
      <h1>BATTLE</h1>
      <h2>ARENA</h2>
      <button @click="navigateToGamesAdministration" class="bPlay">PLAY</button>
    </div>
  </div>
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
    font-size: 4vmax;
  }

  .center h2 {
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

  @media (max-width: 900px) {
    .body {
      height: 100%;
      order: 1;
    }
  } 
</style> 