<script setup>
</script>

<template>
    <div class="logo">
        <img src="../assets/images/logoRobotArena.png" alt="Logo">
        <div class="titles">
            <h1>ROBOT</h1>
            <h1>BATTLE</h1>
            <h2>ARENA</h2>
        </div>
    </div>
</template>

<style scoped>
    .logo {
        height: 100%;
        color: white;
        display: flex;
        flex-direction: column;;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to right, #633FC3, #362864);
    }

    .titles {
        text-align: center;
    }

    .logo img {
        width: 30vh;
    }

    .titles h1 {
        margin: 0;
        font-size: 7vh;
    }

    .titles h2 {
        margin: 0;
        font-size: 6vh;
    }

    @media (max-width: 900px) {
        .logo {
            width: 100%;
            background: #362864;
            padding-top: 10vh;
            text-align: center;
            justify-content: center;
        }

        .logo img {
            width: 15vh;
        }

        .logo h1 {
            font-size: 6vh;
        }
        
    }
</style>