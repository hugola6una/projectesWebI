<script setup>
    import ItemGames from '../components/ItemGames.vue';
    import SearchItem from '../components/SearchItem.vue';
</script>

<template>
    <div id="defaultContent" class="gameContent">
        <h3>Search available games</h3>
        <section class="search">
            <SearchItem/>
        </section>
        <section class="games">
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
        </section>
        <button @click="joinContent()">JOIN</button>
    </div>

    <div id="alternateContent" class="gameContent" style="display: none;">
        <h3>ARE YOU SURE YOU WANT TO JOIN “GAME#0”?</h3>
        <div class="buttonsContent">
        <button>Confirm</button>
        <button>Cancel</button>
        </div>
    </div>  

</template>

<script>
 function joinContent() {
    var defaultContent = document.getElementById('defaultContent');
    var alternateContent = document.getElementById('alternateContent');

    if (defaultContent.style.display !== 'none') {
      defaultContent.style.display = 'none';
      alternateContent.style.display = 'block';
    } else {
      defaultContent.style.display = 'block';
      alternateContent.style.display = 'none';
    }
  }
</script>

<style scoped>
.buttonsContent {
        margin-top: 25vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .gameContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 1vmax;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
        max-height: 76.5vh;
    }

    .gameContent h3{
        color: #362864;
        font-size: 3vmax;
    }
    .games {
        margin-top: 0%;
        width: 100%;
        height: 200%;
        overflow-y: auto;
    }

    .search {
        width: 100%;
        height: 50%;
        margin-bottom: 0%;
        overflow-y: auto;
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
    .buttonsContent button {
        height: 4vmax;
        width: 15vmax;
        font-size: 2vmax;
    }
}
</style>
