<script setup lang="ts">
import { MetaTags } from './constants';
import { generateSEOMetaTags } from './utils';

useHead(MetaTags.app);
useSeoMeta(generateSEOMetaTags("app"))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
