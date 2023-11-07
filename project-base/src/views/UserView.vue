<script setup>
  import router from '../router';
  import lateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';
</script>

<template>
 <div class="container">
      
      <lateralMenu />
      <div class="body">
        <Top />
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
