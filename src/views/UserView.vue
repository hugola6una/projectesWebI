<script setup>
    // Per refenciar variables
  import lateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';
  import UserContent from '../components/UserContent.vue';

</script>

<template>
  <div class="container">    
    <lateralMenu />
    <div class="body">
        <Top />
        <UserContent />
    </div>
  </div>
  
</template>

<style scoped>
    .container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .body {
    height: 100%;
    width: 100%;
    background: #362864;
    display: grid;
    grid-template-rows: 1fr 8fr;
  }


  

  @media (max-width: 800px) {
    .container {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;

    }

    .menu {
      align-items: end;
      justify-content: center;
    }

    .body {
      height: 100%;
      order: 1;
    }

    .userContent {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .userOptions {
      margin-left: 2vh;
    }

    .userOptions span {
      display: none;
    }

    button {
      width: 8vmax;
    }

    
  
  }
</style>
