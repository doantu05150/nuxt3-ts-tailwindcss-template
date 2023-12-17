<script setup lang="ts">
defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  showList: { type: Boolean, default: false },
});

const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>

<template>
  <div>
    <div class="box-container w-full md:max-w-[280px] lg:max-w-[360px] h-fit">
      <NuxtIcon name="arrow-left" class="text-basic-12 text-xl" @click="goBack" />
      <h4 class="text-gradient-green font-semibold text-2xl 2xl:text-3xl mb-2 mt-3">
        {{ title }}
      </h4>
      <p class="text-basic-9 text-base">
        {{ description }}
      </p>
    </div>
    <BaseStepper :max-steps="2" class="mt-4 sm:mt-6" />
    <FormListSortableQuestion v-if="showList" />
  </div>
</template>
