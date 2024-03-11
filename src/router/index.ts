import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotesVue from '@/views/ViewNotes.vue'
import ViewStatsVue from '@/views/ViewStats.vue'
import ViewEditNoteVue from '@/views/ViewEditNote.vue'
import ViewAuth from '@/views/ViewAuth.vue'
import { useAuthStore } from '@/stores/storeAuth'


const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotesVue
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStatsVue
  },
  {
    path: '/editNote/:id',
    name: 'editNote',
    component: ViewEditNoteVue
  },
  {
    path: '/auth',
    name: 'auth',
    component: ViewAuth
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from) => {
  const store=useAuthStore()
  if (
    // make sure the user is authenticated
    !store.User.id &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'auth') {
    // redirect the user to the login page
    return { name: 'auth' }
  }
  if (store.User.id && to.name==='auth'){
    return  false
  }
})

export default router
