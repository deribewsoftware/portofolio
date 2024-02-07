<template>
  <div class="p-2 md:p-4 my-6">
    <h1 class="text-2xl md:4xl font-bold border-y border-rose-400 dark:border-green-400">
      <UDivider     :ui="{ label: 'text-2xl md:4xl font-bold text-black dark:text-primary-800 border-2' } "><slot/></UDivider>
    </h1>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>