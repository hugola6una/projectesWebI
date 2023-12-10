<script setup>
  import { ref } from 'vue';  
  import Top from '../components/TopComponent.vue';
  import Buy from '../components/BuyContent.vue';
  import Sell from '../components/SellContent.vue';
  
  const contentToShow = ref('buy');

  function showContent(contentType) {
    contentToShow.value = contentType;
  }

</script>

<template>  
    <div class="body">
        <Top />
        <section class="center">
          <nav class="userSelectors">
            <button @click="showContent('buy')" :class="{ active: contentToShow === 'buy' }">Buy</button>
            <button @click="showContent('sell')" :class="{ active: contentToShow === 'sell' }">Sell</button> 
          </nav>
          <article class="userContent">
            <div v-if="contentToShow === 'buy'" class="userContent">
              <Buy />
            </div>
            <div v-else class="userContent">
              <Sell />
            </div>
          </article>
        </section>
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
    display: grid;
    grid-template-rows: 1fr 8fr;
    height: 100%;
  }

  .userSelectors {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 3.3vh;
  }

  button {
    border: 0.1em solid #362864;
    height: 5vmax;
    width: 15vmax;
    font-size: 1.3vmax;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  button.active {
    background: #80547f;
    color: white;
  }
  .userContent {
    width: 100%;
    display: flex;
    justify-content: center;

  }

  .trashContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    color: #362864;
    width: 100%;
    margin: 2vmax;
    padding: 2vmax;
  }

  @media (max-width: 900px) {
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

    .userSelectors {
      margin-left: 2vh;
    }

    button {
      width: 8vmax;
    }

    
  
  }
</style>
