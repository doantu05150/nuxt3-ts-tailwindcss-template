<script setup lang="ts">
const question = reactive({
  content: "",
  answers: ["", ""],
});
</script>

<template>
  <div>
    <div class="box-container border border-basic-2">
      <div class="flex flex-col space-y-4">
        <BaseInputArea v-model="question.content" label="Question" placeholder="Enter question" :required="true" :clearable="true" />
        <FormCreateOption />
      </div>
    </div>
    <div class="centeral my-6">
      <BaseButton icon-right="arrow-right" rounded="full" class="max-w-xs w-full">
        Next
      </BaseButton>
    </div>
  </div>
</template>
