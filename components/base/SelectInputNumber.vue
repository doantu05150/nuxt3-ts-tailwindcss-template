<script setup lang="ts">
const prop = defineProps({
  disable: { type: Boolean, default: false },
});
const value = ref("unlimited");
const inputValue = ref("1");

const classes = computed(() => {
  if (prop.disable) {
    return "border border-basic-5 bg-basic-4/25 pointer-events-none";
  }
  return "";
});

function activeClass(value: boolean) {
  if (prop.disable) {
    return "";
  }
  if (value) {
    return "border border-main-blue-1";
  }

  return "border border-basic-5";
}

function changeValue(data: string) {
  if (prop.disable) {
    return;
  }
  value.value = data;
}
</script>

<template>
  <div class="qselect inline-flex rounded-md p-0" :class="classes" role="group">
    <button
      type="button"
      class="qbutton px-4 sm:px-6 h-full rounded-s-xl"
      :class="activeClass(value === 'unlimited')"
      @click="changeValue('unlimited')"
    >
      Unlimited
    </button>
    <label
      for="inputNumber"
      class="qbutton px-4 sm:px-6 h-full rounded-e-xl"
      :class="activeClass(value === 'custom')"
      @click="changeValue('custom')"
    >
      <NuxtIcon name="minus" class="text-xl text-basic-5 hover:text-basic-7" />
      <input v-model="inputValue" name="inputNumber" :disable="classes" class="qinput border-none bg-transparent max-w-[48px] text-center p-0">
      <NuxtIcon name="plus" class="text-xl text-basic-5 hover:text-basic-7" />
    </label>
  </div>
  <!-- <div class="qselect flex-nowrap divide-x divide-main-blue-1 p-0">
    <button class="qbutton px-4 sm:px-6 h-full border-y border-l border-main-blue-1 rounded-tl-xl rounded-bl-xl">
      Unset
    </button>
    <div class="center-x px-3 space-x-1 h-full border-y border-r border-basic-5 rounded-tr-xl rounded-br-xl">
      <NuxtIcon name="minus" class="text-xl text-basic-5 hover:text-basic-7" />
      <input value="1" class="qinput border-none max-w-[48px] text-center p-0">
      <NuxtIcon name="plus" class="text-xl text-basic-5 hover:text-basic-7" />
    </div>
  </div> -->
</template>
