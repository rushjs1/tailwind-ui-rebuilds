<template>
  <div class="file-explorer-container w-3/4 mr-8">
    <BranchNavigation />
    <FileExplorerHeading />
    <FileExplorerTable />
  </div>
</template>

<script setup>
import BranchNavigation from "@/components/pages/github/file-explorer/BranchNavigation.vue";
import FileExplorerHeading from "@/components/pages/github/file-explorer/FileExplorerHeading.vue";
import FileExplorerTable from "@/components/pages/github/file-explorer/FileExplorerTable.vue";
</script>
