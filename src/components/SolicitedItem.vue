<script setup>
    import { defineProps } from 'vue';
    defineProps(['item']);

</script>

<template>
    <div class="solicitedItem">  
        <img :src="item.image" alt="attackIcon" class="iSword" />
        <h3>{{ item.name }}</h3>
        <p>{{ item.price }}</p>     
    </div>
</template>

<style scoped>
.solicitedItem {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4vmax;
    list-style-type: none;
}

.attackInfo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

.quantityAttack {
    width: 100%;
    text-align: center;
}


.solicitedItem img {
    width: 6vmax;
    justify-self: start;
    align-self: flex-start;
}

h3 {
    font-size: 2vmax;
    justify-self: center;
}

p {
    margin-right: 7vmax;
    font-size: 2vmax;
}
</style>