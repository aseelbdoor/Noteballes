<template>
    <div class="auth">
        <div class="tabs is-centered">
            <ul>
                <li :class="{ 'is-active': !register }">
                    <a @click.prevent="register = false">Login</a>
                </li>
                <li :class="{ 'is-active': register }">
                    <a @click.prevent="register = true">Register</a>
                </li>
            </ul>
        </div>
        <div class="card">
            <div class="card-content">
                <div class="title has-text-centered">
                    {{ formTitle }}
                </div>
                <form @submit.prevent="onSubmit" >
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" v-model="credentials.email" type="email" placeholder="e.g. alexsmith@gmail.com">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" v-model="credentials.password" type="password" placeholder="Enter a password">
                        </div>
                    </div>
                    <div class="field is-grouped is-grouped-right">
                        <p class="control">
                            <button class="button is-primary">
                                {{ formTitle }}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref, computed, reactive } from 'vue'
import { useAuthStore } from '@/stores/storeAuth';

const register: Ref<boolean> = ref(false)

const storeAuth = useAuthStore()

// Form Title
const formTitle = computed(() => {
    return register.value ? "Register" : "Login";
})

const credentials=reactive({
    email:"",
    password:""
})

const onSubmit=async ()=>{
    if (!credentials.email || !credentials.password){
        alert( "Please enter both Email and Password")
    }
    else{
        if (register.value){
            //  Register the user
            await storeAuth.registerUser(credentials)
        }
        else{
            //  Log in the user
            storeAuth.login(credentials)
        }
        credentials.email=""
        credentials.password=""
    }
}

</script>

<style scoped>
.auth {
    margin-top: 3%;
}

.auth li a {
    color: aliceblue;
}

.auth a,
.auth ul {
    border-bottom-color: #363636;
}

.auth li.is-active a {
    color: rgb(127, 255, 174);
    background-color: hsla(160, 100%, 37%, 0.2);
    border-bottom: 2px solid rgb(127, 255, 174) !important;
}

.auth a:hover {
    border-bottom: 2px solid rgb(168, 176, 171) !important;
}

.auth .card {
    margin: 0 auto;
    max-width: 500px;
}
</style>