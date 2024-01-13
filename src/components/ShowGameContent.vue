<script setup>

    // Librairies
    import { ref, onMounted, watch} from 'vue';

   import ItemGames from '@/components/ItemGames.vue';

   const props = defineProps(['gamesList']);

   // Funcions cridades en el montatge del component
   onMounted(() => {
        games.value = props.gamesList;
    });

     // Controla els canvis de la llista de jugadors
     watch(() => props.gamesList, () => {
        games.value = props.gamesList;
    });

    const games = ref([]);

</script>

<template>
    <div id="defaultContent" class="gameContent">
        <h3>Select a game</h3>
        <section class="games">
            <ItemGames v-for="game in games" :key="game.game_ID" :game="game" />
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
        max-height: 55vh;
    }
    button {
      color: white;
      background-color: #362864;
      height: 5vmax;
      width: 20vmax;
      font-size: 3vmax;
      border: none;
      margin-left: 2vh;
    }
    button:hover {
    background-color: #634864; 
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
