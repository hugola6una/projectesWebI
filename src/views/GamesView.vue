<script setup>
  // Librairies
  import { ref, defineAsyncComponent, onMounted} from 'vue';  // Per refenciar variables

  // API request
  import { getAllMatchesRequest } from '@/services/api/GamesRequest.js';

  // Components
  import GamesShowContent from '@/components/GamesShowContent.vue';
  import SelectorComponent from '@/components/SelectorComponent.vue';

  // Carrega segon plà
  const GamesSearchContent = defineAsyncComponent(() => import('@/components/GamesSearchContent.vue'));

  const matches = ref([]);

  // Executa en el montatge inicalitza matches
  onMounted(() => {
    getPlayerMatches();
  });

  // Funció per obtenir els matches del jugador
  async function getPlayerMatches() {
        const token = JSON.parse(localStorage.getItem('player')).token;
        try {
            matches.value = await getAllMatchesRequest(token);
            
        } catch (error) {
            console.log(error);
        }
    }

  // variabele per saber quin contingut mostrar
  const contentToShow = ref('show');

  // funció per canviar el contingut a mostrar
  function activeOption(option) {
    contentToShow.value = option;
  }
</script>

<template>     
  <nav class="gamesSelectors">
    <!-- Opció de show games -->
    <SelectorComponent @click="activeOption('show')" imageSrc="src/assets/images/icons/show.png" strAlt="Show" :isSelected="contentToShow === 'show'"/>
    <!-- Opció cerca de games -->
    <SelectorComponent @click="activeOption('search')" imageSrc="src/assets/images/icons/search.png" strAlt="Search" :isSelected="contentToShow === 'search'"/>
            
  </nav>
  <!-- Contigut de la section -->
  <section class="content">
      <!-- Contingut del games -->
      <GamesShowContent v-if="contentToShow === 'show'" :matchesList="matches"/>
      <!-- Contingut de la cerca -->
      <GamesSearchContent v-else :matchesList="matches"/>
  </section>    
</template>

<style scoped>
/* Estils del seleccionadors de contiguts */
  .gamesSelectors {
        display: flex;
        align-self: start;
    }

    /*  estil opcions usuari*/
        /* Contigut de la secció user */
    .content {
      display: flex;
      background: white;
      width: 100%;
      height: 100%;
    }
</style>
