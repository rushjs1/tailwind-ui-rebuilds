<script setup>
import FooterItem from "@/components/pages/spotify/FooterItem.vue";
import FooterIconItem from "@/components/pages/spotify/FooterIconItem.vue";
import InstagramIcon from "../../icons/spotify/InstagramIcon.vue";
import TwitterIcon from "../../icons/spotify/TwitterIcon.vue";
import FacebookIcon from "../../icons/spotify/FacebookIcon.vue";

const company = ["About", "Jobs", "For the Record"];
const communities = [
  "For Artists",
  "Developers",
  "Advertising",
  "Investors",
  "Vendors",
];
const links = ["Support", "Free Mobile App"];

const bottomRow = [
  "Legal",
  "Privacy Center",
  "Privacy Policy",
  "Cookies",
  "About Ads",
  "Your Privacy Choices",
];
</script>

<template>
  <div class="flex flex-col divide-y divide-white/20">
    <div
      class="flex flex-col items-start justify-between space-y-8 md:flex-row md:space-y-0"
    >
      <div
        class="flex flex-col items-start space-y-8 md:flex-row md:space-y-0 md:space-x-28"
      >
        <footer-item :items="company">
          <template #title> Company </template>
        </footer-item>
        <footer-item :items="communities">
          <template #title> Communities </template>
        </footer-item>
        <footer-item :items="links">
          <template #title> Useful Links </template>
        </footer-item>
      </div>
      <div class="flex space-x-4 text-white">
        <footer-icon-item>
          <InstagramIcon />
        </footer-icon-item>
        <footer-icon-item>
          <TwitterIcon />
        </footer-icon-item>
        <footer-icon-item>
          <FacebookIcon />
        </footer-icon-item>
      </div>
    </div>
    <div class="mt-8 text-white">
      <div
        class="my-8 flex flex-col items-center justify-center md:flex-row md:justify-between"
      >
        <div class="mb-4 space-x-4 child:text-gray-400 md:mb-0">
          <button
            v-for="(item, index) in bottomRow"
            :key="index"
            class="text-xs transition duration-200 hover:cursor-pointer hover:text-gray-100 hover:underline"
          >
            {{ item }}
          </button>
        </div>
        <div class="child:text-sm child:text-gray-400">
          <button>&copy; 2023 Spotify AB</button>
        </div>
      </div>
    </div>
  </div>
</template>
