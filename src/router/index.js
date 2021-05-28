import { createRouter, createWebHistory } from 'vue-router'
import ResultsList from '../pages/ResultsList.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/', redirect: '/results' },
  {
    path: '/results',
    component: ResultsList
  },
  { path: '/:notFound(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
