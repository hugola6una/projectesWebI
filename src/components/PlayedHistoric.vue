<script setup>
    const props = defineProps(['description', 'time', 'isPlayer1'] ) // Rep info de la acció realitzada i el temps
</script>

<template>   
    <div :class="{ missatge: true, 'player1': props.isPlayer1 }">
        <!-- Acció realitzada -->
        <p class="actionDone">{{ props.description }}</p>
        <!-- Temps de l'acció -->
        <p class="time">{{time}}</p>
    </div>  
</template>

<style scoped>
    .missatge {
        display: grid;
        grid-template-columns: 4fr 1fr;
        align-items: center;
    }

    .player1 {
        background-color: #c2b5f0;
    }
    /* Estil tex */
    .time {
        color: #362864;
        font-size: 1.5vh;
    }
    /* Estil del missatge d'acció */
    .actionDone {
        color: #362864;
        font-size: 3.5vh;
        margin-left: 10vh;
        margin-right: 10vh;
    }

    @media (max-width: 900px) {
        /* Redimensionem mida lletra */
        p {
            font-size: 1vh;
        }
        /* Redimensionem mida lletra */
        .actionDone {
            font-size: 1.5vh;
            margin-left: 5vh;
            margin-right: 5vh;
        }
    }
</style>
