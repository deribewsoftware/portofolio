<script setup lang="ts">
const isOpen = ref(false)
const {data:user}=useFetch("/api/auth/user",{
  lazy: false,
  server:false,
})
</script>

<template>
  <div v-if="!user">
    <UButton variant="ghost" class="text-base" label="Signup" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4">
        <Placeholder class="h-48" />
      </div>
    </UModal>
  </div>
</template>

