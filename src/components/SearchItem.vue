<script setup>
    // Libraries
    const emit = defineEmits(['input']);

    // Emiteix el valor de l'input
    function updateSearch() {
        emit('input', event.target.value);
    }
</script>

<template>
    <!-- Contenidor de search -->
    <nav class="search" >
        <!-- Imatge del icone search -->
        <img src="@/assets/images/icons/search.png" alt="searchIcon" class="searchIcon" />
        <!-- Input del search -->
        <input type="text" placeholder="Search" @input="updateSearch()">
    </nav>
</template>

<style scoped>
    /* estil del contenidor amb el buscador de search */
    .search {
        background-color: #CACAFB;
        margin-bottom: 2vh;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 7vh;
    }

    /* Estil input  */
    input {
        background: none;
        width: 100%;
        height: 100%;
        font-size: 3vh;
        border:none;
        border-bottom: 0.1vh solid #CACAFB;
    }

    /* Estil input sense outline  */
    input:focus {
        outline: none;
    }

    /* estil icone de cerca */
    .searchIcon {
        margin-left: 4vh;
        width: 5vh;
    }

    @media (max-width: 800px) {

    }
</style>
