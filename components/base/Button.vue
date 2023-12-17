<script setup lang="ts">
const props = defineProps({
  iconLeft: { type: String, required: false, default: "" },
  iconRight: { type: String, required: false, default: "" },
  iconStyle: { type: String, required: false, default: "" },
  iconFilled: { type: Boolean, required: false, default: false },
  loading: { type: Boolean, required: false, default: false },
  loadingIcon: { type: Boolean, required: false, default: false },
  loadingText: { type: String, required: false, default: "" },
  disabled: { type: Boolean, required: false, default: false },
  type: {
    type: String,
    required: false,
    default: "solid",
    validator: (value: string) => ["solid", "outline", "link"].includes(value),
  },
  color: {
    type: String,
    required: false,
    default: "blue",
    validator: (value: string) =>
      [
        "blue",
        "green",
        "red",
        "purple",
        "orange",
        "indigo",
        "black",
        "gray",
        "white",
      ].includes(value),
  },
  size: {
    type: String,
    required: false,
    default: "md",
    validator: (value: string) =>
      ["xs", "sm", "md", "lg", "xl"].includes(value),
  },
  rounded: {
    type: String,
    required: false,
    default: "xl",
    validator: (value: string) =>
      ["none", "md", "lg", "xl", "full"].includes(value),
  },
});

const emits = defineEmits(["click", "focus", "focusin", "focusout", "blur"]);

const colorVariants: Record<string, string> = {
  blue: "bg-main-blue-1 text-basic-1",
};
const outlineVariants: Record<string, string> = {
  blue: "border-main-blue-1 text-main-blue-1",
};
const sizeVariants: Record<string, string> = {
  xs: "px-4 h-8 min-w-[32px]",
  sm: "px-4 h-9 min-w-[36px]",
  md: "px-6 h-10 min-w-[40px]",
  lg: "px-7 h-11 min-w-[44px]",
  xl: "px-8 h-12 min-w-[48px]",
};
const roundedVariants: Record<string, string> = {
  none: "rounded-none",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const hasDefaultSlot = computed(() => useSlots().default);
const hasIcon = computed(() => props.iconLeft || props.iconRight);
const btnSize = computed(() => {
  return (
    sizeVariants[props.size] +
    `${hasIcon.value && !hasDefaultSlot.value ? " !px-0" : ""}`
  );
});
const iconClass = computed(() => {
  return {
    left: hasDefaultSlot.value ? "mr-1" : "",
    right: hasDefaultSlot.value ? "ml-1" : "",
  };
});
const btnRounded = computed(() => roundedVariants[props.rounded]);
const bgColor = computed(() => {
  if (props.type === "solid") {
    return colorVariants[props.color];
  }
  return "";
});
const btnType = computed(() => {
  if (props.type === "link") {
    return `bg-transparent ${outlineVariants[props.color]}`;
  }
  if (props.type === "outline") {
    return `border ${outlineVariants[props.color]}`;
  }
  return "text-txt-1";
});
const btnLoading = computed(() => (props.loading ? "loading" : ""));
const btnDisabled = computed(() => (props.disabled ? "disabled" : ""));

const classes = computed(() => [
  btnType.value,
  bgColor.value,
  btnSize.value,
  btnRounded.value,
  btnLoading.value,
  btnDisabled.value,
]);

function handleClick(e: any) {
  if (props.loading || props.disabled) {
    return;
  }
  emits("click", e);
}

function onFocus() {
  emits("focus");
}

function onFocusIn() {
  emits("focusin");
}

function onFocusOut() {
  emits("focusout");
}

function onBlur() {
  emits("blur");
}
</script>

<template>
  <button
    :class="classes"
    class="qbutton"
    @click="handleClick"
    @focus="onFocus"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
    @blur="onBlur"
  >
    <NuxtIcon
      v-if="iconLeft"
      :name="iconLeft"
      :class="[iconClass.left, iconStyle]"
      :filled="iconFilled"
      class="text-xl"
    />
    <template v-if="loading && (loadingIcon || loadingText)">
      <template v-if="loadingIcon">
        <NuxtIcon name="loading" class="text-xl" />
      </template>
      <template v-else-if="loadingText">
        {{ loadingText }}
      </template>
    </template>
    <slot v-else />
    <NuxtIcon
      v-if="iconRight"
      :name="iconRight"
      :class="[iconClass.right, iconStyle]"
      :filled="iconFilled"
      class="text-xl"
    />
  </button>
</template>

<style lang="css">
.disabled {
  @apply opacity-30 !cursor-not-allowed pointer-events-none;
}

.loading {
  @apply opacity-80 !cursor-none pointer-events-none;
}
</style>
