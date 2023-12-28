<script setup>
    // Libraries
    import { defineProps} from 'vue';
    // Components
    import ItemUserHisotricGame from '@/components/ItemUserHistoricBattle.vue';

    defineProps(['match']); // Rep el contingut del itemMatch per props
</script>

<template>
    <!-- Article contenint el match -->
    <article class="match"> 
        <!-- Component amb foto perfil i nom player -->
        <ItemUserHisotricGame :player="match.player1"/>
        <h2>VS</h2>
        <!-- Component amb foto perfil i nom player -->
        <ItemUserHisotricGame :player="match.player2"/>
        <!-- Mostra mida de tauler -->
        <p>{{match.size}}x{{match.size}}</p>
        <!-- Mostra data de la partida -->
        <p>{{ match.date }}</p>
    </article>
</template>

<style scoped>
   * {
        margin: 0;
    }
    /* Estil per el contenidor de match */
    .match {
        border: 0.2vh solid black;
        display: flex;
        text-align: center;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        width: 100%;
        height: 10vh;
    }

    /* Estil per la constant VS */
    h2 {
        font-size: 4vh;
        font-weight: bold;
    }

    /* estil per les informacions adicionals */
    p {
        font-size: 1.5vh;   
    }

    @media  (max-width: 900px) {
        .match {
            height: 8vh;
        }
        /* Estil per la constant VS */
        h2 {
            font-size: 1vh;
        }

        /* estil per les informacions adicionals */
        p {
            font-size: 1vh;   
        }
        
    }
</style>
