<script setup lang="ts">
import { MetaTags } from "./constants";
import { generateSEOMetaTags } from "./utils";

useHead(MetaTags.app);
useSeoMeta(generateSEOMetaTags("app"));
</script>

<template>
  <div class="light">
    <div class="bg-background-main text-basic-12 min-h-[100svh]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
