<script setup>
  import { ref } from 'vue';  // Per refenciar variables
  import lateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';
  import RankingContent from '../components/RankingPlayersContent.vue';
  import SearchContent from '../components/RankingSearchContent.vue';
  const contentToShow = ref('ranking');

  function showContent(contentType) {
    contentToShow.value = contentType;
  }
</script>

<template>
 <div class="container">
      
      <lateralMenu />
      <div class="body">
        <Top />
        <section class="center">
          <nav class="userSelectors">
            <div class="userOptions">
              <button @click="showContent('ranking')" :class="{ active: contentToShow === 'ranking' }">
                <img src="src/assets/images/icons/trofeo.png" alt="Ranking" class="iArchive">
                <span>Ranking</span>
              </button>
              <button @click="showContent('search')" :class="{ active: contentToShow === 'search' }">
                <img src="src/assets/images/icons/search.png" alt="Search" class="iArchive">
                <span>Search</span>
              </button>
            </div>
            
          </nav>
          <article class="userContent">
            <div v-if="contentToShow === 'ranking'" class="userContent">
              <RankingContent />
            </div>
            <div v-else class="userContent">
              <SearchContent />
            </div>
          </article>
        </section>
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


  .center {
    display: grid;
    grid-template-rows: 1fr 8fr;
    height: 100%;
  }

  .userSelectors {
    display: grid;
    grid-template-columns: 4fr 1fr;
    align-items: end;
  }

  .userOptions {
    display: flex;
    justify-content: left;
    margin-left: 3.3vh;
    align-items: center;
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

  .iArchive {
    width: 3vmax;
    margin-right: 1vmax;
  }
  

  .userContent {
    width: 100%;
    display: flex;
    justify-content: center;

  }
  .bOptions button {
    background-color: #362864;
    color: white;
    margin: 1vmax;
  }

  @media (max-width: 800px) {
    .container {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;

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

    .userOptions span {
      display: none;
      margin-left: 2vh;
    }

    button {
      width: 6vmax;
    }

  }
</style>