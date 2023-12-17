<script setup lang="ts">
const prop = defineProps({
  modelValue: { type: Boolean, default: false },
  iconActive: { type: String, default: "" },
  iconInactive: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);

const checked = computed({
  get() {
    return prop.modelValue;
  },
  set(value: boolean) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <label
    for="toggle"
    class="flex items-center cursor-pointer select-none text-dark dark:text-green-500"
  >
    <div class="relative">
      <input
        id="toggle"
        type="checkbox"
        class="peer sr-only"
        @click="checked = !checked"
      >
      <div
        class="h-7 rounded-full w-[52px] center-x justify-around"
        :class="checked ? 'bg-basic-5' : 'bg-main-blue-1'"
      >
        <NuxtIcon
          v-if="iconActive"
          :name="iconActive"
          class="text-base text-white opacity-60"
        />
        <NuxtIcon
          v-if="iconInactive"
          :name="iconInactive"
          class="text-base text-white opacity-60"
        />
      </div>
      <div
        class="absolute w-6 h-6 transition bg-white border-gray-300 rounded-full dot dark:bg-dark-4 left-0.5 top-0.5 peer-checked:translate-x-full peer-checked:bg-primary"
      />
    </div>
  </label>
</template>
