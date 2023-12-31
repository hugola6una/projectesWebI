<script setup>
    // Librairies   

    defineProps(['attack']);
    
</script>

<template>
    <article :class="{ 'item': true, sel: false }" @click="toggleSelection">
        <img src="../assets/images/icons/swordIcon.png" alt="attackIcon" class="iSword" />
        <p class="name">{{ attack.attack_ID }}</p>
    </article>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    width: 8vmax;
    height: 6vmax;
    border: none;
    padding: 1vmax;
    margin: 1vmax;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.item:hover {
    background-color: #80547f60;
    cursor: pointer;
}

.item img {
    margin-top: 1.5vmax;
    width: 4vmax;
}
.name {
    color: #80547f;
    font-size: 1.2vmax;
}

.sel {
    background-color: #80547f;
}
</style>
