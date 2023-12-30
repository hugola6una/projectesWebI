<script setup>
    // Libraries
    const emit = defineEmits(['input']);

    function updateSearch() {
        emit('input', event.target.value);
    }
</script>

<template>
    <article class="search" >
        <img src="" alt="searchIcon" class="searchIcon" />
        <input type="text" placeholder="Search" @input="updateSearch()">
    </article>
</template>

<style scoped>
    .search {
        background-color: #CACAFB;
        margin-bottom: 2vh;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    input {
        background: none;
        width: 35vmax;
        height: 3vmax;
        font-size: 1.5vmax;
        border:none;
        border-bottom: 0.1em solid #CACAFB;
    }


    .searchIcon {
        height: 3vh;
        width: 3vh;
    }

    @media (max-width: 800px) {

        input {
        background: none;
        width: 35vmax;
        height: 2vmax;
        font-size: 1.5vmax;
        border-bottom: 0.1em solid #CACAFB;
        }
    }
</style>
