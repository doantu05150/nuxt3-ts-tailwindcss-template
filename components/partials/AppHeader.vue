<script setup lang="ts">
const prop = defineProps({
  isTransparent: { type: Boolean, default: false },
});

const menu = ref([
  { name: "Poll", path: "/poll/create" },
  { name: "Quiz/Test", path: "/" },
  { name: "Survey", path: "/" },
  { name: "Explore", path: "/" },
]);

const styles = computed(() => {
  return {
    color: prop.isTransparent ? "text-basic-1" : "text-basic-12",
    logo: prop.isTransparent ? "text-basic-1" : "text-main-blue-1",
    link: prop.isTransparent ? "hover:text-basic-1/80" : "hover:text-main-blue-1",
    underline: prop.isTransparent ? " bg-basic-1" : " bg-main-blue-1",
  };
});
</script>

<template>
  <header class="shadow-xs bg-transparent" :class="styles.color">
    <div class="main-container h-header center-x">
      <NuxtLink to="/" class="center-x space-x-2 flex-1 md:flex-none">
        <NuxtIcon name="logo-q" class="text-4xl" :class="styles.logo" />
        <div class="hidden md:block">
          <img v-if="isTransparent" src="/logo/white.png" class="h-5 w-auto">
          <img v-else src="/logo/black.png" class="h-5 w-auto">
        </div>
      </NuxtLink>
      <nav class="flex-1 hidden md:block">
        <ul class="centeral space-x-8 xl:space-x-10">
          <li v-for="nav in menu" :key="nav.path">
            <NuxtLink :to="nav.path" class="relative group transition-color font-medium" :class="styles.link">
              {{ nav.name }}
              <div class="h-0.6 w-0 group-hover:w-full absolute -bottom-1 transition-[width] duration-200" :class="styles.underline" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="center-x space-x-2">
        <div class="center-x space-x-2 flex-nowrap">
          <div class="shrink-0 bg-basic-2 text-xs centeral w-8 h-8 rounded-full text-main-blue-1 font-bold">
            TN
          </div>
          <p class="font-medium whitespace-nowrap">
            Tu Nguyen
          </p>
        </div>
        <button>
          <NuxtIcon name="chevron-down" class="text-2xl" />
        </button>
      </div>
    </div>
  </header>
</template>
