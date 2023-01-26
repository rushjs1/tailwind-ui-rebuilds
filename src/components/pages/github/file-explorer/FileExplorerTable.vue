<script setup>
import FileExplorerItem from "@/components/pages/github/file-explorer/FileExplorerItem.vue";
</script>

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

    <file-explorer-item>
      <template #folder> jest </template>
      <template #commit_message>
        <span>
          JIT: Optimize universal selector usage by inlining only the relevant
          selectors
        </span>
      </template>
      <template #commit_tag>#4850</template>
      <template #created_at> 11 months ago </template>
    </file-explorer-item>

    <file-explorer-item>
      <template #folder> nesting </template>
      <template #commit_message>
        <span>
          Ensure to transpile the PostCSS Nesting plugin (tailwindcss/nesting)
        </span>
      </template>
      <template #commit_tag>#7080</template>
      <template #created_at> 4 months ago </template>
    </file-explorer-item>

    <file-explorer-item>
      <template #folder> perf </template>
      <template #commit_message>
        <span> Performance improvements + memory leak fix </span>
      </template>
      <template #commit_tag>#3032</template>
      <template #created_at> 17 months ago </template>
    </file-explorer-item>

    <file-explorer-item>
      <template #folder> scripts </template>
      <template #commit_message>
        Add Typescript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file
      </template>
      <template #commit_tag>#7891</template>
      <template #created_at> 4 months ago </template>
    </file-explorer-item>

    <file-explorer-item>
      <template #folder> src </template>
      <template #commit_message>
        Create tailwind.config.cjs file in the ESM Package when running init
      </template>
      <template #commit_tag>#3863</template>
      <template #created_at> 1 hour ago </template>
    </file-explorer-item>

    <file-explorer-item>
      <template #folder> standalone-cli </template>
      <template #commit_message>
        Remove cross-env and postcss-cli deps
      </template>
      <template #commit_tag>#6964</template>
      <template #created_at> 4 months ago </template>
    </file-explorer-item>

    <file-explorer-item>
      <template #folder> stubs</template>
      <template #commit_message> Re-enable new features </template>
      <template #created_at> last month </template>
    </file-explorer-item>

    <file-explorer-item>
      <template #folder> tests </template>
      <template #commit_message>
        Reject invalid custom and arbitrary variants
      </template>
      <template #commit_tag>#8345</template>
      <template #created_at> 2 days ago </template>
    </file-explorer-item>

    <file-explorer-item>
      <template #folder> types </template>
      <template #commit_message>
        Update
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >screens</span
        >
        types
      </template>
      <template #commit_tag>#8042</template>
      <template #created_at> last month </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> .editorconfig </template>
      <template #commit_message>
        Convert new stuff to use ES6 Modules
      </template>
      <template #created_at> 5 years ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> .eslintignore </template>
      <template #commit_message> Generate plugin list file </template>
      <template #commit_tag>#4725</template>
      <template #created_at> 11 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> .eslintrc.json </template>
      <template #commit_message>
        Remove duplicate prettier.config.js settings from .eslintrc.json
      </template>
      <template #commit_tag>#5087</template>
      <template #created_at> 9 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> .gitignore </template>
      <template #commit_message>
        ensure generated types are published well
      </template>
      <template #created_at> 2 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> .swcrc </template>
      <template #commit_message> Switch to swc from babel </template>
      <template #commit_tag>#5593</template>
      <template #created_at> 8 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> CHANGELOG.md </template>
      <template #commit_message>
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >matchVariant</span
        >
        API
      </template>
      <template #commit_tag>#8310</template>
      <template #created_at> 2 days ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> Update LICENSE </template>
      <template #commit_message> Update LICENSE </template>
      <template #commit_tag>#8310</template>
      <template #created_at> 3 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> README.md </template>
      <template #commit_message> Update logo in readme </template>
      <template #created_at> 5 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> base.css </template>
      <template #commit_message>
        Remove preflight CSS export in favor of base
      </template>
      <template #created_at> 3 years ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> colors.d.ts </template>
      <template #commit_message>
        Add TypeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file
      </template>
      <template #commit_tag>#7891</template>
      <template #created_at> 2 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> colors.js </template>
      <template #commit_message>
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions
      </template>
      <template #commit_tag>#6348</template>
      <template #created_at> 5 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> components.css </template>
      <template #commit_message>
        Move CSS files to root for easier imports
      </template>
      <template #created_at> 4 years ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> defaultConfig.d.ts </template>
      <template #commit_message>
        Add TypeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file
      </template>
      <template #commit_tag>#7891</template>
      <template #created_at> 2 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> defaultConfig.js </template>
      <template #commit_message>
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions
      </template>
      <template #commit_tag>#6348</template>
      <template #created_at> 5 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> defaultTheme.d.ts </template>
      <template #commit_message>
        Add TypeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file
      </template>
      <template #commit_tag>#7891</template>
      <template #created_at> 2 months ago </template>
    </file-explorer-item>
    <file-explorer-item file>
      <template #folder> defaultTheme.js </template>
      <template #commit_message>
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions
      </template>

      <template #commit_tag>#6348</template>
      <template #created_at> 5 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> package-lock.json </template>
      <template #commit_message>
        Update autoprefixer to version 10.4.7
      </template>

      <template #created_at> 20 hours ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> package.json </template>
      <template #commit_message>
        Update autoprefixer to version 10.4.7
      </template>
      <template #created_at> 20 hours ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> plugin.d.ts </template>
      <template #commit_message>
        Add typeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file
      </template>

      <template #commit_tag>#7891</template>
      <template #created_at> 2 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> plugin.js </template>
      <template #commit_message>
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions
      </template>

      <template #commit_tag>#6348</template>
      <template #created_at> 5 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> prettier.config.js </template>
      <template #commit_message>
        Add Prettier configuration file (prettier.config.js)
      </template>

      <template #commit_tag>#3713</template>
      <template #created_at> 12 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> resolveConfig.js </template>
      <template #commit_message>
        Add
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >default</span
        >
        interop to public available functions
      </template>

      <template #commit_tag>#6348</template>
      <template #created_at> 5 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> resolveConfig.js </template>
      <template #commit_message>
        Add screens.css file for postcss-import convenience
      </template>
      <template #created_at> 3 years ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> tailwind.css </template>
      <template #commit_message>
        Undo accidental changes to CDN build process
      </template>

      <template #created_at> 2 years ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> types.d.ts </template>
      <template #commit_message>
        Add TypeScript types for the
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >tailwind.config.js</span
        >
        file
      </template>
      <template #commit_tag> #7891 </template>

      <template #created_at> 2 months ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> utilites.css </template>
      <template #commit_message>
        Move CSS files to root for easier imports
      </template>
      <template #created_at> 4 years ago </template>
    </file-explorer-item>

    <file-explorer-item file>
      <template #folder> variants.css </template>
      <template #commit_message>
        JIT: Replace
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >@tailwind screens</span
        >
        with
        <span class="rounded-md bg-gray-200 p-1 font-mono text-xs"
          >@tailwind variants</span
        >
      </template>
      <template #commit_tag> #4356 </template>

      <template #created_at> 12 months ago </template>
    </file-explorer-item>
  </div>
</template>
