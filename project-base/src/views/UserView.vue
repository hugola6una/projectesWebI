<script setup>
  import router from '../router';
  import lateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';

</script>

<template>
  <div class="container">    
    <lateralMenu />
    <div class="body">
        <Top />
        <div class="center">
          <div class="options">
            <div class="default">
              <button>
                <img src="..\assets\images\icons\userIcon.png" alt="plus" class="iUser" />
                Player
              </button>
              <button>
                <img src="..\assets\images\icons\userIcon.png" alt="plus" class="iUser" />
                Attacks
              </button>
              <button>Games</button>
            </div>
            <div class="other">
              <button>Trash</button>
            </div>  
          </div>
          <div class="content">

          </div>
        </div>
        
    </div>

  </div>
  
</template>

<style scoped>
    .container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    height: 100vh; 
  }

  .body {
    height: 100%;
    background: #362864;
    display: grid;
    grid-template-rows: 1fr 8fr;
  }


  .center {
    display: grid;
    grid-template-rows: 1fr 8fr;
    height: 100%;
  }

  .options {
    display: grid;
    grid-template-columns: 4fr 1fr;
  }

  .default {
    display: flex;
    justify-content: center;
    align-items: end;
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .iUser {
    width: 4vmax;
    margin-right: 1vmax;
  }

  .other {
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .content {
    background-color: orange;
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
  }
</style>
