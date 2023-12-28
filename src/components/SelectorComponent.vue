<script setup>
    //  Librairies

    defineProps(['imageSrc', 'strAlt', 'isSelected']) // Rep el contingut de la imatge, el text alternatiu i si esta seleccionat o no

</script>

<template>
    <!-- Buto per a selecció de mostra de contingut -->
    <button :class="{ active: isSelected }">
        <!-- Icone butó -->
        <img :src="imageSrc" :alt="strAlt">
        <!-- Text del butó -->
        <span>{{strAlt}}</span>
    </button>
</template>

<style scoped>
    /* Estil del butó selecció */
    button {
        padding: 2vh;
        border: 0.3vh solid #362864;
        display: flex;
        height: 8vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        box-sizing: border-box; /* box-sizing en border-box per poder aplicar el justifiy i el align */
    }

    /* estil en cas de que el butó estigui activat */
    button.active {
        background: #80547f;
        color: white;
    }

    /* Estil de la imatge  */
    img {
        width: 6vh;
    }   

    /* Esil text del buto */
    span {
        font-size: 3vh;
        margin-left: 1vh;
    }

    @media (max-width: 900px) {
        /* Amaguem text de butó en cal de telefons  */
        span {
            display: none;
        }
        
    }

</style>