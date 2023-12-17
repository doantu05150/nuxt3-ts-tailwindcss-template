<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "" },
  textAlign: { type: String, default: "left" },
  placeholder: { type: String, default: "" },
  error: { type: String, default: "" },
  className: { type: String, default: "" },
  classWrapper: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  highlightFocus: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  size: {
    type: String,
    required: false,
    default: "xl",
    validator: (t: string) => ["sm", "md", "lg", "xl"].includes(t),
  },
});

const emits = defineEmits([
  "update:modelValue",
  "enter",
  "search",
  "focus",
  "blur",
  "input",
]);

const inputRef = ref();
const inputValue = ref("");
const internalError = ref("");
const isFocusing = ref(false);
const hasSubmit = ref(false);

const name = computed(() => props.label || "oinput-text");
const errorMsg = computed(() => internalError.value || props.error);
const disabledInput = computed(
  () => props.disabled || props.loading || props.readonly,
);
const highlightFocusStyles = computed(() => {
  if (props.highlightFocus && isFocusing.value)
    return "ring-1 ring-basic-2";

  return "";
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (inputValue.value === newValue)
      return;

    inputValue.value = newValue;
  },
  { immediate: true, deep: true },
);

function onInput(event: any) {
  if (disabledInput.value)
    return;

  const text = event?.target?.value || "";
  emits("input", text);
  emits("update:modelValue", text);
}

function onEnter(event: any) {
  if (disabledInput.value)
    return;

  const text = event?.target?.value || "";
  hasSubmit.value = true;
  emits("enter", text);
}

function onFocus() {
  if (disabledInput.value)
    return;

  isFocusing.value = true;
  emits("focus", inputValue.value);
}

function onBlur() {
  if (disabledInput.value)
    return;

  isFocusing.value = false;
  emits("blur", inputValue.value);
}

function focusInput() {
  if (inputRef.value) {
    setTimeout(() => {
      inputRef.value.focus();
    }, 50);
  }
}

defineExpose({
  focusInput,
});
</script>

<template>
  <div class="relative inline-block w-full">
    <label v-if="label" :for="name" class="text-label">
      {{ label }}
      <span v-if="required" class="text-system-red">*</span>
    </label>
    <div
      class="qinput-wrapper"
      :class="[classWrapper, highlightFocusStyles, label ? 'mt-2' : '']"
    >
      <textarea
        ref="inputRef"
        :value="inputValue"
        :placeholder="placeholder"
        :class="[className]"
        :disabled="disabled"
        :readonly="readonly || loading"
        rows="2"
        class="block h-full qinput resize-none min-h-[48px] py-3 pr-2"
        lang="en"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
        @input="onInput"
        @keypress.enter="onEnter"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
    <span
      v-if="errorMsg"
      class="text-xs text-system-red"
    >
      {{ errorMsg }}
    </span>
  </div>
</template>
