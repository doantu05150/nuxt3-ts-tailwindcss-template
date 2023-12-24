<template>
  <section class="section-banner min-h-[79vh] sm:min-h-svh flex h-1 bg-gradient-blue pt-header text-basic-1">
    <div class="main-container flex flex-col justify-between">
      <div class="py-12 sm:py-14 lg:py-16 xl:py-20 centeral">
        <h1 class="text-title centeral flex-col mx-auto sm:gap-5 w-full">
          <span class="inline text-center">
            Free Online Sources<span class="inline sm:hidden">, Create Amazing</span>
          </span>
          <div class="inline-flex flex-row">
            <span class="hidden sm:inline">Create Amazing</span>
            <div class="flex flex-col space-y-8 h-12 md:h-[72px] overflow-hidden border border-basic-1">
              <span class="">Quiz</span>
            <!-- <span class="">Poll</span>
            <span class="">Survey</span> -->
            </div>
          </div>
        <!-- <span>in Seconds</span> -->
        </h1>
      </div>
      <img src="~/assets/images/background/banner.png" class="w-full" alt="banner">
    </div>
  </section>
</template>

<style scoped>
.text-title span {
  @apply text-5xl md:text-[72px] font-bold;
}

.section-banner {
  /* background-image: url(~/assets/images/background/line1.svg); */
}
</style>
