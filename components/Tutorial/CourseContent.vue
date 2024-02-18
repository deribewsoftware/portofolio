<template>
   <UAccordion :items="course?.modules" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
        <template #leading>
          <div class="w-6 h-6 text-black rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1">
            {{ index + 1 }}
          </div>
        </template>

        <span class="truncate">{{ item.title}}</span>

        <template #trailing>
          <UIcon
            name="i-heroicons-chevron-down-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[open && 'rotate-180']"
          />
        </template>
      </UButton>
    </template>
    <template #item="{item}">
   <div class="space-y-4">
    
    <div class="flex flex-col px-4 bg-white dark:bg-gray-800">
      <div class="w-full flex justify-end ">
      </div>
     <div class="p-2 space-y-2">
      <template v-for="(lesson,i) in item.lessons" :key="i">
       <ULink :to="`/tutorial/course/${course?.id}/lesson/${lesson.id}`"
    active-class="text-primary flex justify-between border-b border-gray-100 dark:border-gray-700 "
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex justify-between border-b border-gray-100 dark:border-gray-700 " > 
        <p class="space-x-3"><span>{{ i+1 }}</span><span>{{ lesson.title }}</span></p>
       
      </ULink>

      </template>
     </div>
    </div>
   </div>
    </template>
  </UAccordion>
</template>

<script lang="ts" setup>
defineProps({
  course:{
    type:Object
  }
})
</script>

<style>

</style>