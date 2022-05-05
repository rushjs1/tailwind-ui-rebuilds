import { createRouter, createWebHistory } from 'vue-router'
import GithubView from '@/views/GithubView.vue'
import HomeView from '@/views/HomeView.vue'
import SpotifyView from '@/views/SpotifyView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/github-ui',
      name:'github-ui',
      component: GithubView
    },
    {
      path: '/spotify-ui',
      name: 'spotify-ui',
      component: SpotifyView
    }
  ]
})

export default router
