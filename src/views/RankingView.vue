<script setup>
    // Librairies
    import {ref, defineAsyncComponent, onMounted } from 'vue';  // Per refenciar variables

    // API request
    import { getPlayers } from '@/services/api/PlayerRequest.js';

    // Components
    import SelectorComponent from '@/components/SelectorComponent.vue';
    import RankingPlayersContent from '@/components/RankingPlayersContent.vue';

    // El carrreguem com a lazy perque esta en segon pla
    const SearchContent = defineAsyncComponent(() => import('@/components/RankingSearchContent.vue'));

    onMounted(async() => {
        await getAllPlayers();
    });

    const players = ref([]);

    // Funció per obtenir tots els jugadors de la API
    async function getAllPlayers() {
        const token = JSON.parse(localStorage.getItem('player')).token
        try {
            players.value = (await getPlayers(token)).sort((a, b) => b.xp - a.xp);
        } catch (error) {
            console.log(error);
        }
    }

    const active = ref(true);   // Variable per saber si esta activat o no

    // funció encarregada de canviar el contingut a mostrar
    function showContent(component) {
      if (component === 'ranking') {
        active.value = true;
      } else {
        active.value = false;
      }
    }
</script>

<template>
  <!-- Navegador per les diferents opcions del user -->
  <nav class="rankingSelectors">
      <!-- Opcio de perfil -->
      <SelectorComponent @click="showContent('ranking')" imageSrc="src/assets/images/icons/trofeo.png" strAlt="Ranking" :isSelected="active"/>
      <!-- Opció dels atacs -->
      <SelectorComponent @click="showContent('search')" imageSrc="src/assets/images/icons/search.png" strAlt="Search" :isSelected="!active"/>
  </nav>
  <!-- Secció amb el contigut a mostrar -->
  <section class="content">
    <!-- Component d eRanking -->
    <RankingPlayersContent v-if="active" :playersList="players"/>
    <!-- Component de Search -->
    <SearchContent v-else :playerList="players"/>
  </section>
</template>

<style scoped>
  /* Estils del seleccionadors de contiguts */
  .rankingSelectors {
        display: flex;
        align-self: start;
    }

    /*  estil opcions usuari*/
    .userOptions {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-left: 3.3vh;
    }

        /* Contigut de la secció user */
    .content {
      display: flex;
      background: white;
      width: 100%;
      height: 100%;
    }

  @media (max-width: 900px) {
    

  }
</style>