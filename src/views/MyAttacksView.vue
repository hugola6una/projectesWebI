<script setup>
  // Librairies
  import { ref, defineAsyncComponent, onMounted, watch} from 'vue';

  // API Requests
  import { attackPlayer } from '@/services/api/AttacksRequest.js';

  // Components
  import ItemCollection from '@/components/ItemCollection.vue';

  // Componetns segon plà
  const MyAttacksPopUp = defineAsyncComponent(() => import('@/components/MyAttacksPopUp.vue'));

  // Variables
  const attacks = ref ([]);

  // Durant el montatje de la view obtenim els atacs que disposem
  onMounted(() => {
        getAttacks();
    });

    watch(attacks, () => {
        
    });

    


    // Functions
    async function getAttacks() {
      try {
        const token = JSON.parse(localStorage.getItem('player')).token; // Obtenim token del local storage
        const id  = JSON.parse(localStorage.getItem('player')).player_ID; // Obtenim token del local storage
        attacks.value = await attackPlayer(token, id);
      } catch (error) {
        alert(error);
      }
    }

  function hasCreated() {
    togglePopupCreaction();
    getAttacks();
  }

const showPopup = ref(false);

const togglePopupCreaction = () => {
  showPopup.value = !showPopup.value;
}

</script>

<template>      
    <h1  v-if="!showPopup" class="colectionTitle">COLECTION</h1>    
    <section  v-if="!showPopup">
      <ItemCollection v-for="attack in attacks" :key="attack.attack_ID" :attack="attack"/>
    </section>
    <button  v-if="!showPopup" @click="togglePopupCreaction">CREATE</button>    
    <MyAttacksPopUp v-if="showPopup" @onClosed="togglePopupCreaction" @onCreated="hasCreated()"/>

</template>

<style scoped>

  /* estil per el titol del cos  */
  .colectionTitle {
    text-align: center;
    color: white;
    font-size: 5vh;  

  }
  
  /* estil per el cos de la pagina */
  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap; /* fem que sigui wrap per anar adaptanse al contigut i l'amplada de lapagina */
    justify-content: center;
    overflow-y: auto; /* fem que tingui scroll vertical en cas de sobrepassar el max heigh */
    height: 55vh;
    max-height: 55vh;
  }

  /* Estil botó */
  button {
    width: 20vmax;
    height: 6vmax;
    font-size: 2vmax;
    margin-top: 2vmax;
    align-self: center;
    color: #362864;
    border: none;
  }

  /* Estil botó acció hover */
  button:hover {
    color: white;
  }


  /* Estil telefons */
  @media (max-width: 900px) {

    section {
      max-height: 50vh;
    }

    .colectionTitle {
      font-size: 4vh;
    }
  }
</style>
