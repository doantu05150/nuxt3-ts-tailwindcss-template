<script setup lang="ts">
import type { ISelect } from "~/types";

const shareOptions = ref<ISelect[]>([
  { label: "Public", value: "public" },
  { label: "Only me", value: "only_me" },
]);

const selected = ref("public");
</script>

<template>
  <BaseSelect v-model="selected" :options="shareOptions" />
</template>
