<script setup>
  // Librairies
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  // API request
  import { deletePlayerRequest } from '@/services/api/PlayerRequest.js';

  
  // Components
  import SelectorComponent from '@/components/SelectorComponent.vue';
  import PlayerContent from '@/components/PlayerContent.vue';
  import AttacksContent from '@/components/AttacksContent.vue';
  import GamesContent from '@/components/GamesContent.vue';
  import ButtonPurple from '@/components/ButtonPurpleComponent.vue';

  const router = useRouter();
  
  const contentToShow = ref('player'); // variable del contingut a mostrar

  // Funció per canviar el contingut a mostrar
  function activeButton(option) {
    contentToShow.value = option;
  }

  // Funció per eliminar el player
  function deleteUser() {
    try {
      deletePlayerRequest(JSON.parse(localStorage.getItem('player')).token);
      router.push('/');
    } catch (error) {
      alert(error);
    }
  }
</script>

<template>
      <!-- Navegador per les diferents opcions del user -->
      <nav class="userSelectors">
        <!-- Opcions del usuari -->
        <div class="userOptions">
          <!-- Opcio de perfil -->
          <SelectorComponent @click="activeButton('player')" imageSrc="src/assets/images/icons/userIcon.png" strAlt="Player" :isSelected="contentToShow === 'player'"/>
          <!-- Opció dels atacs -->
          <SelectorComponent @click="activeButton('attacks')" imageSrc="src/assets/images/icons/swordIcon.png" strAlt="Attacks" :isSelected="contentToShow === 'attacks'"/>
          <!-- Opcio dels games -->
          <SelectorComponent @click="activeButton('games')" imageSrc="src/assets/images/icons/historicGamesIcon.png" strAlt="Games" :isSelected="contentToShow === 'games'"/>
        </div>
        <!-- En cas de voler eliminar el player -->
        <aside class="trashOption">
          <!-- Buto per delete user -->
          <button class="bTrash" @click="activeButton('trash')">
            <!-- Icone de paperera -->
            <img src="..\assets\images\icons\trashIcon.png" alt="Trash" class="iTrash">
          </button>
        </aside>
      </nav>
      <!-- Secció amb el contigut a mostrar -->
      <section class="content">
        <!-- Contingut del player -->
        <PlayerContent v-if="contentToShow === 'player'"/>
        <!-- Contingut dels attacks -->
        <AttacksContent v-else-if="contentToShow === 'attacks'"/>
        <!-- Contigut dels games -->
        <GamesContent v-else-if="contentToShow === 'games'"/>

        <!-- Contigut per elminar el player -->
        <article v-else class="trashContent">
          <!-- Titol del article -->
          <h1>DELETE USER</h1>
          <!-- Missatge d'alerta -->
          <h3>ARE YOU SURE YOU WANT TO DELETE “USER”?</h3>
          <p>All player-related information will be deleted</p>
          <!-- Opcions pel delete -->
          <div class="bTrashOptions">
            <!-- Confrimació de la eliminació -->
            <ButtonPurple buttonText="CONFIRM" @click="deleteUser"/>
            <!-- Cancela eliminació -->
            <ButtonPurple buttonText="CANCEL" @click="activeButton('player')"/>
          </div>   
        </article>
      </section>
</template>

<style scoped>
    /* Contenidor amb les opcions */
    .userSelectors {
        display: grid;
        grid-template-columns: 4fr 1fr;
        align-items: end;
    }

    /*  estil opcions usuari*/
    .userOptions {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-left: 3.3vh;
    }

    /* esti lopció elimianr compte */
    .trashOption {
      display: flex;
      justify-self: center; /* fem amb self perque sigui nomes ell */
      align-self: center;
    }

    /* estil icone brossa */
    .trashOption img {
        width: 8vh;
    }

    /*  Estil butó brossa*/
    .trashOption button {
        background: none;
        border: none;
    }

    /* Contigut de la secció user */
    .content {
      display: flex;
      background: white;
      height: 100%;
      width: 100%;
    }

    /* Contigut del artile eliminar compte */
    .trashContent {
      display: flex;
      flex-direction: column;
      background-color: white;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    /* Titol per eliminar compte */
    .trashContent h1 {
      color: #362864;
      font-size: 3vmax;
    }

    /* Missatgeavis d eliminar compte  */
    .trashContent h3 {
      color: #362864;
      font-size: 2vmax;
    }

    /* Missatgeavis d eliminar compte  */
    .trashContent p {
      color: #362864;
      font-size: 1.5vmax;
    }

  @media (max-width: 900px) {
    /* Estil mida buttons per a resolcions més petites */
    button {
      width: 8vh;
    }
    /* Nou marge per les opcion més centric aixi */
    .userOptions {
        margin-left: 2vh;
      }

      /* Estil sense text a les opcions per evitar problemes  */
      .userOptions span {
        display: none;
      }  
  }
</style>
