<template>
  <div
    class="container mx-auto my-10 py-10 px-4 flex items-center justify-around border-t border-gray-200 text-xs"
  >
    <div class="w-2/12 text-gray-500 flex items-center space-x-3">
      <span>
        <GithubIconSmall :footer="true" />
      </span>
      <span> &copy; 2022 Github, Inc. </span>
    </div>
    <div class="w-10/12 flex justify-around text-blue-500 pr-20">
      <LinkItem :text="'Terms'" />
      <LinkItem :text="'Privacy'" />
      <LinkItem :text="'Security'" />
      <LinkItem :text="'Status'" />
      <LinkItem :text="'Docs'" />
      <LinkItem :text="'Contact Github'" />
      <LinkItem :text="'Pricing'" />
      <LinkItem :text="'API'" />
      <LinkItem :text="'Training'" />
      <LinkItem :text="'Blog'" />
      <LinkItem :text="'About'" />
    </div>
  </div>
</template>

<script setup>
import GithubIconSmall from "@/components/icons/github/GithubIconSmall.vue";
import LinkItem from "@/components/pages/github/footer/LinkItem.vue";
</script>
