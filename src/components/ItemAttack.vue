<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(['initialSelected', 'itemName', 'price', 'nSelectedItems']);
const selected = ref(props.initialSelected);

const emits = defineEmits(['itemSelected']);

const handleClick = () => {
    console.log(props.nSelectedItems);
    if (props.nSelectedItems < 3 || selected.value) {
        selected.value = !selected.value;
        emits('itemSelected', { id: props.initialSelected, selected: selected.value, name: props.itemName, price: props.price });
    }
};


</script>

<template>
    <article :class="{ 'item': true, sel: selected }" @click="handleClick">
        <img src="..\assets\images\icons\swordIcon.png" alt="attackIcon" class="iSword" />
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
