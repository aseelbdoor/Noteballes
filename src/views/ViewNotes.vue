<template>
    <div class="notes m-5 container">
        <AddEditNote ref="addEditNoteRef">
            <template v-slot:buttons>
                <button @click.prevent="addNote" :disabled="!Store.newNote" class="button is-success">Add Note</button>
            </template>
        </AddEditNote>
        <NoteComponent v-for="note in Store.notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import NoteComponent from '@/components/Notes/NoteCom.vue';
import { useNotesStore } from '@/stores/storeNotes';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

const Store = useNotesStore();
const addEditNoteRef=ref();

const addNote = () => {
    Store.addNote(Store.newNote)
    Store.newNote = '';
    addEditNoteRef.value.focusTextarea()
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
    /* background-color: rgb(91, 107, 91); */
    padding: 3%;
    border-radius: 5px;
}

.card {
    width: 800px !important;
}
</style>