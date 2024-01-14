<script setup>
    // Llibreries   
    defineProps(['attack', 'isSelected']);
    
</script>

<template>
    <!-- Contigut article representa el item -->
    <article :class="{ 'item': true, sel: isSelected }" @click="$emit('toggleSelection')">
        <img src="@/assets/images/icons/swordIcon.png" alt="attackIcon" class="iSword" />
        <p class="name">{{ attack.attack_ID }}</p>
        <div class="container">
            <img src="@/assets/images/icons/coinIcon.png" alt="Coin" class="coin"/>
            <p class="price" v-bind:textContent="attack.price"></p>
        </div>
    </article>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    width: 12vh;
    border: none;
    padding: 0.5vh;
    margin: 0.5vh;
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

.price {
    width: 50%;
    color: #ffffff;
    font-size: 1vw;
    word-wrap: break-word;
    align-items: left;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #362864;
    width: 100%;
}

.sel {
    background-color: #80547f;
    border: 2px;
    border-color: #362864;
}

.sel p {
    color: white;
}
</style>
