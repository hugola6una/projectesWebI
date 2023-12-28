<script setup>
    //Libraries
    import { defineProps } from 'vue';

    defineProps(['player']); // Rep el contingut del itemUserHistoricBattle per props
</script>

<template>
    <!-- Contenidor amb la informació del palyer -->
    <div class="uProfile">
        <!-- Imatge de perfil del player -->
        <img :src="player.img" alt=""/>
        <!-- Nom del player -->
        <span>{{player.name}}</span>
    </div>
</template>

<style scoped>
    /* Estil del contenidor */
    .uProfile {
        margin: 1.5vh;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    /* Estil nom jugador */
    span {
        margin-left: 2vh;
        font-size: 2vh;
    }

    /* Estil imatge de perfil */
    img {
        width: 6vh;
    }

    @media (max-width: 900px) {

        img {
            display: none;
        }

        span {
            margin: 0;
            font-size: 1vmax;
        }
        
    }

</style>
