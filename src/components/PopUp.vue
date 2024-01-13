<script setup>
    // Libraries
    import { onMounted, ref} from 'vue';

    // API request
    import { getMatchLogRequest } from '@/services/api/GamesRequest.js';


    // Components
    import PlayerHistoric from '@/components/PlayerHistoric.vue';
    import PlayedHistoric from '@/components/PlayedHistoric.vue';

    const props = defineProps(['popUpTitle', 'match']); // Rep el contingut del item match  i del titol per props
    const matchLog = ref({});

    onMounted(() => {
        getMatchLog();
    });

    // Peticio a la API per obtenir el log de la partida
    async function getMatchLog() {
        const token = JSON.parse(localStorage.getItem('player')).token;
        const match_ID = props.match.game_ID;
        try {
            matchLog.value = await getMatchLogRequest(token, match_ID);
        } catch (error) {
            console.log(error);
        }
    }

    // Funció per calcular el temps en partida
    function getTimeInMatch(actualTime) { 
        const startTime = new Date(matchLog.value[0].date_time);
        const actual = new Date(actualTime);
    
        const timeDifference = actual - startTime; // Calculem la diferencia entre el temps actual i el temps de inici de la partida

        const secondsDifference = Math.floor(timeDifference / 1000); // Passem a segons

        // Calcula minuts i segons
        const minutes = Math.floor(secondsDifference / 60);
        const seconds = secondsDifference % 60;

        // Dona format com a  "mm:ss"
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        return formattedTime;
    }
</script>

<template>
    <!-- Secció contenint el popUP -->
    <section class="popup">
        <!-- Article amb el contingut del popUp -->
        <article class="popupContent">
            <!-- Header del popUp amb el titol i el boto per tancar -->
            <header class="top">
                <h3>{{props.popUpTitle}}</h3>
                <button @click="$emit('closePopUp')">x</button>
                <!-- Secció amb els jugadors -->
                <div class="players">
                    <!-- Passa el ID del jugador al compoennt Player Historic -->
                    <PlayerHistoric class="player1" :player_ID="props.match.players_games[0].player_ID"/>
                    <PlayerHistoric class="palyer2" :player_ID="match.players_games[1].player_ID"/>
                </div>
            </header>
            <!-- Secció amb les partides jugades -->
            <main class="playeds">
                <!-- Missatge de log -->
                <!-- Right per ubicarlo a la dreta-->
                <!-- Left per ubicarlo a la esquerra-->
                <PlayedHistoric v-for="log in matchLog" :key="log.date_time" :description="log.description" :time="getTimeInMatch(log.date_time)"  :isPlayer1="props.match.players_games[0].player_ID === log.player_ID"/>  Comprova quin player es
                <!-- Missatge final de playeds -->
                <p class="end">END</p>
            </main>
        </article>
    </section>
</template>
    

    
<style scoped>
    /* Estil del popUp */
    .popup {
        position: fixed; /* Posicio fixe per poder definir on la volem */
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

    /* estil del header del popUp */
    header {
        display: grid;
        grid-template-areas: "title close" /* Fem grid arees per establir les diemnsions de les diferentes arees del grid */
                            "players players";
        grid-template-columns: 8fr 1fr;
        width: 100%;
        align-items: center;
        text-align: centert;
        justify-content: center;
    }

    /* Estil titol Popup */
    h3 {
        margin-left: 20vh;
        grid-area: title;
        justify-content: center;
        text-align: center;
        color: #362864;
        font-size: 3vh;
    }

    /* estil butó de tancar */
    button {
        grid-area: close;
        color: white;
        background-color: #362864;
        border: none;
        font-size: 3vh;
        cursor: pointer;
        height: 5vh;
        align-items: center;
        justify-content: center;
    }

    /* Estil contenidor de jugadors amb nom i imatge de perfil */
    .players {
        grid-area: players;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: grid;
        grid-template-columns: 1fr 1fr;

    }
    /* Contigut del popUP */
    .popupContent {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 3.5vh;
        margin-top: 7vh;
        padding: 4vh;
        text-align: center;
        justify-content: start;
        background: #EFEFFE;
        border-radius: 3vh;
    }

    /* Contenidor amb les jugades de la partida */
    .playeds {              
        width: 100%;                                                                                                                    
        background-color: whitesmoke;
        margin-top: 4.5vh;
        display: flex;
        flex-direction: column;
        max-height: auto;
        overflow-y: auto;

    }
    /* estil missatge final END */
    .end {
        color: #362864;
        font-size: 5vh;
    }

    @media (max-width: 900px) {
        /* Redimensionament per a mobils */
        header {
            margin-top: 2vh;
        }

        h3 {
            margin: 0;
        }
        
        .playeds {
            max-height: 60vh;
        }
    }
</style>