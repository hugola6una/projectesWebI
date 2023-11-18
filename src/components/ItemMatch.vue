<script>
    import UserHisotricGame from '../components/ItemUserHistoricBattle.vue';

    export default {
        components: {UserHisotricGame},
        props: {
            match: Object,
        },
        methods: {
        }
    }
</script>

<template>
    <article class="match" > 
        <UserHisotricGame :player="match.player1"/>
        <h2>VS</h2>
        <UserHisotricGame :player="match.player2"/>
        <p>{{match.size}}x{{match.size}}</p>
        <p>{{ match.date }}</p>
    </article>
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
