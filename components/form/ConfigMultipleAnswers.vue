<script setup lang="ts">
import type { ISelect } from "~/types";

const prop = defineProps({
  modelValue: { type: String, default: "" },
})

const emit = defineEmits(["update:modelValue"])

const options = ref<ISelect[]>([
  { label: 'Single selection', value: 'single' },
  { label: 'Unlimited', value: 'unlimited' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
])

const selected = computed({
  get() {
    return prop.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})

if (!prop.modelValue) {
  selected.value = 'single'
}
</script>

<template>
  <div class="form-item-wrapper">
    <p class="form-item-title">
      Limit the number of selections
    </p>
    <BaseSelect v-model="selected" :options="options" stylesTrigger="min-w-[140px]" />
  </div>
</template>
