<script setup>
  // Librairies
  import { useRouter } from 'vue-router';

  // Components
  import ButtonMenuComponent from '../components/ButtonMenuComponent.vue';

  const router = useRouter();

  // Functions
  // Navigation
  function navigateToHome() {
    router.push('/home');
  }

  function navigateToUser() {
    router.push('/user');
  }

  function navigateToRanking() {
    router.push('/ranking');
  }

  function navigateToStore() {
    router.push('/store');
  }

  function navigateToMyAttacks() {
    router.push('/my-attacks');
  }

  function navigateToGames() {
    router.push('/games');
  }

  function logout() {
    router.push('/');
  }
</script>

<template>
    <!-- Navegació per les dferentes views del joc -->
    <nav class="menu">
      <!-- Imatge logo -->
      <img @click="navigateToHome" src="..\assets\images\logoRobotoArena2.png" alt="Logo" class="gameImage">
        <!-- Opcions de navegació -->
        <div class= "options"> 
            <!-- Opcions per navegar a la web -->
            <div class="default">
              <!-- Player Info -->
              <ButtonMenuComponent @click="navigateToUser" imageSrc="src/assets/images/icons/playerdefault.png" strAlt="USER" route="/user"/>
              <!-- Ranking -->
              <ButtonMenuComponent @click="navigateToRanking" imageSrc="src/assets/images/icons/trofeo.png" strAlt="RANKING" route="/ranking"/>
              <!-- Store -->
              <ButtonMenuComponent @click="navigateToStore" imageSrc="src/assets/images/icons/storeIcon.png" strAlt="STORE" route="/store"/>
              <!-- My Attacks -->
              <ButtonMenuComponent @click="navigateToMyAttacks" imageSrc="src/assets/images/icons/swordIcon.png" strAlt="MY ATTACKS" route="/my-attacks"/>
              
              <ButtonMenuComponent @click="navigateToGames" imageSrc="src/assets/images/icons/gamesIcon.png" strAlt="GAMES" route="/games"/>
            </div>
            <!-- Opció per a tancar sessió -->
            <div class="logout">
              <ButtonMenuComponent @click="logout" imageSrc="src/assets/images/icons/logout_9965863.png" strAlt="LOG OUT" route="access"/>
            </div>
        </div>
    </nav>
</template>

<style scoped>
  /* Estil per el menu de navegació */
  nav {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 6fr;
    background: white;
  }

  /* Estil mida imatge logo */
  .gameImage  {
    margin: 2vh;
    width: 8vh;
    cursor: pointer;
  }

  /* Estil opcions del menu de navegació */
  .options {
    display: grid;
    grid-template-rows: 3fr 1fr;
    margin: 2vh;
  }

  /* Estil opcions per defecte */
  .default {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  /* Estil funció per logout */
  .logout {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Estil per resolucions petites */
  @media (max-width: 900px) {
    /* Estil navbar resolucions petites */
    nav {
      height:fit-content;
      width: 100%;
      order: 2;
      grid-template-rows: 1fr;
      display: flex;
      flex-direction: row;
    }

    /* Nova mida logo per mobils */
    .gameImage {
      display: none;
    }

    /* Estil opcions navbar resolucions petites */
    .options {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    /* Estil opcions de navegacio */
    .default {
      width: 100%;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
    }

    /* Estil opció de logout */
    .logout {
      display: none;
    }
}
</style> 