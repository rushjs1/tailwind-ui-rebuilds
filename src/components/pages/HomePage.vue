<template>
  <div class="home-page">
    <div>
      <nav
        class="nav p-6 flex justify-end space-x-6 text-white font-semibold bg-gray-800 border-b border-amber-500 fixed w-full shadow-lg"
      >
        <RouterLink to="/">
          <TailwindLogo />
        </RouterLink>
      </nav>
      <div class="bg-gray-600 h-screen text-center">
        <div
          class="title text-white flex justify-center items-center pt-22 text-5xl space-x-2 font-bold"
        >
          <span> Tailwind Rebuilds </span>
        </div>
        <div class="mt-12 text-slate-200 text-xl px-8">
          Rebuilding popular user interfaces using
          <a
            href="https://tailwindcss.com/"
            class="underline hover:text-sky-400"
            >tailwindcss</a
          >
          to practice and sharpen my knowledge of the framework.
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
