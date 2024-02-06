<template>
  <div class="h-8 w-8 rounded-full overflow-hidden flex border hover:border-teal-300 justify-center items-center bg-white">
    <a target="_blank" class="w-full" :href="link">
      <Icon name="uil:github" />
      <img :src="image" alt="f" class="w-full h-full"/>
    </a>
  </div>
</template>

<script lang="ts" setup>
const props=defineProps({
  image:String,
  link:String,
})
</script>

<style>

</style>