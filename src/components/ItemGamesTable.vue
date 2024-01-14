<script setup>
    // Librairies
    import { formDate } from '@/services/Auxiliar.js' // Funció per formatejar la data

    const props = defineProps(['match']); // rep props del parent
</script>

<template>
    <tr>
        <!-- Capmp amb el nom del match -->
        <td>{{ props.match.game_ID }}</td>
        <!-- CAmp amb la mida del match -->
        <td>{{ props.match.size }}x{{ props.match.size }}</td>
        <!-- Camp amb la data de creació del match passantli format-->
        <td>{{ formDate(props.match.creation_date) }}</td>
        <!-- Camp indicant si el match esta acabat -->
        <td>{{ props.match.finished }}</td>
        <!-- Camp infomant s ies podem unir encara -->
        <td>{{ !props.match.start }}</td>
    </tr>
</template>

<style scoped>
    /* Format de la entrada a la taula */
    td {
        font-size: 1vh;
        text-align: center;
        color: #362864;
    }

    tr {
        height: 8vh;
    }

    /* En cas de hover mdoifquem fons i color de la casella  */
    tr:hover {
        td {
            background-color: #362864;
            color: white;
        }
    }

</style>