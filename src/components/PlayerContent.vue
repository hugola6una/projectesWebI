<script setup>
    // Libraries
    import { computed } from 'vue';
    import { getImage } from '@/services/Auxiliar.js';

    // Variables
    const maxXP = [150, 500, 1000, 1500]; // Array amb els punts de experiencia necessaris per pujar de nivell
    const props = defineProps(['player']); // Rep per props el jugador seleccionat

    const progressBarWidth = computed(() => { // Calcula l'amplada de la barra de progrés
        return (props.player.xp / maxXP[props.player.level]) * 100;
    });
</script>

<template>
    <!-- Contingut de la info del player -->
    <article class="playerContent">
        <!-- Foto de perfil -->
        <img :src="getImage(props.player.img)" alt="userPhoto"/>
        <!-- Nom usuari -->
        <h1>{{ props.player.player_ID }}</h1>
        <!-- Contenidor amb nivell barra experiencia i xp -->
        <div class="level">
            <!-- barra de progress contenidor -->
            <div class="progressBarContainer">
                <!-- Barra de progrés actualizable segons xp -->
                <div class="progressBar" :style="{width:progressBarWidth + '%'}"></div>
            </div>
            <!-- Nivell -->
            <p>Lvl. {{ props.player.level }}</p>
        </div>
        <!-- Xp actual i necessari per pujar de nivell -->
        <p>{{props.player.xp}} / {{ maxXP[props.player.level] }} XP</p>
    </article>
</template>

<style scoped>

    /* Estil del cotenidor prncipal */
    article {
        width: 100%;
        display: flex;
        flex-direction: column; /* Tipus flex per a emprar display en columna */
        background-color: white;
        justify-content: center;
        align-items: center;
    }

    /* Estil de la imateg de perfil del jugador */
    img {
        margin-top: 5vh;
        width: 10vmax;
    }

    /* estil text */
    p {
        font-size: 2vh;
        color: black;
    }

    /* Contendior del nivell */
    .level {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2vmax;
    }

    /* Estil del contanidor d ela barra de progrés */
    .progressBarContainer {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 15vmax;
        height: 3vmax;
        margin-right: 1vmax;
        background-color: #362864;
    }

    /* Estil barra de progress */
    .progressBar {
        display: flex;
        height: 1.5vmax;
        margin: 1vmax;
        background-color: white;
    }

    /* Estil del nom del jugador */
    h1 {
        margin-top: 3vmax;
        font-size: 2.5vmax;
        color: #362864; 
    }

/* Estil per dimensions més petites */
@media (max-width: 900px) { 
    /* estil del text per a telefons */
    p {
        font-size: 1.5vh;
    }
}

</style>
