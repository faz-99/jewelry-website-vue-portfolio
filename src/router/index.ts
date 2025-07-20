import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/la-maison', component: { template: '<div><h1>La Maison</h1><p>Content here...</p></div>' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
