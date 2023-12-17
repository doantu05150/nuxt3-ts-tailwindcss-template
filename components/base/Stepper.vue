<script setup lang="ts">
const prop = defineProps({
  maxSteps: { type: Number, default: 2 },
  modelValue: { type: Number, default: 1 },
  overStep: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const currentStep = computed({
  get() {
    return prop.modelValue;
  },
  set(step: number) {
    emit("update:modelValue", step);
  },
});

function changeStep(step: number) {
  if (!prop.overStep && step > currentStep.value)
    return;

  currentStep.value = step;
}
</script>

<template>
  <ol class="relative w-full center-x">
    <li
      v-for="step in maxSteps"
      :key="step"
      class="centeral step"
      :class="currentStep > step ? 'step-active' : ''"
    >
      <span
        class="shrink-0 h-7 w-7 rounded-full border-[2px] centeral bg-basic-1 cursor-pointer"
        :class="currentStep >= step ? 'text-main-blue-1 border-main-blue-1 after:bg-main-blue-1' : 'text-basic-4 border-basic-4 after:bg-basic-4'"
        @click="changeStep(step)"
      >
        {{ step }}
      </span>
    </li>
  </ol>
</template>

<style scoped>
.step:not(:last-child) {
  @apply w-full after:content-[''] after:w-full after:border-b after:border-basic-4 after:border after:inline-block
}

.step-active:not(:last-child) {
  @apply after:border-main-blue-1;
}
</style>
