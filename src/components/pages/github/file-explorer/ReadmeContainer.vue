<template>
  <div class="rounded-md border border-gray-200 mt-4">
    <div class="border-b border-gray-200 py-2 px-5 flex items-center space-x-2">
      <ReadmeIcon />
      <h4
        class="font-semibold hover:underline hover:text-blue-500 cursor-pointer"
      >
        README.md
      </h4>
    </div>
    <div class="px-5 py-5 flex flex-col space-y-4">
      <div>
        <img
          src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-light.svg"
          alt="tailwindcssLogo"
          class="w-72 pb-4 cursor-pointer"
        />
      </div>
      <div>
        A utility-first CSS framework for rapidly building custom user
        interfaces.
      </div>
      <div class="build-btns flex space-x-1 pb-3">
        <div class="text-white text-xxs font-mono cursor-pointer">
          <span class="bg-gray-600 rounded-l px-1 py-[.15rem]"> build </span>
          <span class="bg-github-readme-btn-green rounded-r px-1 py-[.15rem]">
            passing
          </span>
        </div>
        <div class="text-white text-xxs font-mono cursor-pointer">
          <span class="bg-gray-600 rounded-l px-1 py-[.15rem]">
            downloads
          </span>
          <span class="bg-github-readme-btn-green rounded-r px-1 py-[.15rem]"
            >102M</span
          >
        </div>
        <div class="text-white text-xxs font-mono cursor-pointer">
          <span class="bg-gray-600 rounded-l px-1 py-[.15rem]"> npm </span>
          <span class="bg-github-readme-btn-blue rounded-r px-1 py-[.15rem]">
            v3.0.24
          </span>
        </div>
        <div class="text-white text-xxs font-mono cursor-pointer">
          <span class="bg-gray-600 rounded-l px-1 py-[.15rem]"> license </span>
          <span class="bg-github-readme-btn-green rounded-r px-1 py-[.15rem]">
            MIT
          </span>
        </div>
      </div>
      <hr class="border-2" />
      <div class="flex flex-col space-y-3">
        <span class="text-xl font-semibold"
          >Documentation
          <hr class="mt-1" />
        </span>
        <span>
          For full documentation, visit
          <span class="text-blue-500 hover:underline cursor-pointer"
            >tailwindcss.com</span
          >.
        </span>
      </div>
      <div class="flex flex-col space-y-3">
        <span class="text-xl font-semibold">
          Community
          <hr class="mt-1" />
        </span>
        <div class="flex flex-col space-y-4">
          <span>
            For help, disscussion about best practices, or any other convention
            that would benefit from being searchable:
          </span>
          <span class="text-blue-500 hover:underline cursor-pointer">
            Discuss Tailwind CSS on GitHub
          </span>
          <span> For casual chit-chat with others using the framework: </span>
          <span class="text-blue-500 hover:underline cursor-pointer">
            Join the Tailwind CSS Discord Server
          </span>
        </div>
      </div>
      <div class="flex flex-col space-y-3">
        <span class="text-xl font-semibold">
          Contributing
          <hr class="mt-1" />
        </span>
        <span>
          If you're interested in contributing to Tailwind CSS, please read our
          <span class="text-blue-500 cursor-pointer hover:underline">
            contributing docs
          </span>
          <span class="font-semibold">before submitting a pull request.</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import ReadmeIcon from "@/components/icons/github/ReadmeIcon.vue";
</script>
