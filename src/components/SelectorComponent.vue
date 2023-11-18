<script>
    export default {
        props: {
            imageSrc: String,
            strAlt: String,
            isSelected: Boolean
        },
    }
</script>

<template>
    <button :class="{ active: isSelected }">
        <img :src="imageSrc" alt="">
        <span>{{strAlt}}</span>
    </button>
</template>

<style scoped>
    button {
        border: 0.1em solid #362864;
        height: 5vmax;
        width: 15vmax;
        font-size: 1.3vmax;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    button.active {
        background: #80547f;
        color: white;
    }

    img {
        width: 4vmax;
        margin-right: 1vmax;
    }

    @media (max-width: 900px) {
        button {
            width: 8vmax;
        }

        span {
            display: none;
        }
        
    }

</style>