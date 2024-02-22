<template>
    <div class="edit-note">
        <h1>Edit Page {{ $route.params.id }}</h1>
        <AddEditNote bgColor="link">
            <template v-slot:buttons>
                <div class="but">
                    <button @click="Store.resetNote(), $router.back()" class="button is-white">Cancel</button>
                <button @click.prevent="saveNote" :disabled="!Store.newNote" class="button is-success">Save Note</button>
                </div>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup lang="ts">
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useNotesStore } from '@/stores/storeNotes';

const Store = useNotesStore();
const route=useRoute();
const router=useRouter();
const content=Store.getNoteContnt(String(route.params.id));
Store.newNote=content

const saveNote=()=>{
    Store.updateNote(String(route.params.id),Store.newNote)
    Store.resetNote()
    router.push('/')
}

</script> 

<style>
.but{
    display:  flex;
    justify-content: space-between;
    width: 200px;
    /* border: 1px solid red; */
}
</style>