<script setup lang="ts">
import NavBar from './components/Layout/NavBar.vue';
import { onMounted } from 'vue';
import { useAuthStore } from './stores/storeAuth';

const storeAuth=useAuthStore();

onMounted(()=>{
  storeAuth.init()
})

</script>

<template>
  <NavBar />
  <RouterView />
</template>