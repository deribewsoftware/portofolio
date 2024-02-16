<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton variant="ghost" class="text-base" label="Signup" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4">
        <Placeholder class="h-48" />
      </div>
    </UModal>
  </div>
</template>

