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
import GameAdministrationView from '../views/GameAdministrationView.vue'
import PlayView from '../views/PlayView.vue'


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
      component: CreatePlayerView
    },
    {
      path: '/login-player',
      name: 'loginPlayer',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingView
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/my-attacks',
      name: 'my-attacks',
      component: MyAttacksView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView
    },
   {
      path: '/play/:name/:size/:hp',
      name: 'play',
      component: PlayView,
    },
    {
      path: '/games-administration',
      name: 'games-administration',
      component: GameAdministrationView
    }
  ]
})

export default router
