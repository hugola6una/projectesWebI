<script setup>
    // Librairies
    import { getImage } from '@/services/Auxiliar.js';

    
</script>

<template>
    <div class="player-life">
        <img :src="getImage('../assets/images/icons/swordIcon.png')">
        <div class="life-container">
            <div class="life" :style="{width:50 + '%'}"> <!--Varia en funció de la vida del player-->

            </div>
        </div>
    </div>
</template>

<style scoped>
    .player-life {
        display: flex;
        flex-direction: row;
        padding-left: 5vh;
        align-items: center;
    }

    img {
        width: 8vh;
    }

    .life-container {
        display: flex;
        flex-direction: row;
        width: 27vh;
        height: 4vh;
        background-color: #E1E2FE;
        border-radius: 2vh;
        margin-left: 2vh;
    }

    .life {
        height: 100%;
        background-color: #362864;
        border-radius: 2vh;
    }

    p {
        margin-left: 2vh;
    }

</style>