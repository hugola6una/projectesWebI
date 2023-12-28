<script setup>
  import { ref } from 'vue';  // Per refenciar variables
  import Top from '../components/TopComponent.vue';
  import GamesShowContent from '../components/GamesShowContent.vue';
  import GamesSearchContent from '../components/GamesSearchContent.vue';
  const contentToShow = ref('show');

function showContent(contentType) {
  contentToShow.value = contentType;
}
</script>

<template>
      <div class="body">
        <Top />
        <section class="center">
          <nav class="userSelectors">
            <div class="userOptions">
              <button @click="showContent('show')" :class="{ active: contentToShow === 'show' }">
                      <!-- <img src="src/assets/images/icons/show.png" alt="Show" class="iArchive"> -->
                      <span>Show</span>
                  </button>
                  <button @click="showContent('search')" :class="{ active: contentToShow === 'search' }">
                    <!-- <img src="src/assets/images/icons/search.png" alt="Search" class="iArchive"> -->
                    <span>Search</span>
                </button>
            </div>
            
          </nav>

          <article class="userContent">
            <div v-if="contentToShow === 'show'" class="userContent">
              <GamesShowContent />
            </div> 
            <div v-else-if="contentToShow === 'search'" class="userContent">
              <GamesSearchContent />
            </div> 
        </article>
        </section>
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
    margin-left: 1.5vh;
    align-items: center;
  }

  .iArchive {
    width: 3vmax;
    margin-right: 1vmax;
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
    max-height: 45vmax;

  }

  @media (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;
    }

    .body {
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
    }
    .userOptions {
      margin-left: 2vh;
    }
    button {
      width: 6vmax;
    }
  }
</style>
