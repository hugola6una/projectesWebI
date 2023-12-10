<script setup>
  import { useRouter } from 'vue-router';
  import ButtonMenuComponent from '../components/ButtonMenuComponent.vue';

  const router = useRouter();

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
    <nav class="menu">
      <img @click="navigateToHome" src="..\assets\images\logoRobotoArena2.png" alt="Logo" class="gameImage">
        <div class= "options"> 
            <div class="default">
              <ButtonMenuComponent @click="navigateToUser" imageSrc="src/assets/images/icons/playerdefault.png" strAlt="USER" route="/user"/>
              <ButtonMenuComponent @click="navigateToRanking" imageSrc="src/assets/images/icons/trofeo.png" strAlt="RANKING" route="/ranking"/>
              <ButtonMenuComponent @click="navigateToStore" imageSrc="src/assets/images/icons/storeIcon.png" strAlt="STORE" route="/store"/>
              <ButtonMenuComponent @click="navigateToMyAttacks" imageSrc="src/assets/images/icons/swordIcon.png" strAlt="MY ATTACKS" route="/my-attacks"/>
              <ButtonMenuComponent @click="navigateToGames" imageSrc="src/assets/images/icons/gamesIcon.png" strAlt="GAMES" route="/games"/>
            </div>
            <div class="logout">
              <ButtonMenuComponent @click="logout" imageSrc="src/assets/images/icons/logout_9965863.png" strAlt="LOG OUT" route="access"/>
            </div>
        </div>
    </nav>
</template>

<style scoped>

  .menu {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 6fr;
    background: white;
  }

  .gameImage  {
    margin: 2vh;
    width: 8vh;
    cursor: pointer;
  }

  .options {
    display: grid;
    grid-template-rows: 3fr 1fr;
    margin: 2vh;
  }

  .default {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .logout {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  

  @media (max-width: 900px) {
    .menu {
      height:fit-content;
      width: 100%;
      order: 2;
      grid-template-rows: 1fr;
      display: flex;
      flex-direction: row;
    }

    .gameImage {
      display: none;
    }
    .options {
      width: 100%;
      display: flex;
      flex-direction: row;
    }
    .default {
      width: 100%;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
    }
    .logout {
      display: none;
    }
}
  
</style>
  