import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotesVue from '@/views/ViewNotes.vue'
import ViewStatsVue from '@/views/ViewStats.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
