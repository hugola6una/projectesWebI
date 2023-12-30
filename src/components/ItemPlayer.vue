<script setup>
    // Librairies
    import { getImage } from '@/services/Auxiliar.js';

    const props = defineProps(['player']); // Rep per props el jugador seleccionat

</script>

<template>
    <!-- Atricle del jugador -->
    <article class="player">
        <!-- Imatge perfil jugador -->
        <img :src="getImage(player.img)" alt="playerIcon" class="playerIcon" />
        <!-- Nom del jugador -->
        <p class="name">{{props.player.player_ID}}</p>
        <!-- XP del jugador -->
        <p>{{props.player.xp}} XP</p>
    </article>
</template>

<style scoped>
    /* Posa color global */
    * {
        color : #362864;
    }

    /* Estil per el item player */
    .player {
        width: 100%;
        height: 10vh;
        display: grid;
        align-items: center;
        justify-content: center;
        text-align: center;
        grid-template-columns: 1fr 2fr 1fr; /* Deinim aixi perque el nom ocupi una major part */
        cursor: pointer;
    }

    /* Estil foto perfil */
    .playerIcon {
        align-self: center;
        justify-self: center;
        height: 5vh;
        width: 5vh;
    }

    /* Estil nom */
    .name {
        font-size: 1.5vmax;
        font-weight: bold;
    }

    /* Estil XP */
    p {
        font-size: 1vmax;   
    }
</style>
