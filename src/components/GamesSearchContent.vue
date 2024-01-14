<script setup>
    // Librairies
    import { onMounted, ref, defineAsyncComponent} from 'vue';

    // Components
    import SearchItem from '@/components/SearchItem.vue';
    import ItemGamesTable from '@/components/ItemGamesTable.vue';

    // Segon pla
    // Carrega segon plà
    const Popup = defineAsyncComponent(() => import('@/components/PopUp.vue'));
    
    const props = defineProps(['matchesList']); // rep props del parent
    const showPopup = ref(false); // Variable per saber si mostrar popup o no
    const filteredMatches = ref([]); // Variable per guardar els matches filtrats
    const matchSelected = ref({}); // Variable per guardar el match seleccionat

    onMounted(async () => {
        filteredMatches.value = props.matchesList; // Inicialitzem els matches filtrats
    });

    // Funció per mostrar o amagar el popup
    function togglePopUp (match) { // Comprova que match estart per mostrar el log de match
        showPopup.value = !showPopup.value;
        if (showPopup.value) {
            if (match.start) {
                matchSelected.value = match;
            } else {
                showPopup.value = false;    
            }
        }
    }

    // Funció per filtrar els matches
    function updateSearch(value) {
        // Filtem els matches per el nom
        filteredMatches.value = props.matchesList.filter(match =>
            match.game_ID.toLowerCase().includes(value.toLowerCase())
        );
    }
</script>

<template>
    <!-- Contenidor amb el contigut -->
    <article v-if="!showPopup" class="playersContent"> 
        <!-- Component per cerca de matches -->
        <SearchItem @input="updateSearch" />
        <!-- Taula amb el resultat -->
        <table>
            <!-- Header de la taula -->
            <thead>
                <!-- Titols de les columnes de les taules -->
                <tr>
                    <!-- Game_ID -->
                    <th><button>Name</button></th>
                    <!-- Mida -->
                    <th><button>Size</button></th>
                    <!-- Data de creació -->
                    <th><button>CREATION DATE</button></th>
                    <!-- S'ha acabat el joc? -->
                    <th><button>FINISHED</button></th>       
                    <!-- Està disponible? -->                 
                    <th><button>AVAILABLE</button></th>
                </tr>
            </thead>
            <!-- Cos de la taula -->
            <tbody>
                <!-- Entrades a la taula segons els matches existents -->
                <ItemGamesTable v-for="match in filteredMatches" @click="togglePopUp(match)" :key="match.match_ID" :match="match"/>
            </tbody>
        </table>
    </article>
    <!-- PopUp amb informació del match -->
    <Popup v-if="showPopup" @closePopUp="togglePopUp" :popUpTitle="matchSelected.game_ID" :match="matchSelected"/>
</template>

<style scoped>
    /* estil de la taula */
    table {
        border-collapse: separate;
        width: 100%;
        flex: 1;
        margin-top: 2vh;
    }

    /* Estil de la capçalera de la taula */
    th {
        font-size: 1vh;
        text-align: center;
        color: #362864;
    }

    /* Estil de la secció */
    .playersContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 3vh;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
        max-height: 60vh;
        overflow: auto;
    }

    /* Estil botó */
    button {
        color: white;
        background-color: #362864;
        height: auto;
        width: auto;
        height: 4vh;
        font-size: 1.5vh;
        border: none;
    }

    /* estil per a teleons */
    @media (max-width: 900px) {
        /* Opci´oscroll en cas telefon per visualització correcta */
        .playersContent {
            margin: 0;
            max-width: 40vh;
            overflow-x: auto;
            max-height: 60vh;
        
        }

        button {
            height: 3vmax;
            width: auto;
            font-size: 0.8vh;
        }

    }
</style>
