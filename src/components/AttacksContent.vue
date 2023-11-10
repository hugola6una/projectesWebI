<script setup>
    import ItemAttack from '../components/ItemAttack.vue';
</script>

<template>
    <div class="attacksContent">
        <h1>Colection</h1>
        <section class="items">
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack class="sel" />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack class="sel" />
            <ItemAttack />
            <ItemAttack class="sel" />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack />
            <ItemAttack class="sel" />
            <ItemAttack />
            <ItemAttack class="sel" />
            <ItemAttack />
            
            
        </section>
    </div>
</template>

<style scoped>

.attacksContent {
    margin: 2vmax;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    background-color: white;
    max-height: 70vh;
    
}
.attacksContent h1 {
    margin-top: 3vmax;
    font-size: 2.5vmax;
    color: #362864; 
}

.items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
}

.sel {
    background-color: #80547f;
}

@media (max-width: 800px) {
    .attacksContent {
        max-height: 60vh;
    }
}
</style>
