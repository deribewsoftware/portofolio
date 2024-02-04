<template>
  <div class="relative  flex justify-center w-[400px] items-center text-center ">
    <div class="flex flex-col items-center">
      <UAvatar
      size="3xl"
    src="https://avatars.githubusercontent.com/u/739984?v=4"
    alt="Avatar"
    class="absolute"
  />
  <div class="dark:bg-gray-800 mt-10">

    <!-- my information -->
    <div class="pt-10">
      <h4 class="text-lg font-bold p-2">Deribew Shimelis</h4>
     <h5 class="text-mdfont-semibold text-gray-600 dark:text-gray-400">Software Enginer|| Fullstack Developer</h5>
   
  </div>

  <div>
    <ULink
    to="/components/link"
    active-class="text-primary"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex gap-2"
  > <UAvatar icon="i-simple-icons-github" size="sm" />
    Link
  </ULink>
  <ULink
    to="/components/link"
    active-class="text-primary"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex gap-2"
  > <UAvatar icon="i-simple-icons-github" size="sm" />
    Link
  </ULink>
  <ULink
    to="/components/link"
    active-class="text-primary"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex gap-2"
  > <UIcon name="i-simple-icons-github" class="w-10 h-10 flex-shrink-0" />
    Link
  </ULink>
   
  </div>
  </div>
  </div>
  </div>
  
</template>

<script lang="ts" setup>

</script>

<style>

</style>