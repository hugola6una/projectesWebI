<script setup>
</script>

<template>
    <!-- Coloquem en el lateral el logo de la web -->
    <aside class="logo">
        <!-- Foto del logo -->
        <img src="../assets/images/logoRobotArena.png" alt="Logo">
        <!-- Contenidor amb titols del joc -->
        <div class="titles">
            <!-- Titols gran H1 -->
            <h1>ROBOT</h1>
            <h1>BATTLE</h1>
            <!-- Subtitol H2 -->
            <h2>ARENA</h2>
        </div>
    </aside>
</template>

<style scoped>
    /* Estils del aside*/
    .logo {
        height: 100%;
        color: white;
        display: flex; /* Emprem flex per poder mostrar en format columna i posar elemens un sota l'altre */
        flex-direction: column;
        text-align: center;
        align-items: center;    /* Centrem en vertical i en horitzontal */
        justify-content: center;
        background: linear-gradient(to right, #633FC3, #362864); /* Apliquem gradient al fons*/
    }
    
    /* Aliniem contigut text del titols */
    .titles {
        text-align: center;
    }

    /* Configurem la mida del logo */
    .logo img {
        width: 30vh;
    }

    /* Estil per la mida del titol */
    .titles h1 {
        margin: 0;
        font-size: 7vh;
    }

    /* estil per la mdia del subtitol */
    .titles h2 {
        margin: 0;
        font-size: 6vh;
    }

    /* Estil per a telefons o resolucions petites */
    @media (max-width: 900px) {
        /* Estil del lgoo per a telefons */
        .logo {
            width: 100%;
            background: #362864;
            padding-top: 10vh;
        }
        
        /* Mida logo per a nova resolució */
        .logo img {
            width: 15vh;
        }

        /* Mida titol per a resollucions pertites */
        .logo h1 {
            font-size: 6vh;
        }
        
    }
</style>