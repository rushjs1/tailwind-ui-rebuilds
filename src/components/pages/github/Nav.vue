<script setup>
import GithubIconSmall from "@/components/icons/github/GithubIconSmall.vue";
</script>

<template>
  <nav
    class="flex items-center justify-between bg-gray-900 px-4 py-3 text-white"
  >
    <div class="block md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="flex items-center space-x-4">
      <GithubIconSmall />
      <div class="relative hidden shrink md:block">
        <input
          type="text"
          class="w-32 truncate rounded bg-gray-700 px-3 py-1 placeholder-white transition-width duration-300 lg:w-72"
          placeholder="Search or jump to..."
        />
        <div class="absolute top-0 right-0 flex h-full items-center">
          <div
            class="mr-2 rounded border border-gray-600 px-2 text-xs text-gray-400"
          >
            /
          </div>
        </div>
      </div>
      <ul class="hidden shrink-0 items-center space-x-4 font-semibold md:flex">
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
      <a href="" class="relative hidden hover:text-gray-400 md:block"
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
          class="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-600"
        ></div>
      </a>
      <a href="" class="hidden items-center hover:text-gray-400 md:flex">
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
          src="https://secure.gravatar.com/avatar/3683a0f4629cd4e57fc226338b081615?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJR-6.png"
          class="h-5 w-5 rounded-full"
        />
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
  </nav>
</template>
