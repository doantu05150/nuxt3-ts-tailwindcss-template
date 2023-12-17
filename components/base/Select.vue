<script setup lang="ts">
import type { ISelect } from "~/types";

const props = defineProps({
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: "",
  },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "Select" },
  options: { type: Array as PropType<ISelect[]>, default: () => [] },
  border: { type: Boolean, default: true },
  stylesTrigger: { type: String, default: "" },
  stylesDropdown: { type: String, default: "" },
  iconCheck: { type: Boolean, default: false },
});

const emits = defineEmits(["select", "update:modelValue"]);

const slots = useSlots();

const selectedOption = ref<ISelect | ISelect[]>();
const isCollapse = ref(false);
const selectedContentRef = ref(null);
const mapped = ref(false);

const hasTrigger = computed(() => {
  return !!slots.trigger;
});

onClickOutside(selectedContentRef, () => {
  handleHide();
});

const displayText = computed(() => {
  const selected = selectedOption.value;
  if (Array.isArray(selected)) {
    if (!selected.length)
      return props.placeholder;

    let titles = selected
      .slice(0, 2)
      .map(option => option.label)
      .join(", ");

    if (selected.length > 2)
      titles += `+${selected.length - 2} more`;

    return titles;
  }
  return selected ? selected.label : props.placeholder;
});

watch(
  () => props.options,
  (options) => {
    if (!mapped.value && options?.length) {
      mapData();
      mapped.value = true;
    }
  },
  { immediate: true },
);

function mapData() {
  if (props.modelValue) {
    if (typeof props.modelValue === "string") {
      const found = props.options.find(
        option => option.value === props.modelValue,
      );
      if (found)
        selectedOption.value = found;
    }
    else if (Array.isArray(props.modelValue)) {
      const list = Array.isArray(selectedOption.value)
        ? selectedOption.value
        : [];

      props.modelValue.forEach((value: string) => {
        const op = props.options.find(option => option.value === value);
        if (op)
          list.push(op);
      });

      selectedOption.value = [...list];
    }
  }
}

function handleSelect(option: ISelect) {
  updateVModel(option);
  emits("select", option, props.options);
  handleHide();
}

function updateVModel(option: ISelect) {
  if (typeof props.modelValue === "string") {
    selectedOption.value = option;
    emits("update:modelValue", option.value);
  }
  else if (Array.isArray(props.modelValue)) {
    const iSe = isSelected(option);
    const so = Array.isArray(selectedOption.value) ? selectedOption.value : [];
    if (!iSe)
      selectedOption.value = [...so, option];

    else
      selectedOption.value = so.filter(opt => opt.value !== option.value);

    const options = selectedOption.value.map((opt: ISelect) => opt.value);
    emits("update:modelValue", options);
  }
}

function isSelected(option: ISelect) {
  const selected = selectedOption.value;
  if (!selected)
    return false;

  if (Array.isArray(selected))
    return !!selected.find(opt => opt.value === option.value);

  return selected?.value === option.value;
}

function handleHide() {
  isCollapse.value = false;
}

function handleOpen() {
  isCollapse.value = true;
}

useEventListener("keydown", (e: KeyboardEvent) => {
  if (!isCollapse.value)
    return;

  if (e.key === "Escape") {
    handleHide();
    e.preventDefault();
  }
});

defineExpose({
  handleHide,
  handleOpen,
});
</script>

<template>
  <div ref="selectedContentRef" class="relative flex flex-col space-y-2">
    <span v-if="label" class="text-label">{{ label }}</span>
    <div
      class="bg-basic-1 center-x px-3 sm:px-4 xl:px-5 h-10 rounded-lg cursor-pointer"
      :class="[{ 'border border-basic-5': border }, selectedOption ? 'text-basic-12' : 'text-basic-9', stylesTrigger]"
      @click="isCollapse = !isCollapse"
    >
      <template v-if="!hasTrigger">
        <input
          type="button"
          :value="displayText"
          class="qbutton flex-1 justify-start font-medium"
        >
        <NuxtIcon
          name="chervon-down"
          class="text-xl transition-transform duration-150 ml-2"
          :class="isCollapse ? 'rotate-180' : ''"
        />
      </template>
      <slot name="trigger" />
    </div>
    <div
      v-if="isCollapse && options?.length"
      class="bg-basic-1 flex flex-col p-2 rounded-xl absolute top-full pt-2 left-0 right-0 z-dropdown min-w-[180px] shadow-xsm"
      :class="stylesDropdown"
    >
      <BaseSelectItem
        v-for="option in options"
        :key="option.value"
        :option="option"
        :selected-list="selectedOption"
        :icon-check="iconCheck"
        @click="handleSelect(option)"
      />
    </div>
  </div>
</template>
