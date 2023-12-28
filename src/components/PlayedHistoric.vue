<script setup>

</script>

<template>   
    <div class="missatge">
        <!-- Acció realitzada -->
        <p class="actionDone">ATTACK</p>
        <!-- Temps de l'acció -->
        <p>00:00</p>
    </div>  
</template>

<style scoped>
    /* Estil tex */
    p {
        color: #362864;
        font-size: 2.5vh;
    }
    /* Estil del missatge d'acció */
    .actionDone {
        color: #362864;
        font-size: 3.5vh;
        margin-left: 10vh;
        margin-right: 10vh;
    }

    @media (max-width: 900px) {
        /* Redimensionem mida lletra */
        p {
            font-size: 1vh;
        }
        /* Redimensionem mida lletra */
        .actionDone {
            font-size: 1.5vh;
            margin-left: 5vh;
            margin-right: 5vh;
        }
    }
</style>
