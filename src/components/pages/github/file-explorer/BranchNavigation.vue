<template>
  <div class="branch-nav mb-3 flex items-center justify-between">
    <div class="flex items-center space-x-3">
      <button
        class="flex items-center space-x-2 rounded-md border border-gray-300 px-4 py-1 hover:bg-gray-200"
      >
        <svg
          class="h-4"
          text="gray"
          aria-hidden="true"
          viewBox="0 0 16 16"
          data-view-component="true"
        >
          <path
            fill-rule="evenodd"
            d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
          ></path>
        </svg>
        <div>master</div>
        <svg
          class="ml-0.5 w-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div class="hidden items-center space-x-2 md:flex">
        <a href="#" class="group flex items-center space-x-1 py-1">
          <svg
            class="h-4 fill-current group-hover:text-blue-600"
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-view-component="true"
          >
            <path
              fill-rule="evenodd"
              d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
            ></path>
          </svg>
          <span class="group-hover:text-blue-600">
            <span class="font-semibold">47 </span>
            <span class="text-gray-600 group-hover:text-blue-600"
              >branches</span
            >
          </span>
        </a>
        <a href="#" class="group flex items-center space-x-1 py-1">
          <svg
            class="h-4 w-4 group-hover:text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            ></path>
          </svg>
          <span class="group-hover:text-blue-600">
            <span class="font-semibold">210 </span>
            <span class="text-gray-600 group-hover:text-blue-600">tags</span>
          </span>
        </a>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <button
        class="rounded-lg border border-gray-300 px-2 py-1 font-semibold hover:bg-gray-200"
      >
        Go to file
      </button>
      <button
        class="flex items-center space-x-1 rounded-lg border border-gray-300 px-2 py-1 font-semibold hover:bg-gray-200"
      >
        <span>Add file</span>
        <svg
          class="h-3 w-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <button
        class="flex items-center space-x-2 rounded-lg border border-gray-400 bg-green-600 px-4 py-1 font-semibold text-white shadow shadow-md hover:bg-green-700"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          ></path>
        </svg>
        <div>Code</div>
        <svg
          class="ml-0.5 w-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup></script>
