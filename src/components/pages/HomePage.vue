<template>
  <div class="home-page">
    <div>
      <nav
        class="nav p-6 flex justify-start items-center space-x-1 text-white font-semibold bg-slate-900 fixed w-full"
      >
        <RouterLink to="/">
          <TailwindLogo />
        </RouterLink>
        <span class="font-bold text-lg font-mono">Tailwind Rebuilds</span>
      </nav>
      <div class="bg-slate-900 h-screen text-center">
        <div
          class="title text-white font-extrabold flex flex-col justify-center items-center pt-28 text-4xl tracking-tight space-x-2 font-bold px-4"
        >
          <span>
            Rebuilding popular user interfaces using
            <a
              href="https://tailwindcss.com/"
              class="hover:underline text-sky-400"
              >tailwindcss</a
            >
          </span>
          <span class="text-2xl mt-4 font-semibold"
            >to practice and sharpen my knowledge of the framework.</span
          >
        </div>

        <div
          class="sites-parent mt-20 px-20 grid grid-cols-2 sm:grid-cols-3 gap-x-20 md:gap-0"
        >
          <SiteItem :title="'Github'" :icon="[GithubIcon]" />
          <SiteItem :title="'Spotify'" :icon="[SpotifyIcon]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TailwindLogo from "@/components/icons/TailwindLogo.vue";
import SiteItem from "@/components/Home/SiteItem.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import SpotifyIcon from "@/components/icons/SpotifyIcon.vue";

// Next ideas so I dont forget - Teams, Discord, BitBucket
</script>
