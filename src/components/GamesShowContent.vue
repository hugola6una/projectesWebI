<script setup>
</script>

<template>
    <div class="playersContent">
            <table>
                <thead>
                    <tr>
                        <th>Filter By</th>
                        <th><button>FINISHED</button></th>
                        <th><button>CREATION DATE</button></th>
                        <th><button>END DATE</button></th>
                        <th><button>AVAILABLE</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>NOT FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>NOT FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>GAME#0</td>
                        <td>CREATOR#0</td>
                        <td>FINISHED</td>
                        <td>DD/MM/YYYY</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
</template>

<style scoped>

    table {
      border-collapse: separate;
      width: 100%;
      flex: 1;
    }

    th {
      font-size: 1vh;
      text-align: center;
      color: #362864;
    }

    tbody tr {
        cursor: pointer;
        margin: 0%;
    }

    tbody tr:active {
        background-color: #CACAFB;
    }

    td {
      font-size: 0.8vh;
      text-align: center;
      color: #362864;
      padding-top: 3vh;
      padding-bottom: 3vh;
    }
    .playersContent {
        display: flex;
        width: 100%;
        margin: 1vmax;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: flex-start;
        max-height: 76.5vh;
        overflow: auto;
    }

    button {
        color: white;
        background-color: #CACAFB;
        height: auto;
        width: auto;
        font-size: 1.5vh;
        border: none;
    }

    .playersContent h3{
        color: #362864;
        font-size: 1vmax;
    }

    .players {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    @media (max-width: 820px) {
    .playersContent {
        max-height: 60vh;
    }

    button {
        height: 3vmax;
        width: auto;
        font-size: 0.8vh;
    }

}
</style>
