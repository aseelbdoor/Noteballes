<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item is-size-4 is-family-monospace has-text-weight-bold">
                Noteballs
            </div>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                :class="{ 'is-active': showMobileNav }" @click.prevent="showMobileNav = !showMobileNav">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
            <div class="navbar-start">
                <button 
                v-if="authStore.User.id"
                @click="logout" class="button is-small bold has-text-weight-bold is-success mt-3 ml-3" >
                    Logout
                </button>
            </div>
            <div class="navbar-end">
                <RouterLink @click="showMobileNav=false" to="/" class="navbar-item" active-class="is-active">Notes</RouterLink>

                <RouterLink @click="showMobileNav=false" to="/stats" class="navbar-item" active-class="is-active">Stats</RouterLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useAuthStore } from "@/stores/storeAuth";

const showMobileNav = ref(false)
const  authStore = useAuthStore()

const logout=()=>{
    showMobileNav.value=false
    authStore.logOut()
}

</script>
