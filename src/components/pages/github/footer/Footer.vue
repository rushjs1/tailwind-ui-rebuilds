<template>
  <div
    class="container mx-auto my-10 flex flex-col-reverse items-center justify-around border-t border-gray-200 py-10 px-4 text-xs transition-spacing duration-300 lg:flex-row"
  >
    <div
      class="flex w-full items-center justify-center space-x-3 text-gray-500 lg:w-2/12"
    >
      <span>
        <GithubIconSmall :footer="true" />
      </span>
      <span> &copy; 2022 Github, Inc. </span>
    </div>
    <div
      class="mb-4 flex w-full justify-center gap-2 text-blue-500 lg:mb-0 lg:w-10/12 lg:justify-around lg:gap-0 lg:pr-20"
    >
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
