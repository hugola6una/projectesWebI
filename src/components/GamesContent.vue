<script setup>
    import ItemMatch from '../components/ItemMatch.vue';
    import Popup from '../components/PopUpGames.vue';
    import { ref } from 'vue';

    const showPopup = ref(false);
    const popupContent = ref('');

    const openPopup = (content) => {
        showPopup.value = true;
        popupContent.value = content;
    };

    const closePopup = () => {
        showPopup.value = false;
    };
</script>

<template>
    <div class="gamesContent">
        <h3>RATIO: 3 / 7</h3>
        <section class="games">
        <ItemMatch class="won" @click="openPopup('You won!')" />
        <ItemMatch class="lose" @click="openPopup('You lost!')" />
        </section>

        <Popup v-if="showPopup" @closed="closePopup">
        <p>{{ popupContent }}</p>
        </Popup>
    </div>
</template>

<style scoped>

    .gamesContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 2vmax;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
        max-height: 70vh;
    }

    .gamesContent h3{
        color: #362864;
        font-size: 3vmax;
    }
    .games {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    .won {
        background-color: rgb(107, 173, 107);
    }

    .lose {
        background-color: rgb(189, 99, 99);
    }

    @media (max-width: 800px) {
    .gamesContent {
        max-height: 60vh;
    }
}
</style>
