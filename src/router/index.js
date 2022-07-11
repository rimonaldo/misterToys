import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/home.vue'
import toyView from '../views/toy-app.vue'
import toyDetails from '../views/toy.details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/toy',
      name: 'toy',
      component: toyView,
    },
    {
      path: '/details/:toyId',
      name: 'details',
      component: toyDetails,
    },


  ]
})

export default router
