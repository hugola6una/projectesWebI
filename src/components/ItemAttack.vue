<script setup>


</script>

<template>
    <article class="item" > <!-- TODO: Tema breu descripcio en cas de hover o click (encara per decidir)  -->
        <img src="..\assets\images\icons\myAttacksIcon.png" alt="attackIcon" class="iSword" />
        <div class="name">AttackX</div>
    </article>
</template>

<style scoped>
.item {
    width: 8vmax;
    height: 6vmax;
    border: 0.1em solid #ccc;
    padding: 1vmax;
    margin: 1vmax;
    text-align: center;
}

.item img {
    width: 4vmax;
}
.name {
    font-size: 1.2vmax;
}
</style>
