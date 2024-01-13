<script setup>
    import { ref, defineAsyncComponent } from 'vue';  

    import Buy from '@/components/BuyContent.vue';
    import SelectorComponent from '@/components/SelectorComponent.vue';

    const Sell = defineAsyncComponent(() => import('@/components/SellContent.vue'));
  
    const contentToShow = ref('buy');

  // Funció per canviar el contingut a mostrar
  function activeButton(option) {    
    console.log(option);
    contentToShow.value = option;
    console.log(contentToShow.value);
    return;
  }

</script>

<template>  
  <nav class="storeSelectors">
      <!-- Opcio de perfil -->
      <SelectorComponent @click="activeButton('buy')" imageSrc="src/assets/images/icons/buy.png" strAlt="BUY" :isSelected="contentToShow === 'buy'"/>
      <!-- Opció dels atacs -->
      <SelectorComponent @click="activeButton('sell')" imageSrc="src/assets/images/icons/sell.png" strAlt="SELL" :isSelected="contentToShow === 'sell'"/>
  </nav>
  <!-- Article de la seccio -->
  <article class="content">
      <!-- Secció Buy -->
      <Buy v-if="contentToShow === 'buy'"/>
      <!-- Seccio Sell -->
      <!-- <Sell v-else/> -->
  </article>
</template>

<style scoped>
  /* Estils dels selectors */
  .storeSelectors {
    display: flex;
    align-self: start;
  }

   /* Contigut de la secció store */
    .content {
      display: flex;
      background: white;
      height: 100%;
      width: 100%;
    }

  @media (max-width: 900px) {
  }
</style>
