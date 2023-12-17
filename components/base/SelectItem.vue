
<script setup lang="ts">
import type { ISelect } from "~/types";

const props = defineProps({
  option: { type: Object as PropType<ISelect>, required: true },
  selectedList: {
    type: [Object, Array] as PropType<ISelect | ISelect[]>,
    default: () => [],
  },
  iconCheck: { type: Boolean, default: false },
});

const isMultipleSelect = computed(() => Array.isArray(props.selectedList));

const selectedOptions = computed(() => {
  const list = props.selectedList;
  if (!list) {
    return [];
  }
  if (Array.isArray(list)) {
    return list;
  }
  return [list];
});

const isSelected = computed(() => {
  const foundIndex = selectedOptions.value.findIndex(
    (option) => option.value === props.option.value,
  );
  return foundIndex > -1;
});
</script>

<template>
  <button
    :class="
      isMultipleSelect || !isSelected ? 'hover:bg-basic-2/30 !font-normal' : 'bg-basic-2/40 font-medium'
    "
    class="qbutton h-10 rounded-lg"
  >
    <span class="px-3 w-full text-left truncate text-basic-12">
      {{ option.label }}
    </span>
    <NuxtIcon
      v-if="iconCheck && isSelected"
      name="check"
      class="text-base text-basic-12 ml-auto px-1"
    />
  </button>
</template>
