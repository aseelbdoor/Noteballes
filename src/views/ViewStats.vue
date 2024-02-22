<template>
    <div class="stats">
        <table class="table">
            <thead>
                <tr>
                    <th>Stats</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ detail.numberOfNotes }}</td>
                </tr>
                <tr>
                    <td>Number of charachter of all notes</td>
                    <td>{{ detail.totalCharacterCount }}</td>
                </tr>
            </tbody>
        </table>
        <input type="text" v-auto-focus v-model="opinion" class="input" placeholder="Do you love Noteballes?" />
        <div><small class="feedback">Why?</small></div>
    </div>
</template>

<script setup lang="ts">
import { useNotesStore } from '@/stores/storeNotes';
import { vAutoFocus } from '@/directives/vAutofocas';
import { useWatchCharacters } from '@/use/useWatchChrachtures';
import {ref} from 'vue';

const store= useNotesStore();
const opinion= ref('');
const detail=store.notesDetails();

useWatchCharacters(opinion)

</script>

<style>
.stats{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.table{
    margin: 5% auto;
    width: 50%;
}
.stats .input{
    margin: auto !important;
    width: 50%;
}
.stats div{
    width: 50%;
}
.stats div .feedback{
    text-align: end;
}

.red{
    color: red;
}

.green{
    color: green;
}
</style>