<script setup>
import TailwindLogo from "@/components/icons/TailwindLogo.vue";
import SiteItem from "@/components/Home/SiteItem.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import SpotifyIcon from "@/components/icons/SpotifyIcon.vue";

// Next ideas so I dont forget - Teams, Discord, BitBucket?
</script>

<template>
  <div class="home-page">
    <div>
      <nav
        class="nav fixed flex w-full items-center justify-start space-x-1 bg-slate-900/60 p-6 font-semibold text-white"
      >
        <RouterLink to="/">
          <TailwindLogo />
        </RouterLink>
        <span class="font-mono text-lg font-bold">Tailwind Rebuilds</span>
      </nav>
      <div
        class="h-screen bg-slate-900 bg-glow2 bg-cover bg-center text-center"
      >
        <div
          class="title flex flex-col items-center justify-center space-x-2 px-4 pt-28 text-4xl font-extrabold tracking-tight text-white"
        >
          <span>
            Rebuilding popular user interfaces using
            <a
              href="https://tailwindcss.com/"
              class="text-sky-400 hover:underline"
              >tailwindcss</a
            >
          </span>
          <span class="mt-4 text-2xl font-semibold"
            >to practice and sharpen my knowledge of the framework.</span
          >
        </div>

        <div
          class="sites-parent mt-20 grid grid-cols-2 gap-x-20 px-20 sm:grid-cols-3 md:gap-0"
        >
          <SiteItem title="Github" :icon="[GithubIcon]" icolor="#fff000" />
          <SiteItem title="Spotify" :icon="[SpotifyIcon]" icolor="#1ED761" />
        </div>
      </div>
    </div>
  </div>
</template>
