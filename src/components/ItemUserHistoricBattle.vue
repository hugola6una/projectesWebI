<script setup>
    //Libraries

    defineProps(['player_ID']); // Rep el contingut del item per props
</script>

<template>
    <!-- Contenidor amb la informació del palyer -->
    <div class="uProfile">
        <!-- Imatge de perfil del player -->
        <!-- <img src="" alt=""/> -->
        <!-- Nom del player -->
        <span>{{player_ID}}</span>
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
