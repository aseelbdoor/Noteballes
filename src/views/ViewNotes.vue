<template>
    <div class="notes m-5 container">
        <div class="form mb-4">
            <div class="field ">
                <div class="control">
                    <textarea name="textarea" class="textarea" v-model="newNote" placeholder="Add a new note" ref="newNoteRef"></textarea>
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button @click.prevent="addNote" :disabled="!newNote" class="button is-success">Add Note</button>
                </div>
            </div>
        </div>
        <NoteComponent v-for="note in Store.notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import NoteComponent from '@/components/Notes/NoteCom.vue';
import { useNotesStore } from '@/stores/storeNotes';

const newNoteRef=ref();
const newNote=ref('');
const Store=useNotesStore();

const addNote=()=>{
    Store.addNote(newNote.value)
    newNote.value='';
    newNoteRef.value.focus();
};

</script>

<style>
.notes {
    display: grid;
    justify-content: center !important;
    align-items: center;
}

.form {
    width: 700px !important;
    margin: auto;
    background-color: rgb(91, 107, 91);
    padding: 3%;
    border-radius: 5px;
}

.card {
    width: 800px !important;
}
</style>