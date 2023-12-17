<script setup lang="ts">
import Draggable from "vuedraggable";

const questions = ref([
  { title: "Question 1" },
  { title: "Question 2" },
  { title: "Question 3" },
]);
</script>

<template>
  <ClientOnly>
    <div class="mt-6">
      <Draggable v-model="questions" handle=".handle" item-key="name" class="flex flex-col space-y-2">
        <template #item="{ element }">
          <div class="py-3 px-3 sm:px-4 center-x gap-3 bg-basic-1 rounded-xl">
            <button class="qbutton cursor-move handle">
              <NuxtIcon name="equal" class="text-xl text-basic-7" />
            </button>
            <p class="flex-1 text-basic-9 font-medium truncate">
              {{ element.title }}
            </p>
            <button class="qbutton">
              <NuxtIcon name="trash" class="text-lg text-basic-7" />
            </button>
          </div>
        </template>
      </Draggable>
    </div>
  </ClientOnly>
</template>
