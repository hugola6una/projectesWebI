<script>
    export default {
        props: {
            buttonText: String
        }
    }
</script>

<template>
    <button>{{ buttonText }}</button>
</template>

<style scoped>
    button {
        justify-content: center;
        align-items: center;
        display: flex;
        background: #362864;
        color: white;
        margin-top: 1vmax;
        width: 35vmax;
        height: 4vmax;
        border: none;
        font-size: 1.5vmax;
        box-sizing: border-box;
    }

    button:hover {
        background: #80547f;
        color: white;
    }

    @media (max-width: 900px) {
        button {
            background: white;
            color: #362864
        } 
    }
</style>