<script setup>
    // Libraries
    import { defineProps } from 'vue';

    defineProps(['player']); // Rep el contingut del item per props
</script>

<template>
    <!-- Contenidor amb el nom i foto de perfil del player -->
    <div class="playerHistoric">
        <!-- Imatge foto de perfil  -->
        <img :src="player.img" alt="User" class="iUser">
        <!-- Nom del jugador -->
        <p>{{player.name}}</p>
    </div>
</template>

<style scoped>
    /* Esil del cotnenidor amb info player */
    .playerHistoric {
        margin-top: 4vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    /* Estil lletra del nom player */
    p {
        color: #362864;
        margin-left: 1vh;
        font-size: 4vh;
    }

    /* Estil imatge player  */
    img {
        width: 10vh;
    }

    @media (max-width: 900px) {
        /* Redimensioenm imatge per dimensions petites */
        img {
            width: 5vh;
        }

        /* Redimensionem nom jugador per dmension spetites */
        p {
            font-size: 1.5vh;
        }
    }
</style>
