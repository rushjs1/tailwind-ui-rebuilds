import { createRouter, createWebHistory } from "vue-router";
import GithubPage from "@/views/GithubPage.vue";
import HomePage from "@/views/HomePage.vue";
import SpotifyPage from "@/views/SpotifyPage.vue";
import PageNotFound from "@/views/404/PageNotFound.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "page-not-found",
    component: PageNotFound,
  },
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/Github-ui",
    name: "github-ui",
    component: GithubPage,
  },
  {
    path: "/Spotify-ui",
    name: "spotify-ui",
    component: SpotifyPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
