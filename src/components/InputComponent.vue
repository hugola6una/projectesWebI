<script>
    export default {
        props: {
            inputType: String,
            inputPlaceholder: String
        }
    }
</script>

<template>
    <input :type="inputType" :placeholder="inputPlaceholder" autocomplete=""/>
</template>

<style scoped>
    input {
        display: flex;
        margin-top: 1vmax;
        height: 4vmax;
        width: 35vmax;
        font-size: 2vmax;
        box-sizing: border-box;
        color: #362864;
        padding: 1vmax;
        border: none;
        border-bottom: 0.1em solid #362864;
    }

    input:focus {
        outline: 0.1em solid #362864;
    }

    input::placeholder {
        color: #362864;
    }

    @media (max-width: 900px) {
        input {
            background: transparent;
            color: white;
            border: 0.1em solid white
        }

        input:focus {
            outline: 0.1em solid #ffffff;
        }

        input::placeholder {
            color: #ffffff;
        }
        
    }
</style>