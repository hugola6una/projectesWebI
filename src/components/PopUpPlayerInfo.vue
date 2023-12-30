<script setup>
    // Librairies
    import PlayerInfoContent from '@/views/UserView.vue';

    defineProps(['player']); // Rep per props el jugador seleccionat

</script>

<template>
    <!-- Secció popUp -->
    <section class="popup">
        <!-- Article de la secció -->
        <article class="popupContent">
            <!-- Header amb titol i buton close -->
            <header class="top">
                <!-- Tito del popUp -->
                <h1>PLAYER INFORMATION</h1>
                <!-- Butó per tancar el popUp -->
                <button @click="$emit('closePopUp')">x</button>
            </header>
            <!-- Contingut del popUp passa la info del player-->
            <PlayerInfoContent :me="false" :pPlayer="player"/>
        </article>
    </section>
</template>
    

    
<style scoped>
    /* Estil popUp */
    .popup {
        position: fixed; /* Fixem posicio per a correcte display */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #362864;
    }

    /* Estil article del popUp */
    .top {
        display: grid;
        grid-template-columns: 4fr 1fr;
        width: 100%;
        align-items: center;
        text-align: centert;
        justify-content: center;
        color: white;
    }

    /* estil titol popUp */
    .top h1 {
        justify-content: center;
        text-align: center;
        font-size: 2vh;
    }

    /* Estl ocntigut popUp */
    .popupContent {
        display: flex;
        flex-direction: column;
        margin: 3vh;
        margin-top: 7vh;
        padding: 3vh;
        height: 100%;
        width: 100%;
        text-align: center;
        justify-content: start;
        background: #362864;
        border-radius: 5px;
    }

    /* estil butó close */
    .top button {
        color: white;
        background-color: #362864;
        border: none;
        font-size: 4vh;
        cursor: pointer;
        height: 5vh;
        align-items: center;
        justify-content: center;
    }

@media (max-width: 900px) {
    /* Estil popUp  resolucions petites*/
    .popup {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
</style>