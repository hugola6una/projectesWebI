<script>
</script>

<template>
    <div class="left">
        <img src="../assets/images/logoRobotArena.png" alt="Logo">
        <div class="titles">
          <h1>ROBOT</h1>
          <h1>BATTLE</h1>
          <h2>ARENA</h2>
        </div>
    </div>
</template>

<style scoped>
    .left {
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

    .left img {
        width: 20vmax;
    }

    .titles h1 {
        margin: 0;
        font-size: 4vmax;
    }

    .titles h2 {
        margin: 0;
        font-size: 3vmax;
    }

    @media (max-width: 900px) {
        .left {
            width: 100%;
            background: #362864;
            text-align: center;
            justify-content: center;
        }

        .left img {
            width: 5vmax;
        }

        .left h1 {
            font-size: 2vmax;
        }
        
    }
</style>