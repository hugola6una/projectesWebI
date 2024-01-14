<script setup>

</script>

<template>
    <article class="game" >
        <p>GAME#0</p>
        <p>CREATOR#0</p>
        <p>FINISHED</p>
        <p>DD/MM/YYYY</p>
        <p>DD/MM/YYYY</p>
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
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Deinim aixi perque el nom ocupi una major part */
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
