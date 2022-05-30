<template>
  <nav
    class="bg-gray-900 text-white px-4 py-3 flex items-center justify-between"
  >
    <div class="flex items-center space-x-4">
      <GithubIconSmall />
      <div class="relative">
        <input
          type="text"
          class="rounded bg-gray-700 placeholder-white w-72 px-3 py-1"
          placeholder="Search or jump to..."
        />
        <div class="absolute top-0 right-0 flex items-center h-full">
          <div
            class="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2"
          >
            /
          </div>
        </div>
      </div>
      <ul class="flex items-center font-semibold space-x-4">
        <li>
          <a href="" class="hover:text-gray-400">Pull Requests</a>
        </li>
        <li>
          <a href="" class="hover:text-gray-400">Issues</a>
        </li>
        <li>
          <a href="" class="hover:text-gray-400">Marketplace</a>
        </li>
        <li>
          <a href="" class="hover:text-gray-400">Explore</a>
        </li>
      </ul>
    </div>
    <div class="flex items-center space-x-4 text-white">
      <a href="" class="relative hover:text-gray-400"
        ><svg
          class="w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          ></path>
        </svg>
        <div
          class="bg-blue-600 rounded-full w-2 h-2 absolute top-0 right-0"
        ></div>
      </a>
      <a href="" class="flex items-center hover:text-gray-400">
        <svg
          class="w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <svg
          class="w-3"
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
      <a href="" class="flex items-center hover:text-gray-400">
        <img
          src="https://avatars.githubusercontent.com/u/60147451?s=400&u=ddd063df26e120962bd5cd5c7846e9edabb1a5ca&v=4"
          class="w-5 h-5 rounded-full"
        />
        <svg
          class="w-3 ml-0.5"
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
  </nav>
</template>

<script setup>
import GithubIconSmall from "@/components/icons/github/GithubIconSmall.vue";
</script>
