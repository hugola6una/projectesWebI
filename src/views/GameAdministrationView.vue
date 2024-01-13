<script setup>
// Librairies
  import { ref} from 'vue';
  

  import CreateGameContent from '@/components/CreateGameContent.vue';
  import ShowGameContent from '@/components/ShowGameContent.vue';
  import SearchGameContent from '@/components/SearchGameContent.vue';
  import SelectorComponent from '@/components/SelectorComponent.vue';

  const contentToShow = ref('create');

function showContent(contentType) {
  contentToShow.value = contentType;
}
</script>

<template>
        <!-- Navegador per les diferents opcions del game -->
        <nav class="selectors">
           <!-- Opcions del game -->
            <div class="options">
               <!-- Opcions del create -->
              <SelectorComponent @click="showContent('create')" imageSrc="src/assets/images/icons/create.png" strAlt="Create" :isSelected="contentToShow === 'create'"/>
               <!-- Opcions del show -->
              <SelectorComponent @click="showContent('show')" imageSrc="src/assets/images/icons/show.png" strAlt="Show" :isSelected="contentToShow === 'show'"/> 
               <!-- Opcions del search -->
              <SelectorComponent @click="showContent('search')" imageSrc="src/assets/images/icons/search.png" strAlt="Search" :isSelected="contentToShow === 'search'"/>
            </div>
        </nav>
        <!-- Secció amb el contigut a mostrar -->
        <section class="content">
          <!-- Contingut del create -->
          <CreateGameContent v-if="contentToShow === 'create'"/>
          <!-- Contingut del show -->
          <ShowGameContent v-else-if="contentToShow === 'show'" />
          <!-- Contingut del search -->
          <SearchGameContent v-else-if="contentToShow === 'search'"/>
          </section>
</template>

<style scoped>
/* Contenidor amb les opcions */
  .selectors {
    display: grid;
    grid-template-columns: 4fr 1fr;
    align-items: start;
  }
  /*  estil opcions game */
  .options {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 3.3vh;
  }
/*  estil boto  */
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
/* Contigut de la secció game */
  .content {
      display: flex;
      background: white;
      height: 100%;
      width: 100%;
  }
  @media (max-width: 900px) {
    /* Estil mida buttons per a resolcions més petites */
    .content {
      display: flex;
      background: white;
      height: 100%;
      width: 100%;
    }
    .options span {
      display: none;
    }
    .options {
      margin-left: 2vh;
    }
    button {
      width: 8vh;
    }
  }
</style>
