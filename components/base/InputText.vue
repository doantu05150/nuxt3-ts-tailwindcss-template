<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "" },
  textAlign: { type: String, default: "left" },
  placeholder: { type: String, default: "" },
  error: { type: String, default: "" },
  className: { type: String, default: "" },
  classWrapper: { type: String, default: "" },
  clearable: { type: Boolean, default: false },
  searchable: { type: Boolean, default: false },
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
  type: {
    type: String,
    default: "text",
    validator: (t: string) =>
      ["text", "email", "tel", "date", "password", "url"].includes(t),
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
const isShowPassword = ref(false);
const isFocusing = ref(false);
const hasSubmit = ref(false);

const name = computed(() => props.label || "oinput-text");
const isPassword = computed(() => props.type === "password");
const errorMsg = computed(() => internalError.value || props.error);
const _type = computed(() => {
  if (props.type === "password")
    return isShowPassword.value ? "text" : "password";

  return props.type;
});
const disabledInput = computed(
  () => props.disabled || props.loading || props.readonly,
);
const height = computed(() => {
  switch (props.size) {
    case "sm":
      return "h-9";
    case "xl":
      return "h-12";
    case "lg":
      return "h-11";
    case "md":
    default:
      return "h-10";
  }
});
const highlightFocusStyles = computed(() => {
  if (props.highlightFocus && isFocusing.value)
    return "ring-1 ring-basic-2";

  return "";
});

const showIcons = computed(() => (isPassword.value || props.clearable || props.searchable));
const showSearchIcon = computed(() => props.searchable && !isPassword.value && !inputValue.value);
const showClearIcon = computed(() => props.clearable && inputValue.value && !isPassword.value);

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

function onSearch() {
  if (disabledInput.value)
    return;

  hasSubmit.value = true;
  emits("search", inputValue.value);
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

function clear() {
  if (disabledInput.value)
    return;

  hasSubmit.value = false;
  emits("update:modelValue", "");
  emits("enter");
}

// function showPassword() {
//   isShowPassword.value = !isShowPassword.value;
// }

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
      :class="[height, classWrapper, highlightFocusStyles, label ? 'mt-2' : '']"
    >
      <input
        ref="inputRef"
        :type="_type"
        :value="inputValue"
        :placeholder="placeholder"
        :class="[className, showIcons ? 'pr-10' : '']"
        :disabled="disabled"
        :readonly="readonly || loading"
        class="h-full qinput"
        lang="en"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
        @input="onInput"
        @keypress.enter="onEnter"
        @focus="onFocus"
        @blur="onBlur"
      >
      <div
        v-if="showIcons"
        class="pl-2 pr-3 h-full center-x absolute top-0 right-0"
      >
        <!-- <button
          v-if="isPassword"
          class="h-5 w-5 flex items-center justify-center"
          @click="showPassword"
        >
          <div
            class="h-full w-full text-txt-2"
            :class="isShowPassword ? 'i-oxl-eye-off' : 'i-oxl-eye'"
          />
        </button> v-else-if -->
        <button
          v-if="showSearchIcon"
          class="h-5 w-5 centeral"
          @click="onSearch"
        >
          <NuxtIcon name="search" class="text-basic-12 text-xl" />
        </button>
        <button
          v-else-if="showClearIcon"
          class="h-5 w-5 centeral"
          @click="clear"
        >
          <NuxtIcon name="close" class="text-basic-12 text-xl" />
        </button>
      </div>
    </div>
    <span
      v-if="errorMsg"
      class="text-xs text-system-red"
    >
      {{ errorMsg }}
    </span>
  </div>
</template>
