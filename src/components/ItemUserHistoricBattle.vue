<script>
    export default {
        props: {
            player: Object,
        },
    }

</script>

<template>
    <div class="uProfile">
        <img :src="player.imgSrc" alt=""/>
        <span>{{player.name}}</span>
    </div>
</template>

<style scoped>
    .uProfile {
        margin: 1vmax;
        width: 12vmax;
        height: 5vmax;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    span {
        margin-left: 1vmax;
        font-size: 1.3vmax;
    }

    img {
        width: 4vmax;
    }

    @media (max-width: 900px) {

        img {
            display: none;
        }

        span {
            margin: 0;
            font-size: 1vmax;
        }
        
    }

</style>
