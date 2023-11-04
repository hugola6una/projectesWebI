import { createRouter, createWebHistory } from 'vue-router'
import AccessViewView from '../views/AccessView.vue'
import CreatePlayerView from '../views/CreatePlayerView.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'access',
      component: AccessViewView
    },
    {
      path: '/create-player',
      name: 'CreatePlayer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => CreatePlayerView
    },
    {
      path: '/login-player',
      name: 'LoginPlayer',
      component: () => LoginView
    },
  ]
})

export default router
