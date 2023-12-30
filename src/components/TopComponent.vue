<script setup>
    // Librairies
    import { ref, onMounted} from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const coins = ref(0);

    // Funcions
    // Al montar assigna valor a coins
    onMounted(() => {
      coins.value = JSON.parse(localStorage.getItem('player')).coins;
    });

    
    function navigateToHome() {
      router.push('/home');
    }

    function navigateToStore() {
      router.push('/store');
    }

</script>

<template>
  <!-- Component situat en el header de la pagina -->
  <header class="top">
    <!-- Component imatges nomes per resolucions petites -->
    <img @click="navigateToHome" src="..\assets\images\logoRobotArena.png" alt="Logo" class="logo">
    <!-- Contenidor amb el icone i el numero de monedes del jugador -->
    <aside @click="navigateToStore" class="coins">
      <!-- Icone monedes -->
      <img src="..\assets\images\icons\coinIcon.png" alt="Coins" class="icon">
      <!-- Numero monedes -->
      <span>{{coins}}</span>
    </aside>
  </header>
</template>

<style scoped>

  .top {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .logo {
    display: none;
    cursor: pointer;
  }

  .coins {
    display: flex;
    order: 2;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-right: 8vh;
    cursor: pointer;
  }

  .coins img {
    width: 7vh;
    margin-right: 2vh;
    margin-left: 2vh;
    align-items: center;
    justify-content: center;
  }

  .coins span {
    color: white;
    font-size: 2.5vh;
  }

  @media (max-width:900px) {

    .top {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .logo {
      display: flex;
      width: 5vh;
      justify-self: flex-start;
      margin-left: 3vh;
    }

    .coins {
      justify-self: flex-end;
      margin: 0;
      margin-right: 2vh;
    }
  }

</style>