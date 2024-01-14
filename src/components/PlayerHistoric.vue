<script setup>
    // Libraries
    import { onMounted, ref } from 'vue';
    // API Request
    import { getPlayerRequest } from '@/services/api/PlayerRequest.js';
    import { getImage } from '@/services/Auxiliar.js'

    const props = defineProps(['player_ID']); // Rep el contingut del item per props

    // Quan es monta el component crida a la funció per obtenir el player
    onMounted(() => {
        getPlayer();
    });

    
    // Variable per guardar el player
    const player = ref({});

    // Funció per obtenir el player de la API
    async function getPlayer() {
        const token = JSON.parse(localStorage.getItem('player')).token;
        const player_ID = props.player_ID;
        try {
            player.value = await getPlayerRequest(token, player_ID);
        } catch (error) {
            console.log(error);
        }
    }



</script>

<template>
    <!-- Contenidor amb el nom i foto de perfil del player -->
    <div class="playerHistoric">
        <!-- Imatge foto de perfil  -->
        <img :src="getImage(player.img)" alt="User" class="iUser">
        <!-- Nom del jugador -->
        <p>{{player.player_ID}}</p>
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
