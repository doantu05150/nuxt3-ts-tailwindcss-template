<script setup lang="ts">
const check = ref(false);
</script>

<template>
  <div class="box-container">
    <div class="flex flex-col space-y-4 sm:space-y-6">
      <div class="form-item-wrapper">
        <p class="form-item-label">
          Require participants' names
        </p>
        <BaseSwitch v-model="check" />
      </div>

      <div class="form-item-wrapper">
        <p class="form-item-label">
          Share
        </p>
        <SettingShare />
      </div>

      <div class="form-item-wrapper">
        <p class="form-item-label">
          Limit participants
        </p>
        <BaseSelectInputNumber :disable="false" />
      </div>
    </div>
  </div>
</template>
