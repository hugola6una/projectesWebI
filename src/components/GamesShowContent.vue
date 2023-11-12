<script setup>
    import ItemGamesTable from '../components/ItemGamesTable.vue';
    import Popup from '../components/PopUpGamesShow.vue';
    import { ref } from 'vue';

    const showPopup = ref(false);

    const openPopup = () => {
        showPopup.value = true;
    };

    const closePopup = () => {
        showPopup.value = false;
    };
</script>

<template>
    <div class="playersContent">
            <table>
                <thead>
                    <tr>
                        <th>Filter By</th>
                        <th><button>FINISHED</button></th>
                        <th><button>CREATION DATE</button></th>
                        <th><button>END DATE</button></th>
                        <th><button>AVAILABLE</button></th>
                    </tr>
                </thead>
                <tbody>
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                    <ItemGamesTable @click="openPopup" />
                </tbody>
            </table>
            
        <Popup v-if="showPopup" @closed="closePopup">
            <p>{{ popupContent }}</p>
        </Popup></div>
</template>

<style scoped>

    table {
      border-collapse: separate;
      width: 100%;
      flex: 1;
      margin-top: 2vmax;
    }

    th {
      font-size: 1vh;
      text-align: center;
      color: #362864;
    }

    tbody tr {
        cursor: pointer;
        margin: 0%;
    }

    tbody tr:active {
        background-color: #CACAFB;
    }

    
    .playersContent {
        display: flex;
        width: 100%;
        margin: 1vmax;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: flex-start;
        max-height: 76.5vh;
        overflow: auto;
    }

    button {
        color: white;
        background-color: #CACAFB;
        height: auto;
        width: auto;
        font-size: 1.5vh;
        border: none;
    }

    .playersContent h3{
        color: #362864;
        font-size: 1vmax;
    }

    .players {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    @media (max-width: 820px) {
    .playersContent {
        max-height: 60vh;
    }

    button {
        height: 3vmax;
        width: auto;
        font-size: 0.8vh;
    }

}
</style>
