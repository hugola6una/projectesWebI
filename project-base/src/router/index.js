import { createRouter, createWebHistory } from 'vue-router'
import AccessViewView from '../views/AccessView.vue'
import CreatePlayerView from '../views/CreatePlayerView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import RankingView from '../views/RankingView.vue'
import StoreView from '../views/StoreView.vue'
import MyAttacksView from '../views/MyAttacksView.vue'
import GamesView from '../views/GamesView.vue'


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
      name: 'createPlayer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => CreatePlayerView
    },
    {
      path: '/login-player',
      name: 'loginPlayer',
      component: () => LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: () => HomeView
    },
    {
      path: '/user',
      name: 'user',
      component: () => UserView
    },
    {
      path: '/ranking',
      name: 'reanking',
      component: () => RankingView
    },
    {
      path: '/store',
      name: 'store',
      component: () => StoreView
    },
    {
      path: '/my-attacks',
      name: 'myAttacks',
      component: () => MyAttacksView
    },
    {
      path: '/games',
      name: 'games',
      component: () => GamesView
    },
    
  ]
})

export default router
