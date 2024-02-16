<script setup lang="ts">




const items=[
  {
    label:"Course",
    content: [
      {
        url:"/dashboard/courses",
        label:"List",
      },
      {
        url:"/dashboard/coursecreate",
        label:"Create",
      }
    ]
  },
  {
    label:"Blog",
    content: [
      {
        url:"/dashboard/blogs",
        label:"List",
      },
      {
        url:"/dashboard/blogcreate",
        label:"Create",
      }
    ]
  },
  {
    label:"Category",
    content: [
      {
        url:"/dashboard/coursecategory",
        label:"Course",
      },
      {
        url:"/dashboard/blogcategory",
        label:"Blog",
      }
    ]
  }
]
</script>

<template>
  <div class="px-48">
    <div class="grid grid-cols-12 gap-20">
      <div class="col-span-2">
       <div class="fixed overflow-y-auto top-20">
        <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }" class="border-l-[1.5px] dark:border-gray-700"  default-open
    multiple>

<template #item="{ item }">
  <div class="py-2 flex flex-col gap-2 ">
    <template v-for="(c,i) in item.content" :key="i">
      <ULink
    :to="c.url"
    active-class="text-primary border-l-[1.5px] border-primary px-4"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:border-l  dark:hover:text-gray-200 dark:hover:border-gray-200 px-4"
  >
    {{ c.label }}
  </ULink>
    </template>
  </div>
</template>
<template #default="{ item, index, open }">
  
  <UButton color="gray" variant="ghost"  :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
    
   
    <span class="truncate text-md"> {{ item.label }}</span>

    <template #trailing>
      <UIcon
        name="i-heroicons-chevron-right-20-solid"
        class="w-5 h-5 ms-auto transform transition-transform duration-200"
        :class="[open && 'rotate-90']"
      />
    </template>

  </UButton>
</template>


</UAccordion>
       </div>
      </div>

      <div class="col-span-8">
    <slot/>


  </div>
    </div>
  </div>

  
  
</template>

