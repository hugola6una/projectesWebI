<script setup>

    import UserHisotricGame from '../components/ItemUserHistoricBattle.vue';

</script>

<template>
    <div class="match" > 
        <UserHisotricGame />
        <h2>VS</h2>
        <UserHisotricGame />
        <p>8x8</p>
        <p>DD/MM/YYYY</p>
    </div>
</template>

<style scoped>
.match {
    border: 0.1vmax solid black;
    display: flex;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
}

h2 {
    font-size: 2vmax;
    font-weight: bold;
}

p {
    font-size: 1vmax;   
}

</style>
