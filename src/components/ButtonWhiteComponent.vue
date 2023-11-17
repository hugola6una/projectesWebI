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
        background: none;
        margin-top: 1vmax;
        width: 35vmax;
        height: 4vmax;
        border: 0.1em solid #362864;
        font-size: 1.5vmax;
        box-sizing: border-box;
    }

    button:hover {
        background: #80547f;
        color: white;
    }

    @media (max-width: 900px) {
        button {
            background: #362864;
            color: white;
            border: 0.1em solid white
        } 
    }
</style>