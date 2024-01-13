<script setup>
  // Librairies
  import { ref, defineAsyncComponent, onMounted, reactive} from 'vue';

  // API Requests
  import { attackPlayer } from '@/services/api/AttacksRequest.js';

  // Components
  import ItemCollection from '@/components/ItemCollection.vue';

  // Componetns segon plà
  const MyAttacksPopUp = defineAsyncComponent(() => import('@/components/MyAttacksPopUp.vue'));

  // Variables
  const state = reactive({ // Reactive per actualitzar la view en cas de canvi
    attacks: [],
  });

  // Durant el montatje de la view obtenim els atacs que disposem
  onMounted(() => {
        getAttacks();
    }); 


    // Functions
    async function getAttacks() {
      try {
        const token = JSON.parse(localStorage.getItem('player')).token; // Obtenim token del local storage
        const id  = JSON.parse(localStorage.getItem('player')).player_ID; // Obtenim token del local storage
        state.attacks = await attackPlayer(token, id);
      } catch (error) {
        alert(error);
      }
    }
  
  // En cas de que s'hagi creat tanquem popUp i obtenim els nous attacks
  function hasCreated() {
    togglePopupCreaction();
    getAttacks();
  }

  // Variables de control per mostrar el popUp
const showPopup = ref(false);

const togglePopupCreaction = () => {
  showPopup.value = !showPopup.value;
}

</script>

<template>      
    <!-- Titol del apartat de colelció -->
    <h1  v-if="!showPopup" class="colectionTitle">COLECTION</h1>  
      <!-- Secció amb articles   -->
    <section  v-if="!showPopup">
      <!-- Atircles/items de attack del player -->
      <ItemCollection v-for="attack in state.attacks" :key="attack.attack_ID" :attack="attack"/>
    </section>
    <!-- Botó per obrir popUp de creació -->
    <button  v-if="!showPopup" @click="togglePopupCreaction">CREATE</button>    
    <!-- PopUp creació -->
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
