<script setup>
    // Libraries
    import { ref, defineAsyncComponent, onMounted } from 'vue';

    // Import API request
    import { getFinishedGames } from '@/services/api/GamesRequest.js';
    
    // Components
    import ItemMatch from '@/components/ItemMatch.vue';
    // Carrreguem PopUp com a lazy per que esta a segon pla
    const Popup = defineAsyncComponent(() => import('@/components/PopUp.vue'));

    const props = defineProps(['player']); // Rep per props el player

    const matches = ref([]);

    onMounted(() => {
        getPlayerMatches();
    });

    async function getPlayerMatches() {
        const token = JSON.parse(localStorage.getItem('player')).token;
        const player_ID = props.player.player_ID;
        try {
            matches.value = await getFinishedGames(token, player_ID);
        } catch (error) {
            console.log(error);
        }
    }

    // Calcula el ratio de victoria
    function calculateWinRatio() {       
        if (matches.value.length === 0) return 'N/A'; // Evitem dividir per 0 (no hi ha partides
        const totalMatches = matches.value.length;
        const totalWins = matches.value.filter(match => match.players_games[0].winner).length;
        const ratio = totalWins / totalMatches * 100;
        return ratio.toFixed(2) + '%'; 
    }

    // Variable per controlar si el popup es visible o no
    const isPopupVisible = ref(false);
    const matchSelected = ref({});

    // Funció encarregada de mostrar o amagar el popup
    function togglePopUp (match) {
        matchSelected.value = match;
        isPopupVisible.value = !isPopupVisible.value;
    }
</script>

<template>
    <!-- Contigut del article -->
    <article v-if="!isPopupVisible" class="gamesContent">
        <!-- Titol de la secció-->
        <h3>RATIO: {{ calculateWinRatio() }}</h3>
        <!-- Secció amb els items de les partides -->
        <section v-if="!isPopupVisible" class="games" >
            <!-- Item de partida fem bucle er mostar tots els items -->
            <ItemMatch v-for="match in matches" @click="togglePopUp(match)" :key="match.game_ID" :match="match" :class="{ won:match.players_games[0].winner }" />
        </section>
        <!-- Pop up amb la info de la partida en cas de click -->
        
    </article>
    <Popup v-if="isPopupVisible" @closePopUp="togglePopUp" :popUpTitle="matchSelected.game_ID" :match="matchSelected" /> <!-- Falta control win or lose  -->
</template>

<style scoped>
    /* Esil del contenidor dels matches del player */
    .gamesContent {
        display: flex;
        flex-direction: column;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    /* Estil titol de la secció  */
    h3{
        margin-top: 3vh;
        color: #362864;
        font-size: 3vh;
    }

    /* Estil del contenidor dels items de partida */
    .games {
        max-height:64vh; /* Max heigh per evitar mala visualitzacio en cas de desbordament */
        width: 100%;
        padding: 0vh 0vh 1vh;
        overflow-y: auto;
        overflow-x: hidden;
    }

    /* estil en cas de ser una victoria */
    .won {
        background-color: rgb(107, 173, 107);
    }

    /* Estil en cas d eser una derrota */
    .lose {
        background-color: rgb(189, 99, 99);
    }

    @media (max-width: 900px) {
        /* Ajustem mida font titol per evitar probelems de resolució */
        h3 {
            font-size: 2vh;
        }
    }
</style>
