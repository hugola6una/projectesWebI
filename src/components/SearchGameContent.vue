<script setup>
    import { ref, onMounted} from 'vue';  
    // Libraries
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function navigateToPlay() {
    router.push('/play');
    }
    // API request
    import { enterGame } from '@/services/api/GamesRequest.js';


    import ItemGames from '@/components/ItemGames.vue';
    import SearchItem from '@/components/SearchItem.vue';
    
    const props = defineProps(['gamesList']);

    // Funcions cridades en el montatge del component
    onMounted(async() => {
        filteredGames.value = props.gamesList;
    });
    
    // Variables
    const filteredGames = ref([]);
    

     // Funció per filtrar els jugadors
     function updateSearch(value) {
        filteredGames.value = props.gamesList.filter(games =>
            games.game_ID.toLowerCase().includes(value.toLowerCase())
        );
    }
    
    // Funció per entrar a game
    async function joinGame (game_ID) { 
        const token = JSON.parse(localStorage.getItem('player')).token
        try {
            await enterGame(token, game_ID);
        } catch (error) {
            console.log(error);
        } finally {
            navigateToPlay();
        }
    }

</script>

<template>
    <div id="defaultContent" class="gameContent">
        <h3>Search available games</h3>
            <SearchItem @input="updateSearch"/>
        <section class="games">
            <ItemGames v-for="game in filteredGames"  @click="joinGame(game.game_ID)" :key="game.game_ID" :game="game" />
        </section>
    </div>
   
</template>

<style scoped>
    .gameContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
    }

    .gameContent h3{
        color: #362864;
        font-size: 3vmax;
    }
    .games {
        overflow-y: auto;
        max-height: 46vh;
    }

    .search {
        width: 100%;
    }

    button {
        color: white;
        background-color: #362864;
        height: 7vmax;
        width: 20vmax;
        font-size: 3vmax;
        border: none;
        margin-top: 2vh;
        margin-bottom: 2vh;
        margin: 2vh;
    }
    @media (max-width: 800px) {
    .gameContent {
        max-height: 60vh;
    }
    button {
        color: white;
        background-color: #362864;
        height: 7vmax;
        width: 25vmax;
        font-size: 3vmax;
        border: none;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }
    
}
</style>
