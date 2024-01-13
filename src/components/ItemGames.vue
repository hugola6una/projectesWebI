<script setup>

    const props = defineProps(['game']); // Rep per props el game seleccionat

</script>

<template>
    <article class="game" >
        <p>{{props.game.game_ID}}</p>
        <p>{{props.game.creation_date}}</p>
        <p>{{props.game.HP_max}}</p>
    </article>
</template>

<style scoped>
.game {
        background-color: #EFEFFE;
        width: 100%;
        height: 10vh;
        display: grid;
        align-items: center;
        justify-content: center;
        text-align: center;
        grid-template-columns: 1fr 1fr 1fr; /* Deinim aixi perque el nom ocupi una major part */
        cursor: pointer;
}

.game:active {
    background-color: #CACAFB;
}


p {
    font-size: 2vh;
    color: #362864; 
    margin: 0;  
}
@media (max-width: 900px) {
        
        /* Estil XP */
        p {
            font-size: 1vh;   
        }
    }
</style>
