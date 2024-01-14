<script setup>
    import { ref, onMounted, defineAsyncComponent } from 'vue';  

    // Import components
    import ItemPlayer from '@/components/ItemPlayer.vue';
    import SearchItem from '@/components/SearchItem.vue';
    // Lazy compnent ja que carrega el component en segon pla
    const PopupPlayerInfo = defineAsyncComponent(() => import('@/components/PopUpPlayerInfo.vue'));


    const props = defineProps(['playerList']);
    
    // Funcions cridades en el montatge del component
    onMounted(async() => {
        filteredPlayers.value = props.playerList;
    });

    // Variables
    const showPopup = ref(false);
    const filteredPlayers = ref([]);
    const player = ref({});

    // Funció per mostrar el popup
    function togglePopUp(playerAux) {
        showPopup.value = !showPopup.value;
        if (showPopup.value) {
            player.value = playerAux;
        }
    }

    // Funció per filtrar els jugadors
    function updateSearch(value) {
        filteredPlayers.value = props.playerList.filter(player =>
            player.player_ID.toLowerCase().includes(value.toLowerCase())
        );
    }

</script>

<template>
    <!-- Contenidor de search -->
    <div v-if="!showPopup" class="playerContent">
        <h1 v-once>SEARCH</h1>
        <SearchItem @input="updateSearch"/>
        <section class="players">
            <!-- Item de jugador fem bucle er mostar tots els items -->
            <ItemPlayer v-for="player in filteredPlayers" :key="player.player_ID" :player="player" @click="togglePopUp(player)"/>
        </section>
    </div>
    <!-- PopUp amb info jugador -->
    <PopupPlayerInfo v-if="showPopup" @closePopUp="togglePopUp" :player="player"></PopupPlayerInfo>
</template>

<style scoped>
    /* Estil contigut en el contendior de searh */
    .playerContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
    }

    /* Titol secció */
    h1{
        color: #362864;
        font-size: 3vh;
    }

    /* Estil contigut en players */
    .players {
        margin-top: 3vh;
        width: 100%;
        height: 200%;
        overflow-y: auto;
        max-height: 45vh;
    }

    @media (max-width: 900px) {
    
    }
</style>
