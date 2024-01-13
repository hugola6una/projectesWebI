import { createRouter, createWebHistory } from 'vue-router'
import AccessViewView from '@/views/AccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Al ser l'incial no farem que sigui lazy loaded
      name: 'access',
      component: AccessViewView
    },
    // La resta si perque no carreguin en un inci, aixo donarra un millo rendiment
    {
      path: '/create-player',
      name: 'createPlayer',
      component: () => import('@/views/CreatePlayerView.vue')
    },
    {
      path: '/login-player',
      name: 'loginPlayer',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue')
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('@/views/RankingView.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/views/StoreView.vue')
    },
    {
      path: '/my-attacks',
      name: 'my-attacks',
      component: () => import('@/views/MyAttacksView.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('@/views/GamesView.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('@/views/PlayView.vue'),
    },
    {
      path: '/games-administration',
      name: 'games-administration',
      component: () => import('@/views/GameAdministrationView.vue')
    }
  ]
})

export default router
