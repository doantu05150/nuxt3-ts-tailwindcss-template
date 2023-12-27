<template>
  <footer class="bg-lines min-h-[60vh] bg-gradient-blue text-basic-1">
    <div class="pt-8 sm:pt-10 xl:pt-section" />
    <div class="main-container pt-8 sm:pt-10 xl:pt-section pb-6">
      <h2 class="text-title">
        <p>Ready to get started?</p>
        <p>It's free</p>
      </h2>
      <div class="flex space-x-3 justify-center items-center py-8 md:py-section">
        <BaseButton type="outline" rounded="full" color="white" size="lg" class="md:min-w-[200px]">
          Create Poll
        </BaseButton>
        <BaseButton type="outline" rounded="full" color="white" size="lg" class="md:min-w-[200px]">
          Create Quiz
        </BaseButton>
        <BaseButton type="outline" rounded="full" color="white" size="lg" class="md:min-w-[200px]">
          Create Survey
        </BaseButton>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.text-title {
  @apply text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center text-basic-1 !leading-tight;
}
</style>
