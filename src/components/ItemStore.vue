<script setup>
    // Librairies   

    defineProps(['attack', 'isSelected']);
    
</script>

<template>
    <!-- Contigut article representa el item -->
    <article :class="{ 'item': true, sel: isSelected }" @click="$emit('toggleSelection')">
        <img src="../assets/images/icons/swordIcon.png" alt="attackIcon" class="iSword" />
        <p class="name">{{ attack.attack_ID }}</p>
    </article>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    width: 10vh;
    border: none;
    padding: 1vh;
    margin: 1vh;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.item:hover {
    background-color: #80547f60;
    cursor: pointer;
}

.item img {
    margin-top: 2vh;
    width: 5vh;
}
.name {
    width: 100%;
    color: #80547f;
    font-size: 1.5vh;
    word-wrap: break-word;
}

.sel {
    background-color: #80547f;
}

.sel p {
    color: white;
}
</style>
