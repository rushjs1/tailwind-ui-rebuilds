<template>
  <div class="repo-stats flex flex-wrap items-center justify-between px-8 py-4">
    <div class="flex">
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-view-component="true"
        class="w-4 fill-current"
      >
        <path
          fill-rule="evenodd"
          d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
        ></path>
      </svg>
      <div class="ml-2 flex items-center text-xl">
        <a href="#" class="text-blue-600 hover:underline"> tailwindlabs</a>
        <span class="ml-1">/</span>
        <a href="#" class="ml-1 font-semibold text-blue-600 hover:underline">
          tailwindcss</a
        >
      </div>
    </div>
    <div class="hidden space-x-2 text-xs md:flex">
      <div class="flex">
        <button
          class="flex items-center space-x-1 rounded-md border border-gray-300 px-3 py-1 shadow-sm hover:bg-gray-100"
        >
          <svg
            class="w-4 fill-current text-gray-600"
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-view-component="true"
          >
            <path
              fill-rule="evenodd"
              d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
          <div>Watch</div>
          <div>
            <a href="#" class="rounded-2xl bg-gray-200 px-3 py-1 font-semibold"
              >570</a
            >
          </div>

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
      <div class="flex hover:bg-gray-100">
        <button
          class="flex items-center space-x-1 rounded-md border border-gray-300 px-3 py-1 shadow-sm"
        >
          <svg
            class="w-4"
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-view-component="true"
          >
            <path
              fill-rule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
            ></path>
          </svg>
          <div>Fork</div>
          <a href="#" class="rounded-2xl bg-gray-200 px-3 py-1 font-semibold"
            >2.8k</a
          >
        </button>
      </div>
      <div class="flex rounded shadow-sm">
        <button
          class="flex items-center space-x-1 rounded-md rounded-r-none border border-gray-300 px-3 py-1 hover:bg-gray-100"
        >
          <svg
            class="w-4 fill-current text-amber-500"
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-view-component="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"
            ></path>
          </svg>
          <div>Starred</div>
          <a
            href="#"
            class="rounded rounded-2xl bg-gray-200 px-3 py-1 font-semibold"
            >56.8k</a
          >
        </button>
        <a
          href="#"
          class="flex rounded-md rounded-l-none border border-l-0 border-gray-300 px-3 py-1 font-semibold hover:bg-gray-100"
        >
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
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>
