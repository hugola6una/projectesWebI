<!-- Butó Lila  -->
<script setup>
    // Libraries

    
    defineProps(['buttonText']) // Rep el text del botó com a prop 
</script>

<template>
    <!-- Butó amb el text variable -->
    <button>{{ buttonText }}</button>
</template>

<style scoped>
    /* Estil del butó */
    button {
        justify-content: center;
        align-items: center;
        display: flex;
        background: #362864;
        color: white;
        margin-top: 1vh;
        width: 35vh;
        height: 4vh;
        border: none;
        font-size: 1.5vh;
        box-sizing: border-box;
    }

    /* Estil de canvi de color en cas de hover */
    button:hover {
        background: #80547f;
        color: white;
    }

    /* Estil per resolucions petites */
    @media (max-width: 900px) {
        /* Estil butó resolució petits */
        button {
            background: white;
            color: #362864
        } 
    }
</style>