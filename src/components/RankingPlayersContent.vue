<script setup>
    // Librairies
    import { ref, defineAsyncComponent, onMounted, watch } from 'vue';

    // Components
    import ItemPlayer from '@/components/ItemPlayer.vue';
    // Lazy compnent ja que carrega el component en segon pla
    const PopupPlayerInfo = defineAsyncComponent(() => import('@/components/PopUpPlayerInfo.vue'));

    const props = defineProps(['playersList']);

    // Funcions cridades en el montatge del component
    onMounted(() => {
        players.value = props.playersList;
    });

    // Controla els canvis de la llista de jugadors
    watch(() => props.playersList, () => {
        players.value = props.playersList;
    });

    const showPopup = ref(false);
    const players = ref([]);
    const player = ref({});

    // Funció per mostrar el popup
    function togglePopUp(playerAux) {
        showPopup.value = !showPopup.value;
        if (showPopup.value) {
            player.value = playerAux;
        }
    }

    // Funció per saber si el jugador soc jo
    function isMe(player) {
        return player.player_ID === JSON.parse(localStorage.getItem('player')).player_ID;
    }

    
</script>

<template>
    <!-- Contigut amb el raning -->
    <div v-if="!showPopup" class="playersContent">
        <!-- Titol de la secció-->
        <h1 v-once>RANKING</h1>
        <!-- Secció amb els items dels jugadors -->
        <section class="players">
            <!-- Item de jugador fem bucle er mostar tots els items -->
            <ItemPlayer v-for="player in players" :key="player.player_ID" :player="player" @click="togglePopUp(player)" :class="{me: isMe(player)}"/>
        </section>
        <!-- Popup amb la informació del jugador -->
        
    </div>
    <PopupPlayerInfo v-if="showPopup" @closePopUp="togglePopUp" :player="player"></PopupPlayerInfo>
</template>

<style scoped>
    /* Estil del contigut dels players */
    .playersContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
        
        
    }

    /* estil si el judaor soc jo */
    .me {
        background-color: #CACAFB;
    }

    /* Estil titol de la seció */
    .playersContent h1{
        color: #362864;
        font-size: 3vh;
    }
    /* Estil secció players */
    .players {
        margin-top: 2vh;
        width: 100%;
        height: 100%;
        max-height: 55vh;
        overflow-y: auto;
    }

    @media (max-width: 900px) {

    }
</style>
