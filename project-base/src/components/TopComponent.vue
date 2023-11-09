<script setup>
  import router from '../router';
</script>

<template>
  <div class="top">
    <router-link to="/store" class="link">
            <div class="coins">
              <img src="..\assets\images\icons\coinIcon.png" alt="Coins" class="icon">
              <span class="coin">1000</span>
            </div>
    </router-link>
  </div>
</template>

<style scoped>

  .top {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    }
    .coins {
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

</style>