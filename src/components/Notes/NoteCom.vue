<template>
    <div class="card mb-4 ">
        <div class="card-content">
            <div class="content"> {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ charachterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <!-- <RouterLink @click="Store.resetNote()" :to="`/editNote/${note.id}`" class="card-footer-item">Edit</RouterLink> -->
            <a  @click="Store.resetNote(), $router.push(`/editNote/${note.id}`)" class="card-footer-item">Edit</a>
            <a @click.prevent="Store.deleteNote(note.id)" href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>


<script setup lang="ts" >
import { computed } from 'vue';
import { useNotesStore } from '@/stores/storeNotes';

const charachterLength = computed(() => {
    let length = props.note.content.length;
    let description = length > 1 ? 'Charactures' : 'Characture';
    return ` ${length} ${description}`;
})

// _________________props____________
const props = defineProps(['note']);

// _______________________emits_______________
// const emit = defineEmits(["deleteHandle"])

// const deleteClicked=()=>{
//     emit('deleteHandle',props.note.id)
// }

// _____________________state/store___________
const Store = useNotesStore();

</script>