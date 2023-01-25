<template>
  <div class="file-explorer-container">
    <BranchNavigation />
    <FileExplorerHeading />
    <FileExplorerTable />
    <ReadmeContainer />
  </div>
</template>

<script setup>
import BranchNavigation from "@/components/pages/github/file-explorer/BranchNavigation.vue";
import FileExplorerHeading from "@/components/pages/github/file-explorer/FileExplorerHeading.vue";
import FileExplorerTable from "@/components/pages/github/file-explorer/FileExplorerTable.vue";
import ReadmeContainer from "@/components/pages/github/file-explorer/ReadmeContainer.vue";
</script>
