<script setup>
  import router from '../router';
  import lateralMenu from '../components/LateralMenu.vue';
</script>

<template>
 <div class="container">
      
      <lateralMenu />
      <div class="body">
        <div class="top">
          <router-link to="/store" class="link">
            <div class="coins">
              <img src="..\assets\images\icons\coinIcon.png" alt="Coins" class="icon">
              <span class="coin">1000</span>
            </div>
          </router-link>
        </div>
        <div class="center">
          
          
        </div>
      </div>

    </div>
  
</template>

<style scoped>

</style>
