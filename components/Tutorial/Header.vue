<template>
  <div class="py-2 px-4 w-full">
    <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold">{{ title }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title:{
    type:String,
    required:true,
  }
})
</script>

<style>

</style>