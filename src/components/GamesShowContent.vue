<script setup>
    // Librairies
    import { ref, defineAsyncComponent, onMounted, watch } from 'vue';

    // Components
    import ItemGamesTable from '@/components/ItemGamesTable.vue';

    // Carrega segon plà
    const Popup = defineAsyncComponent(() => import('@/components/PopUp.vue'));

    const props = defineProps(['matchesList']);
    const matches = ref([]);
    const matchSelected = ref({});

    // Executa en el montatge inicalitza matches
    onMounted(() => {
        matches.value = props.matchesList;
    });

    // Comprova si hi ha canvis en la llista de matches
    watch(() => props.matchesList, () => {
        matches.value = props.matchesList;
    });

    // Variables
    const showPopup = ref(false); // Indica si mostra popUp o no

    // Funció per mostrar o amagar el popup
    function togglePopUp (match) {  // Comprova que match estart per mostrar el log de match
        showPopup.value = !showPopup.value;
        if (showPopup.value) {
            if (match.start) {
                matchSelected.value = match;
            } else {
                showPopup.value = false;    
            }
        }
    }
    
    // Funció per ordenar
    // Paraemmtres d'ordenació
    const order = ref({
        by: null,
        reverse: false
    });

    // Funció per ordenar
    function orderBy(field) {
        // Selecciona el camp a ordenar i comrova si ordena en reversa o no
        if (order.value.by === field) {
            order.value.reverse = !order.value.reverse;
        } else {
            order.value.by = field;
            order.value.reverse = false;
        }

        // LLogica per ordenar
        matches.value.sort((a, b) => {
            const aValue = a[field];
            const bValue = b[field];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
            return order.value.reverse ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
            } else {
            return order.value.reverse ? bValue - aValue : aValue - bValue;
            }
        });
    }   
</script>

<template>
    <!-- Secció amb el contingut -->
    <div v-if="!showPopup" class="playersContent">
            <!-- Taula amb els matches -->  
            <table>
                <!-- Header de la taula -->
                <thead>
                    <tr>
                        <!-- Opcions de filtrar -->
                        <th><button @click="orderBy('game_ID')">Name</button></th>
                        <th><button @click="orderBy('size')">Size</button></th>
                        <th><button @click="orderBy('creation_date')">CREATION DATE</button></th>
                        <th><button @click="orderBy('finished')">FINISHED</button></th>                        
                        <th><button @click="orderBy('start')">AVAILABLE</button></th>
                    </tr>
                </thead>
                <!-- Cos de la taula -->
                <tbody>
                    <!-- Entrades a la taula segons els matches existents -->
                    <ItemGamesTable v-for="match in matches" @click="togglePopUp(match)" :key="match.match_ID" :match="match"/>
                </tbody>
            </table>
    </div>
    <!-- Popup amb el match log -->
    <Popup v-if="showPopup" @closePopUp="togglePopUp()" :popUpTitle="matchSelected.game_ID" :match="matchSelected"/>
</template>

<style scoped>
    /* Estil de la taula */
    table {
        border-collapse: separate;
        width: 100%;
        flex: 1;
        margin-top: 4vh;
    }

    /* Casella talua estil */
    th {
        font-size: 1vh;
        text-align: center;
        color: #362864;
    }

    /* Estil contenidor */
    .playersContent {
        display: flex;
        width: 100%;
        margin: 1vh;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: flex-start;
        max-height: 70vh;
        overflow: auto;
    }

    /* Estil botó  */
    button {
        color: white;
        background-color: #362864;
        height: auto;
        width: auto;
        height: 4vh;
        font-size: 1.5vh;
        border: none;
    }

    /* estil telefons */
    @media (max-width: 900px) {
        .playersContent {
            margin: 0;
            max-width: 40vh; /* Definim width per si sobresurt mostrar opció d'scroll */
            overflow-x: auto;
            max-height: 60vh;
        }


        button {
            height: 3vh;
            width: auto;
            font-size: 1vh;
        }

    }
</style>
