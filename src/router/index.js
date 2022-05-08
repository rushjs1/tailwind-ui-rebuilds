import { createRouter, createWebHistory } from 'vue-router'
import GithubView from '@/views/GithubView.vue'
import HomeView from '@/views/HomeView.vue'
import SpotifyView from '@/views/SpotifyView.vue'
import PageNotFound from '@/components/pages/404/PageNotFound.vue'

const routes = [
  {
    path: '/*',
    component: PageNotFound
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Github-ui',
    name:'github-ui',
    component: GithubView
  },
  {
    path: '/Spotify-ui',
    name: 'spotify-ui',
    component: SpotifyView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
