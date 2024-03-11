import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '@/ts/firebase'
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import router from '@/router'
import { useNotesStore } from './storeNotes'

export const useAuthStore = defineStore('storeAuth', () => {
  const User: Ref<{ id: string | null; email: string | null }> = ref({ id: null, email: null })
  // const User={id:'',email:''}
  const store = useNotesStore()

  const init = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        User.value.id = user.uid
        User.value.email = user.email!
        store.init()
        router.push('/')
      } else {
        // User is signed out
        clearUser()
        router.replace('/auth')
      }
    })
  }

  type credentials = { email: string; password: string }

  const registerUser = async (credentials: credentials) => {
    //  return a promise that resolves to the user object
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user
        // console.log(user)
      })
      .catch((error) => {
        console.log(error.code + ' : ' + error.message)
      })
  }

  const login = (credentials: credentials) => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // console.log(user)
      })
      .catch((error) => {
        console.log(error.code + ' : ' + error.message)
      })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log('Logout')
        clearUser()
      })
      .catch((error): void => {
        console.log(error.message)
      })
  }

  const clearUser = () => {
    User.value.id = null
    User.value.email = null
    store.clearNotes()
  }

  return {
    registerUser,
    logOut,
    login,
    init,
    User
  }
})
