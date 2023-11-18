<script >
    import ItemMatch from '../components/ItemMatch.vue';
    import Popup from '../components/PopUp.vue';

    export default {
        components: {ItemMatch, Popup},
        data () {
            return {
                showPopup: false,
                popUpTitle: 'MATCH MARC VS PERE DD/ MM/YYYY',
                matches: [
                    { id: 1, player1: { name: 'PLAYER', imgSrc: 'src/assets/images/icons/playerdefault.png' }, player2: { name: 'PERE', imgSrc: 'src/assets/images/icons/playerdefault.png'}, size: '8',date: 'DD/MM/YYYY', result: 'WON' },
                    { id: 2, player1: { name: 'PLAYER', imgSrc: 'src/assets/images/icons/playerdefault.png' }, player2: { name: 'DAVID', imgSrc: 'src/assets/images/icons/playerdefault.png'}, size: '8',date: 'DD/MM/YYYY', result: 'LOSE' },
                    { id: 3, player1: { name: 'PLAYER', imgSrc: 'src/assets/images/icons/playerdefault.png' }, player2: { name: 'EMMA', imgSrc: 'src/assets/images/icons/playerdefault.png'}, size: '8',date: 'DD/MM/YYYY', result: 'WON' },
                    { id: 4, player1: { name: 'PLAYER', imgSrc: 'src/assets/images/icons/playerdefault.png' }, player2: { name: 'JAMES', imgSrc: 'src/assets/images/icons/playerdefault.png'}, size: '8', date: 'DD/MM/YYYY', result: 'LOSE' },
                    { id: 5, player1: { name: 'PLAYER', imgSrc: 'src/assets/images/icons/playerdefault.png' }, player2: { name: 'LUCY', imgSrc: 'src/assets/images/icons/playerdefault.png'}, size: '8', date: 'DD/MM/YYYY', result: 'WON' },
                    { id: 6, player1: { name: 'PLAYER', imgSrc: 'src/assets/images/icons/playerdefault.png' }, player2: { name: 'SAM', imgSrc: 'src/assets/images/icons/playerdefault.png'}, size: '8', date: 'DD/MM/YYYY', result: 'LOSE' },
                    { id: 7, player1: { name: 'PLAYER', imgSrc: 'src/assets/images/icons/playerdefault.png' }, player2: { name: 'EMILY', imgSrc: 'src/assets/images/icons/playerdefault.png'}, size: '8', date: 'DD/MM/YYYY', result: 'WON' },
                    { id: 8, player1: { name: 'PLAYER', imgSrc: 'src/assets/images/icons/playerdefault.png' }, player2: { name: 'OLIVER', imgSrc: 'src/assets/images/icons/playerdefault.png'}, size: '8', date: 'DD/MM/YYYY', result: 'LOSE' },
                    { id: 9, player1: { name: 'PLAYER', imgSrc: 'src/assets/images/icons/playerdefault.png' }, player2: { name: 'SOPHIA', imgSrc: 'src/assets/images/icons/playerdefault.png'}, size: '8', date: 'DD/MM/YYYY', result: 'WON' },
                ]
            }
        },
        computed: {
            matchesWon() {
                return this.matches.filter(match => match.result === 'WON').length;
            },
            totalMatches() {
                return this.matches.length;
            }
        },
        methods: {
            openPopup() {
                this.showPopup = true;
            },
            closePopup() {
                this.showPopup = false;
            }
        }
    }
</script>

<template>
    <article class="gamesContent">
        <h3>RATIO: {{matchesWon}} / {{ totalMatches }}</h3>
        <section class="games">
        <ItemMatch v-for="match in matches" :key="match.id" :match="match" :class="match.result === 'WON' ? 'won' : 'lose'" @click="openPopup"/>
        </section>
        <Popup v-if="showPopup" @closed="closePopup" :popUpTitle="popUpTitle" />
    </article>
</template>

<style scoped>

    .gamesContent {
        display: flex;
        flex-direction: column;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
        width: 100%;
        max-height: 60vh;
    }

    .gamesContent h3{
        color: #362864;
        font-size: 3vmax;
    }
    .games {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    .won {
        background-color: rgb(107, 173, 107);
    }

    .lose {
        background-color: rgb(189, 99, 99);
    }

    @media (max-width: 800px) {
    .gamesContent {
        max-height: 60vh;
    }
}
</style>
