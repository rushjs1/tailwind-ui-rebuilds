<template>
  <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
    <div class="flex w-4/12 items-center space-x-3">
      <FolderIcon />
      <span class="hover:cursor-pointer hover:text-blue-500 hover:underline">
        <slot name="folder"> </slot>
      </span>
    </div>
    <div
      class="w-6/12 truncate hover:cursor-pointer hover:text-blue-500 hover:underline"
    >
      <slot name="commit_message"> </slot>
      (<span class="text-blue-500 hover:underline">
        <slot name="commit_tag"></slot> </span
      >)
    </div>
    <div class="w-2/12 truncate text-right">
      <slot name="created_at"> </slot>
    </div>
  </div>
</template>

<script setup>
import FolderIcon from "@/components/icons/github/FolderIcon.vue";
</script>
