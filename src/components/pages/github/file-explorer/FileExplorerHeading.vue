<template>
  <div
    class="border-b-none mt-5 flex items-center justify-between rounded-md rounded-b-none border border-gray-200 bg-gray-100/50 px-4 py-4"
  >
    <div class="flex items-center space-x-2">
      <img
        class="h-5 w-5 rounded-full"
        src="https://avatars.githubusercontent.com/u/4323180?v=4"
        alt=""
      />
      <a href="#" class="font-semibold hover:underline"> adamwathan </a>
      <a href="#" class="hover:text-blue-600 hover:underline"
        >Update changelog</a
      >
    </div>
    <div class="flex items-end">
      <a href="#">
        <svg
          aria-label="12 / 12 checks OK"
          role="img"
          viewBox="0 0 16 16"
          data-view-component="true"
          stroke="#"
          class="h-5 w-5 fill-current text-green-500"
        >
          <path
            fill-rule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </a>
      <div class="hidden lg:flex">
        <a
          href="#"
          class="ml-2 font-mono text-xs text-gray-400 hover:text-blue-500 hover:underline"
        >
          cea3ccf
        </a>
        <span
          class="ml-2 text-xs text-gray-400 hover:text-blue-500 hover:underline"
          >3 days ago</span
        >
      </div>
      <a href="#" class="group ml-3 flex items-center space-x-1">
        <svg
          text="gray"
          aria-hidden="true"
          viewBox="0 0 16 16"
          data-view-component="true"
          class="h-4 w-4 fill-current text-gray-600 group-hover:text-blue-500"
        >
          <path
            fill-rule="evenodd"
            d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
          ></path>
        </svg>
        <span class="text-gray-600 group-hover:text-blue-500">4,620</span>
        <span class="text-gray-400 group-hover:text-blue-500"> commits </span>
      </a>
    </div>
  </div>
</template>

<script setup></script>
