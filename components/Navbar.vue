<template>
  <header class="w-full fixed z-50 bg-white dark:bg-gray-900 dark:border-gray-800  block flex justify-end 2xl:hidden  border-b">
   
    <nav class="flex gap-2 p-2">
      <UDropdown 
   
      :items="navbardata" 
      :ui="{ item: { disabled: 'cursor-text select-text bg-opacity-80' } }"
       :popper="{ placement: 'bottom-start'}">


        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>




    <template  #item="{ item }">
     
      <ULink
      exact-hash
      activeClass="text-primary"
     inactive-class="
    text-gray-500 
    dark:text-gray-400 
    hover:text-gray-700 
    dark:hover:text-gray-200" 
    
    :to="item.href">
    {{ item.label}}
  </ULink>


    </template>
  </UDropdown>
  
  
          <UButton
      :icon="isDark ? 'i-heroicons-sun-20-solid': 'i-heroicons-moon-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      class="p
      mb-2"
      @click="isDark = !isDark"
    />
       
    </nav>
  </header>
</template>

<script lang="ts" setup>
const navbardata=[
  [{ 
    label:"About",
    href:"#about"
  }],[{
    label:"Education",
    href:"#education"
  }],[{
    label:"Exprience",
    href:"#exprience"
  }],[{
    label:"Skill",
    href:"#skill"
  }],[{
    label:"Portfolio",
    href:"#portfolio"
  }],
  [{
    label:"Service",
    href:"#service"
  }],
  [{
    label:"Testmonies",
    href:"#testmony"
  }],
  [{
    label:"Contact",
    href:"#contact"
  }],
]

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