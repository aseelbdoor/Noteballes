<script setup lang="ts">
import NavBar from './components/Layout/NavBar.vue';
import { useNotesStore } from './stores/storeNotes';
import {onMounted} from 'vue';

const store=useNotesStore();

onMounted(()=>{
  store.getNotesFromDB()
})

</script>

<template>
  <NavBar />
  <RouterView />
</template>