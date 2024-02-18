<template>
   <UNotifications />
  <div class="pt-20 min-h-screen flex flex-col items-center gap-20">
    <div class="w-full">
      <TutorialHeader :title="course?.title||''"/>
    </div>
    <div class="flex flex-col gap-6 w-full ">
      <h1>Create Chapter</h1>
      <div class="flex ">
        <UiInput v-model="chapterData.title" label="Chapter Title"/>
        <div class="">
          <button @click="submitChapter" class="bg-gray-200 p-1 rounded-md dark:bg-gray-700">{{loadingChapterCreate? "Loading...":"Add"}}</button>
        </div>
      </div>
    </div>




    <div class="flex flex-col w-full">
      <h1>Chapter list</h1>
      <div class="">
        <UAccordion :items="course?.modules|| data" :ui="{ wrapper: 'flex flex-col w-full' }">
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
            name="i-heroicons-chevron-right-20-solid"
            class="w-5 h-5 ms-auto transform transition-transform duration-200"
            :class="[open && 'rotate-90']"
          />
        </template>
      </UButton>
    </template>
    <template #item="{item}">
   <div class="space-y-4">
    <div class="flex justify-end gap-2">
      <NuxtLink class="w-6 h-6">
        <UIcon name='i-heroicons-pencil-square-20-solid' class="text-green-400 w-full h-full"/>
      </NuxtLink>
      <NuxtLink class="w-6 h-6">
        <UIcon name='i-heroicons-trash-20-solid' class="text-red-400 w-full h-full"/>
      </NuxtLink>
    </div>
    <div class="flex flex-col px-4 bg-white dark:bg-gray-800">
      <div class="w-full flex justify-end ">
        <ULink :to="`/dashboard/courses/${courseId}/chapter/${item.id}/lesson/create`"
    active-class="text-primary"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
        
        Add Lesson
      </ULink>
      </div>
     <p>listsshdddddddddddddddddddddddddddddddddddddddddddd</p>
     <p>listsshdddddddddddddddddddddddddddddddddddddddddddd</p> 
     <p>listsshdddddddddddddddddddddddddddddddddddddddddddd</p>  
     <p>listsshdddddddddddddddddddddddddddddddddddddddddddd</p>
      <p>listsshdddddddddddddddddddddddddddddddddddddddddddd</p>
    </div>
   </div>
    </template>
  </UAccordion>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';






const toast=useToast();
const loadingChapterCreate=ref(false)
const data=[{}]
const {createChapter}=useChapter();
const chapterData=reactive({
             title:"",
              
  loadingChapterCreate:false,
})

const router=useRoute();
const courseId=router.params.courseId;
async function submitChapter() { 
  
  
  chapterData.loadingChapterCreate = true
  try{
    await createChapter({title: chapterData.title},courseId.toString())

              toast.add({ title: 'Course Created Succesfully!' })

  }
  catch(error){
    console.log("error",error)
    toast.add({ title: 'Course not ceated!' })
  }finally{ chapterData.loadingChapterCreate = false
  }
  
  
}












const {data:course}= await useFetch(`/api/course/get/${courseId}`)



  

definePageMeta({
  layout:"dashboard"
})
</script>

<style>

</style>