<template>
  <div class="min-h-screen flex  flex-col jitems-center pt-20 ">
    <div class="flex  w-full">
      <UiInput
      label="Chapter Title"
      v-model="chapterData.title"
      />
      <div class=""><button class="text-sm bg-gray-200 dark:bg-gray-700 p-1 rounded-md border hover:border-green-400 ">Add</button></div>
    </div>
    <div class="mt-10 flex flex-col gap-6">
      <h1>Chapters List</h1>
      <div class="">
        <UAccordion
    color="primary"
    variant="soft"
    size="sm"
    :items="[
       {  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
      {  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
     { label: '2. Getting Started', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
      { label: '3. Theming', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
       { label: '4. Components', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }]"
  >

  <template #default="{index,open,item}">
    <p>{{ item.content }}</p>

  </template>
  <template #item="index,item,open">
    <p>deribew shimelsi</p>

  </template>

</UAccordion>
      </div>
    </div>
  </div>
</template>








<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

import { useChapter} from '~/composables/chapter';




const router=useRoute()
const courseId=router.params.courseId

const {createChapter}=useChapter();
const chapterData=reactive({
             title:"",
             
  loadingCourseCreate:false,
})

async function submitBlog() { chapterData.loadingCourseCreate = true
  try{
    await createChapter({
              title: chapterData.title,
              },
              courseId
              )

              toast.add({ title: 'Course Created Succesfully!' })

  }
  catch(error){
    console.log("error",error)
    toast.add({ title: 'Course not ceated!' })
  }finally{ chapterData.loadingCourseCreate = false
  }
  
  
}










definePageMeta({
  layout:"dashboard"
})

</script>

<style>

</style>