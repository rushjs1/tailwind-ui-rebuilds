<template>
  <div
    class="file-explorer divide-y divide-gray-200 rounded-md rounded-t-none border border-gray-200 text-gray-700"
  >
    <file-explorer-item>
      <template #folder> .github </template>
      <template #commit_message> Update CONTRIBUTING.md </template>
      <template #commit_tag>#6964</template>
      <template #created_at> 2 months ago </template>
    </file-explorer-item>

    <file-explorer-item>
      <template #folder> integrations </template>
      <template #commit_message>
        <span>
          Support postcss config options in config file in the CLI (
        </span>
      </template>
      <template #commit_tag>#8226</template>
      <template #created_at> 13 days ago </template>
    </file-explorer-item>

    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FolderIcon />
        <span class="hover:cursor-pointer hover:text-blue-500 hover:underline"
          >jest</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:text-blue-500 hover:underline"
      >
        JIT: Optimize universal selector usage by inlining only the relevant
        selectors (<span class="text-blue-500 hover:underline">#4850</span>)
      </div>
      <div class="w-2/12 text-right">11 months ago</div>
    </div>

    <div
      class="flex items-center justify-between px-4 py-2 hover:bg-gray-100/50"
    >
      <div class="flex w-4/12 items-center space-x-3">
        <FolderIcon />
        <span class="hover:cursor-pointer hover:text-blue-500 hover:underline"
          >nesting</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:text-blue-500 hover:underline"
      >
        Ensure to transpile the PostCSS Nesting plugin (tailwindcss/nesting) (
        <span class="text-blue-500 hover:underline">#7080</span> )
      </div>
      <div class="w-2/12 text-right">4 months ago</div>
    </div>

    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FolderIcon />
        <span class="hover:cursor-pointer hover:text-blue-500 hover:underline"
          >perf</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:text-blue-500 hover:underline"
      >
        Performance improvements + memory leak fix (<span
          class="text-blue-500 hover:underline"
          >#3032</span
        >)
      </div>
      <div class="w-2/12 text-right">17 months ago</div>
    </div>

    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FolderIcon />
        <span class="hover:cursor-pointer hover:text-blue-500 hover:underline"
          >scripts</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:text-blue-500 hover:underline"
      >
        Add Typescript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file (<span class="text-blue-500 hover:underline">#7891</span>)
      </div>
      <div class="w-2/12 text-right">4 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FolderIcon />
        <span class="hover:cursor-pointer hover:text-blue-500 hover:underline"
          >src</span
        >
      </div>
      <div
        class="w-6/12 truncate hover:cursor-pointer hover:text-blue-500 hover:underline"
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
      <div class="flex w-4/12 items-center space-x-3">
        <FolderIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >stubs</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Re-enable new features
      </div>
      <div class="w-2/12 text-right">last month</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FolderIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >tests</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Reject invalid custom and arbitrary variants (<span
          class="cursor-pointer text-blue-500 hover:underline"
          >#8345</span
        >)
      </div>
      <div class="w-2/12 text-right">2 days ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FolderIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >types</span
        >
      </div>
      <div class="w-6/12 cursor-pointer hover:text-blue-500 hover:underline">
        Update
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >screens</span
        >
        types (<span class="cursor-pointer text-blue-500 hover:underline"
          >#8042</span
        >)
      </div>
      <div class="w-2/12 text-right">last month</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div
        class="flex w-4/12 items-center space-x-3 hover:text-blue-500 hover:underline"
      >
        <FileIcon />
        <span class="cursor-pointer">.editorconfig</span>
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Convert new stuff to use ES6 Modules
      </div>
      <div class="w-2/12 text-right">5 years ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline">
          .eslintignore
        </span>
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Generate plugin list file (
        <span class="text-blue-500 hover:underline">#4725</span> )
      </div>
      <div class="w-2/12 text-right">11 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >.eslintrc.json</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Remove duplicate prettier.config.js settings from .eslintrc.json (
        <span class="cursor-pointer text-blue-500 hover:underline">
          #5087
        </span>
        )
      </div>
      <div class="w-2/12 text-right">9 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >.gitignore</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        ensure generated types are published well
      </div>
      <div class="w-2/12 text-right">2 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >.swcrc</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Switch to swc from babel (
        <span class="text-blue-500 hover:underline">#5593</span> )
      </div>
      <div class="w-2/12 text-right">8 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >CHANGELOG.md</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >matchVariant</span
        >
        API (<span class="text-blue-500">#8310</span>)
      </div>
      <div class="w-2/12 text-right">2 days ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >LICENSE</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Update LICENSE
      </div>
      <div class="w-2/12 text-right">3 months ago</div>
    </div>

    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >README.md</span
        >
      </div>
      <div class="w-6/12 cursor-pointer hover:text-blue-500 hover:underline">
        Update logo in readme
      </div>
      <div class="w-2/12 text-right">5 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline">
          base.css
        </span>
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Remove preflight CSS export in favor of base
      </div>
      <div class="w-2/12 text-right">3 years ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline">
          colors.d.ts
        </span>
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add TypeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file (<span class="text-blue-500">#7891</span>)
      </div>
      <div class="w-2/12 text-right">2 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline">
          colors.js
        </span>
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions (<span class="text-blue-500"
          >#6348</span
        >)
      </div>
      <div class="w-2/12 text-right">5 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >components.css</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Move CSS files to root for easier imports
      </div>
      <div class="w-2/12 text-right">4 years ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >defaultConfig.d.ts</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add TypeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file (<span class="text-blue-500">#7891</span>)
      </div>
      <div class="w-2/12 text-right">2 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >defaultConfig.js</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions (<span class="text-blue-500"
          >#6348</span
        >)
      </div>
      <div class="w-2/12 text-right">5 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >defaultTheme.d.ts</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add TypeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file (<span class="text-blue-500">#7891</span>)
      </div>
      <div class="w-2/12 text-right">2 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >defaultTheme.js</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions (<span class="text-blue-500"
          >#6348</span
        >)
      </div>
      <div class="w-2/12 text-right">5 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >package-lock.json</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Update autoprefixer to version 10.4.7
      </div>
      <div class="w-2/12 text-right">20 hours ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >package.json</span
        >
      </div>
      <div class="w-6/12 cursor-pointer hover:text-blue-500 hover:underline">
        Update autoprefixer to version 10.4.7
      </div>
      <div class="w-2/12 text-right">20 hours ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >plugin.d.ts</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add typeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file (<span class="text-blue-500">#7891</span>)
      </div>
      <div class="w-2/12 text-right">2 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >plugin.js</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions (<span class="text-blue-500"
          >#6348</span
        >)
      </div>
      <div class="w-2/12 text-right">5 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >prettier.config.js</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add Prettier configuration file (prettier.config.js) (
        <span class="text-blue-500">#3713</span> )
      </div>
      <div class="w-2/12 text-right">12 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >resolveConfig.js</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions (
        <span class="text-blue-500">#6348</span> )
      </div>
      <div class="w-2/12 text-right">5 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >screens.css</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add screens.css file for postcss-import convenience
      </div>
      <div class="w-2/12 text-right">3 years ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >tailwind.css</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Undo accidental changes to CDN build process
      </div>
      <div class="w-2/12 text-right">2 years ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >types.d.ts</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Add TypeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file (<span class="text-blue-500">#7891</span>)
      </div>
      <div class="w-2/12 text-right">2 months ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >utilites.css</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        Move CSS files to root for easier imports
      </div>
      <div class="w-2/12 text-right">4 years ago</div>
    </div>
    <div class="flex justify-between px-4 py-2 hover:bg-gray-100/50">
      <div class="flex w-4/12 items-center space-x-3">
        <FileIcon />
        <span class="cursor-pointer hover:text-blue-500 hover:underline"
          >variants.css</span
        >
      </div>
      <div
        class="w-6/12 cursor-pointer truncate hover:text-blue-500 hover:underline"
      >
        JIT: Replace
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >@tailwind screens</span
        >
        with
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >@tailwind variants</span
        >
        (<span class="text-blue-500">#4356</span>)
      </div>
      <div class="w-2/12 text-right">12 months ago</div>
    </div>
  </div>
</template>

<script setup>
import FolderIcon from "@/components/icons/github/FolderIcon.vue";
import FileIcon from "@/components/icons/github/FileIcon.vue";
import FileExplorerItem from "@/components/pages/github/file-explorer/FileExplorerItem.vue";
</script>
