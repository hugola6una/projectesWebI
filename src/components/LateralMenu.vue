<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const selectedOption = route.name;
</script>

<template>
    <nav class="menu">
        <router-link to="/home" class="link">
            <img src="..\assets\images\logoRobotoArena2.png" alt="Logo" class="gameImage">
        </router-link>
        <div class= "options"> 
            <div class="default">

                <router-link to="/user" class="link">
                <div :class="{'option': true, 'selected': selectedOption === 'user'}">
                    <img src="src/assets/images/icons/playerdefault.png" alt="User" class="icon">
                    <span :class="{'option': true, 'selected': selectedOption === 'user'}">User</span>
                </div>
                </router-link>

                <router-link to="/ranking" class="link">
                <div :class="{'option': true, 'selected': selectedOption === 'ranking'}">
                    <img src="src/assets/images/icons/trofeo.png" alt="Ranking" class="icon">
                    <span :class="{'option': true, 'selected': selectedOption === 'ranking'}">Ranking</span>
                </div>
                </router-link>
                
                <router-link to="/store" class="link">
                <div :class="{'option': true, 'selected': selectedOption === 'store'}">
                    <img src="src/assets/images/icons/Store.png" alt="Store" class="icon">
                    <span :class="{'option': true, 'selected': selectedOption === 'store'}">Store</span>
                </div>
                </router-link>
                
                <router-link to="/my-attacks" class="link">
                <div :class="{'option': true, 'selected': selectedOption === 'my-attacks'}">
                    <img src="src/assets/images/icons/swordIcon.png" alt="MyAttacks" class="icon">
                    <span :class="{'option': true, 'selected': selectedOption === 'my-attacks'}">MyAttacks</span>
                </div>
                </router-link>
                
                <router-link to="/games" class="link">
                <div :class="{'option': true, 'selected': selectedOption === 'games'}">
                    <img src="src/assets/images/icons/right_2886104.png" alt="Games" class="icon">
                    <span :class="{'option': true, 'selected': selectedOption === 'games'}">Games</span>
                </div>
                </router-link>
            </div>

            <div class="logout">
                <router-link to="/" class="link">
                <div class="option">
                    <img src="src/assets/images/icons/logout_9965863.png" alt="LogOut" class="icon">
                    <span>LogOut</span>
                </div>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    height: 100vh; 
  }
  .menu {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 6fr;
    background: white;
  }

  .gameImage  {
    margin: 1vmax;
    width: 5vmax;
  }

  .options {
    display: grid;
    grid-template-rows: 3fr 1fr;
    margin: 1vmax;
  }

  .default {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .option {
    height: 5vmax;
    display: grid;
    grid-template-columns: 1fr 4fr;
    justify-content: center;
    align-items: center;

  }

  .option.selected { 
    box-sizing: border-box;
    background-color: #80547f;
    color: white;
  }

  .logout {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .option:hover {
    background: #80547f;
    cursor: pointer;
  }

  .option:hover span{
    color: white;
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

  @media (max-width: 820px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 8fr 1fr;
    }

    .body {
      height: 100%;
      order: 1;
    }

    .coin {
      display: block;
      color: white;
      justify-content: center;
      align-items: center;
    }

    .menu {
      height: 100%;
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
    .option {
      display: flex;
      flex-direction: column;
      height: 100%;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .icon {
      display: flex;
      width: 4vmax;
    }

    .option span {
      display: none;
    }

    .logout {
      display: none;
    }
}
  
</style>
  