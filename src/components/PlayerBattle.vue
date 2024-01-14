<script setup>
    // Librairies
    import { ref, watch, onMounted } from 'vue';
    import { getImage } from '@/services/Auxiliar.js';

    // ApiREsquest
    import { getPlayerRequest } from '@/services/api/PlayerRequest.js';

    const props = defineProps(['playerAux']);
    const player = ref({});
    const image = ref('');

    onMounted(() => {
        getPlayer()
    })

    watch(() => props.playerAux, () => {
        getPlayer()
    })

    async function getPlayer() {
        if (!props.playerAux || props.playerAux.player_ID === undefined) {
            image.value =  getImage('');
            return;
        }
        try {
            const token = JSON.parse(localStorage.getItem('player')).token;
            player.value = await getPlayerRequest(token, props.playerAux.player_ID);
            image.value = getImage(player.value.img);
        } catch (error) {
            // alert(error);
        }
    }
</script>

<template>
    <div class="player-life">
        <img :src="image">
        <div class="life-container">
            <div class="life" :style="{width:50 + '%'}"> <!--Varia en funció de la vida del player-->

            </div>
        </div>
        <p>{{ props.playerAux?props.playerAux.hp:'??' }} Hp</p>
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
        width: 23vh;
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
        font-size: 1vh;
        margin-left: 2vh;
    }

</style>