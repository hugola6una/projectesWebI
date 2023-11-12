<script setup>
</script>

<template>
  <header class="top">
    <router-link to="/home" class="link" id="logo">
      <img src="..\assets\images\logoRobotArena.png" alt="Logo" class="logo">
    </router-link>
    <router-link to="/store" class="link" id="coins">
            <div class="coins">
              <img src="..\assets\images\icons\coinIcon.png" alt="Coins" class="icon">
              <span class="coin">1000</span>
            </div>
    </router-link>
  </header>
</template>

<style scoped>

  .top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    }

    #logo {
      width: 100%;
      margin-left: 3vmax;
      justify-self: flex-start;
    } 

    #logo img {
      display: none;
    }

    #coins {
      justify-self: flex-end;
      margin-right: 4vmax;
    }

    #coins div {
    margin-top: 1vmax;
    color: white;
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: end;
    align-items: center;
  }

  .coin {
    color: white;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 4vmax;
    margin-right: 1vmax;
    margin-left: 1vmax;
    align-items: center;
    justify-content: center;
  }

  span {
    color: #362864;
    font-size: 1.5vmax;
  }

  @media (max-width:700px) {

    #logo img {
      display: flex;
      width: 5vmax;
    }
  }

</style>