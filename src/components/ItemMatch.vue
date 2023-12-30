<script setup>
    // Libraries
    // Components
    import ItemUserHisotricGame from '@/components/ItemUserHistoricBattle.vue';

    defineProps(['match']); // Rep el contingut del itemMatch per props
    console.match
    
    // Funció per formatejar la data en format DD/MM/YYYY
    function formDate(date) {
        const parsedDate = new Date(date);
        const formattedDate = `${parsedDate.getDate().toString().padStart(2, '0')}/${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}/${parsedDate.getFullYear()}`;
        return formattedDate;
    }
</script>

<template>
    <!-- Article contenint el match -->
    <article class="match"> 
        <!-- Component amb foto perfil i nom player -->
        <ItemUserHisotricGame :player_ID="match.players_games[0].player_ID" />
        <h2>VS</h2>
        <!-- Component amb foto perfil i nom player -->
        <ItemUserHisotricGame :player_ID="match.players_games[1].player_ID" />
        <!-- Mostra mida de tauler -->
        <p>{{match.size}}x{{match.size}}</p>
        <!-- Mostra data de la partida -->
        <p>{{ formDate(match.creation_date) }}</p>
    </article>
</template>

<style scoped>
   * {
        margin: 0;
        color: black
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
