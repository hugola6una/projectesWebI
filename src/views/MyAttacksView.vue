<script setup>
  import { ref } from 'vue';
  import lateralMenu from '../components/LateralMenu.vue';
  import Top from '../components/TopComponent.vue';
  import ItemCollection from '../components/ItemCollection.vue';
  import MyAttacksPopUp from '../components/MyAttacksPopUp.vue';

  const items = ref([
    { id: 1, name: 'Attack1', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0 },
    { id: 2, name: 'Attack2', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 3, name: 'Attack3', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 4, name: 'Attack4', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 5, name: 'Attack5', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 6, name: 'Attack1', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 7, name: 'Attack2', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 8, name: 'Attack3', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 9, name: 'Attack4', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png' , quantity: 0 },
    { id: 10, name: 'Attack5', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 11, name: 'Attack1', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 12, name: 'Attack2', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 13, name: 'Attack3', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 14, name: 'Attack4', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 15, name: 'Attack5', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
]);

const showPopup = ref(false);

const createButtonClick = () => {
    showPopup.value = true;
};

const closePopup = () => {
    showPopup.value = false;
};

</script>

<template>      
      <lateralMenu />
      <div class="body">
        <Top />
        <div class="center">
          <h1 class="colectionTitle">COLECTION</h1>    
          <section>
            <ItemCollection
                v-for="item in items"
                :key="item.id"
                :initialSelected="item.selected"
                :itemName="item.name"
                :itemPrice="item.price"
                :itemImage="item.image"
            />

          </section>
          <button @click="createButtonClick">CREATE</button>
        </div>
        <MyAttacksPopUp v-if="showPopup" @closed="closePopup" />
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
    color: white;
    font-size: 1.5vmax;  
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .colectionTitle {
    margin-left: 4vmax;
    color: white;
    font-size: 3vmax;  

  }

  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
    height: 60vh;
    max-height: 60vh;
  }

  .center button {
    width: 20vmax;
    height: 6vmax;
    font-size: 2vmax;
    margin-top: 2vmax;
    align-self: center;
    color: #362864;
    border: none;
  }



  @media (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 8fr 1fr;
    }

    .body {
      height: 100%;
      order: 1;
    }

    section {
      max-height: 50vh;
    }
  }
</style>
