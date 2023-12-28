<script setup>
    // Libraries
    import { ref } from 'vue';
    
    // Components
    import ItemMatch from '@/components/ItemMatch.vue';
    import Popup from '@/components/PopUp.vue';

    const matches = ref([{
        id: 1,
        player1: { name: 'Player1', img: 'src/assets/images/icons/playerdefault.png' },
        player2: { name: 'Player2', img: 'src/assets/images/icons/playerdefault.png' },
        size: 8,
        date: 'DD/MM/YYYY',
        result: 'WON',
    },
    ]);

    // Funció per calcular el ratio de victoria
    const calculateWinRation = () => {
        const totalMatches = matches.value.length;
        const wonMatches = matches.value.filter((match) => match.result === 'WON').length;

        if (totalMatches === 0) {
            return 'N/A'; 
        }

        const winRatio = ((wonMatches / totalMatches) * 100).toFixed(2);
        return `${winRatio}%`;
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
    <article class="gamesContent">
        <!-- Titol de la secció-->
        <h3>RATIO: {{ calculateWinRation() }}</h3>
        <!-- Secció amb els items de les partides -->
        <section v-if="!isPopupVisible" class="games">
            <!-- Item de partida fem bucle er mostar tots els items -->
            <ItemMatch v-for="match in matches" @click="togglePopUp(match)" :key="match.id" :match="match" :class="match.result === 'WON' ? 'won' : 'lose'" />
        </section>
        <!-- Pop up amb la info de la partida en cas de click -->
        <Popup v-if="isPopupVisible" @closePopUp="togglePopUp" :popUpTitle="'Match: ' + matchSelected.id" :match="matchSelected"/>
    </article>
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
