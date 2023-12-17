<template>
  <div class="relative form-container py-8 sm:py-12">
    <div class="flex flex-col md:flex-row gap-4 md:gap-6">
      <FormNavigateCreateForm
        title="Create a Poll"
        description="Complete the below fields to create your poll."
      />
      <div class="flex-1">
        <FormCreateQuestion />
        <FormSettings />
      </div>
    </div>
  </div>
</template>
