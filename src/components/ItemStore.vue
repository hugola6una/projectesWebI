<script setup>
import { ref, defineProps, getCurrentInstance } from 'vue';

const props = defineProps(['initialSelected', 'itemName', 'itemPrice', 'itemImage', 'itemQuantity']);
const selected = ref(props.initialSelected);

const { emit } = getCurrentInstance();

const toggleSelection = () => {
    selected.value = !selected.value;
    emit('itemSelected', { selected: selected.value, price: props.itemPrice, name: props.itemName, image: props.itemImage, quantity: props.itemQuantity });
};
</script>

<template>
    <article :class="{ 'item': true, sel: selected }" @click="toggleSelection">
        <img :src="itemImage" alt="attackIcon" class="iSword" />
        <p class="name">{{ itemName }}</p>
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
    border: 0.1em solid #80547f;
    background-color: #80547f60;
    cursor: pointer;
}

.item img {
    margin-top: 1.5vmax;
    width: 4vmax;
}
.name {
    font-size: 1.2vmax;
}

.sel {
    background-color: #80547f;
}
</style>
