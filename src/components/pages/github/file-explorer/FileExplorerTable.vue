<template>
  <div
    class="file-explorer rounded-md rounded-t-none border border-gray-200 text-gray-700 divide-y divide-gray-200"
  >
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:underline hover:text-blue-500 hover:cursor-pointer"
          >.github</span
        >
      </div>
      <div
        class="w-6/12 hover:underline hover:text-blue-500 truncate hover:cursor-pointer"
      >
        <span>Update CONTRIBUTING.md</span>
        (<span class="text-blue-500 hover:underline">#7723</span>)
      </div>
      <div class="w-2/12 text-right">2 Months Ago</div>
    </div>

    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:underline hover:text-blue-500 hover:cursor-pointer"
          >integrations</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:underline hover:text-blue-500"
      >
        <span>
          Support postcss config options in config file in the CLI (
        </span>
        <span class="text-blue-500 hover:underline">#8226</span>)
      </div>
      <div class="w-2/12 text-right">13 days ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:underline hover:text-blue-500 hover:cursor-pointer"
          >jest</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:underline hover:text-blue-500"
      >
        JIT: Optimize universal selector usage by inlining only the relevant
        selectors (<span class="text-blue-500 hover:underline">#4850</span>)
      </div>
      <div class="w-2/12 text-right">11 months ago</div>
    </div>

    <div
      class="flex items-center justify-between px-4 py-2 hover:bg-gray-100/50"
    >
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:underline hover:text-blue-500 hover:cursor-pointer"
          >nesting</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:underline hover:text-blue-500"
      >
        Ensure to transpile the PostCSS Nesting plugin (tailwindcss/nesting) (
        <span class="text-blue-500 hover:underline">#7080</span> )
      </div>
      <div class="w-2/12 text-right">4 months ago</div>
    </div>

    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:underline hover:text-blue-500 hover:cursor-pointer"
          >perf</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:underline hover:text-blue-500"
      >
        Performance improvements + memory leak fix (<span
          class="text-blue-500 hover:underline"
          >#3032</span
        >)
      </div>
      <div class="w-2/12 text-right">17 months ago</div>
    </div>

    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:underline hover:text-blue-500 hover:cursor-pointer"
          >scripts</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:underline hover:text-blue-500"
      >
        Add Typescript types for the
        <span class="bg-gray-200 font-mono p-1 rounded-md text-xs"
          >tailwind.config.js</span
        >
        file (<span class="text-blue-500 hover:underline">#7891</span>)
      </div>
      <div class="w-2/12 text-right">4 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:underline hover:text-blue-500 hover:cursor-pointer"
          >src</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:underline hover:text-blue-500"
      >
        Create tailwind.config.cjs file in the ESM Package when running init
        (<span class="text-blue-500 hover:underline">#3863</span>)
      </div>
      <div class="w-2/12 text-right">1 hour ago</div>
    </div>
    <file-explorer-item>
      <template #folder> standalone-cli </template>
      <template #commit_message>
        Remove cross-env and postcss-cli deps
      </template>
      <template #commit_tag>#6964</template>
      <template #created_at> 4 months ago </template>
    </file-explorer-item>

    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:text-blue-500 hover:underline cursor-pointer"
          >stubs</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:underline hover:text-blue-500 cursor-pointer"
      >
        Re-enable new features
      </div>
      <div class="w-2/12 text-right">last month</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:underline hover:text-blue-500 cursor-pointer"
          >tests</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:underline hover:text-blue-500 cursor-pointer"
      >
        Reject invalid custom and arbitrary variants (<span
          class="cursor-pointer hover:underline text-blue-500"
          >#8345</span
        >)
      </div>
      <div class="w-2/12 text-right">2 days ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="w-4/12 flex items-center space-x-3">
        <FolderIcon />
        <span class="hover:underline hover:text-blue-500 cursor-pointer"
          >types</span
        >
      </div>
      <div class="w-6/12 hover:underline hover:text-blue-500 cursor-pointer">
        Update
        <span class="bg-gray-200 p-1 rounded-md font-mono text-xs"
          >screens</span
        >
        types (<span class="cursor-pointer hover:underline text-blue-500"
          >#8042</span
        >)
      </div>
      <div class="w-2/12 text-right">last month</div>
    </div>
  </div>
</template>

<script setup>
import FolderIcon from "@/components/icons/github/FolderIcon.vue";
import FileExplorerItem from "@/components/pages/github/file-explorer/FileExplorerItem.vue";
</script>
