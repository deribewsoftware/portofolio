<template>
  <div class="z-50 fixed bg-white   dark:bg-gray-900  border-b border-gray-200 dark:border-gray-400 h-12 w-full flex justify-between items-center px-6 ">
    <div class="text-2xl font-extra-bold text-green-400">Ethio Technologies</div>


    



    <ul class="flex gap-2">
      
      <li>Service</li>
      <li>Projects</li>
      <li>Contact</li>
     


      <li> <UButton
      :icon="isDark ? 'i-heroicons-sun-20-solid': 'i-heroicons-moon-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      class="p
      mb-2"
      @click="isDark = !isDark"
    /></li>

    </ul>

  </div>
</template>













<script lang="ts" setup>


const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>














<style>

</style>






