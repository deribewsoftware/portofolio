<template>
  <div class="min-h-screen w-full flex flex-col items-center pt-20 gap-10">
   
    <h1>Chapter id {{ chapterId }}</h1>

    <div class="flex flex-col w-full">
      <UiInput v-model="lessonData.title" label="Lesson Title"/>
      <div class="flex flex-col md:flex-row gap-2">
        <UiInput v-model="lessonData.videoCover" label="Video Cover"/>
        <UiInput v-model="lessonData.VideoUrl" label="Video"/>
      </div>
      <div class="pt-10 flex justify-end">
        <button class="border bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">{{loadingLessonCreate? "Loading...":"Submit"}}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


const router=useRoute();
const chapterId=router.params.chapterId;

const lessonData=reactive({
  title:"",
  videoCover:"",
  VideoUrl:"",
  loadingLessonCreate:false,
})




const toast=useToast();
const loadingLessonCreate=ref(false)
const data=[{}]
const {createLesson}=useLesson();


const courseId=router.params.courseId;
async function submitLesson() { 
  
  
  lessonData.loadingLessonCreate = true
  try{
    await createLesson({title: lessonData.title,videoCover:lessonData.videoCover,videoUrl:lessonData.VideoUrl},chapterId.toString())

              toast.add({ title: 'Lesson Created Succesfully!' })

  }
  catch(error){
    
    toast.add({ title: 'Lesson not ceated!' })
  }finally{ lessonData.loadingLessonCreate = false
  }
  
  
}










definePageMeta({
  layout:"dashboard",
})
</script>

<style>

</style>