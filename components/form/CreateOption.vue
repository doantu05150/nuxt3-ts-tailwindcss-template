<script setup lang="ts">
const option = reactive({
  startCount: 2, // default minimum two options
  list: [
    {
      id: 1,
      content: "",
    },
    {
      id: 2,
      content: "",
    },
  ],
});

function addMoreOption() {
  option.startCount += 1;
  option.list.push({
    id: option.startCount,
    content: "",
  });
}

function removeItem(id: number) {
  option.list = option.list.filter(item => item.id !== id);
}
</script>

<template>
  <div class="flex flex-col space-y-3">
    <span class="text-label -mb-1">Answer options</span>
    <div
      v-for="(opt, index) in option.list"
      :key="opt.id"
      class="relative group"
    >
      <BaseInputText
        v-model="opt.content"
        :clearable="true"
        :placeholder="`Option ${index + 1}`"
      />
      <button
        v-if="index > 1 || option.list.length > 2"
        class="hidden group-hover:flex w-6 h-6 centeral absolute -right-2 -top-2 rounded-full border border-basic-4 bg-basic-1 cursor-pointer"
        @click="removeItem(opt.id)"
      >
        <NuxtIcon name="trash" class="text-system-red/60 hover:text-system-red text-sm" />
      </button>
    </div>
    <BaseButton icon-left="plus" type="outline" class="border-[2px] w-fit" rounded="full" @click="addMoreOption">
      Add Option
    </BaseButton>
    <FormConfigMultipleAnswers />
  </div>
</template>
