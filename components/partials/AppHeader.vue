<script setup lang="ts">
const menu = ref([
  { name: "Poll", path: "/poll/create" },
  { name: "Quiz/Test", path: "/" },
  { name: "Survey", path: "/" },
]);
</script>

<template>
  <header class="shadow-xs bg-basic-1">
    <div class="header-container h-20 center-x">
      <NuxtLink to="/" class="center-x">
        <NuxtIcon name="logo-q" class="text-main-blue-1 text-3xl" />
        <img src="/logo/black.png" class="ml-2 h-5 w-auto">
      </NuxtLink>
      <nav class="flex-1">
        <ul class="centeral space-x-8 xl:space-x-10">
          <li v-for="nav in menu" :key="nav.path">
            <NuxtLink :to="nav.path" class="text-basic-12 hover:text-basic-12/80 font-semibold">
              {{ nav.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="center-x space-x-2 flex-nowrap">
        <div class="shrink-0 bg-basic-2 text-xs centeral w-8 h-8 rounded-full text-main-blue-1 font-bold">
          TN
        </div>
        <p class="text-basic-12 font-semibold">
          Tu Nguyen
        </p>
      </div>
    </div>
  </header>
</template>
