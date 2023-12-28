<script setup>
    // Librairies

    defineProps(['buttonText']) // feineix el props enviats per el coponent pare amb el respectiu text del butó
</script>

<template>
    <!-- Button del component variable en funció del text -->
    <button type="button">{{ buttonText }}</button>
</template>

<style scoped>
    /* Estil per defecte del nostre butó blanc */
    button {
        justify-content: center;
        align-items: center;
        display: flex;
        background: none;
        margin-top: 1vh;
        width: 35vh;
        height: 4vh;
        border: 0.1em solid #362864;
        font-size: 1.5vh;
        box-sizing: border-box;
        color: #362864;
    }

    /* Anmació en cas de hover del butó */
    button:hover {
        background: #80547f;
        color: white;
    }

    /* Estils per a telefons */
    @media (max-width: 900px) {
        /* Donem nou estil en cas de dispositiu amb petites dimensions */
        button {
            background: #362864;
            color: white;
            border: 0.1vh solid white
        } 
    }
</style>