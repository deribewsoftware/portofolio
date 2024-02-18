<template>
  <div class="my-20 flex flex-col gap-20  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
    <h1>Edit Course</h1>
    <UNotifications />

    <form @submit.prevent="submitCourse" class=" flex flex-col gap-10">

      <UiInput label="Course Cover" v-model="courseData.cover" />
      <div class="grid grid-cols-1 md:grid-cols-2  gap-20  px-4">
        <USelectMenu
    v-model="courseData.category"
    :loading="loading"
    :searchable="search"
    placeholder="Search for a category..."
    option-attribute="name"

    trailing
    by="id"
  />

        <USelectMenu
    v-model="courseData.level"
    :loading="loading"
    :searchable="search"
    placeholder="Search for a course Level..."
    option-attribute="name"

    trailing
    by="id"
  />
      </div>


      <div class="grid grid-cols-1 md:grid-cols-2  gap-20  px-4">
        <UiInput label="Course Title" v-model="courseData.title"/>

        <UiInput label="price" v-model="courseData.price" />
      </div>

      <UiTextarea label="Course Description" v-model="courseData.description" />


      <UiTextarea  label="Course Requirements" v-model="courseData.requriments" />


      <UiTextarea  label="Who is The Course" v-model="courseData.whoUseIt" />
      <div class="py-10 flex w-full justify-end pr-10">

        <button type="submit" class="px-2 py-1 rounded border bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600 transition duration:300">{{ loadingCourseCreate? "Loading...":"Submit"}}</button>
      </div>

    </form>
    <div class="" @click="toast.add({ title: 'Hello world!' })" >toast</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const toast = useToast()



definePageMeta({
  layout:"dashboard"
})



const loading = ref(false)

const category = ref()
const level = ref()
console.log("category",category.value);
console.log("level",level.value);
async function search (q: string) {
  loading.value = true

  const categories = await $fetch<any[]>('/api/category/course/list', { params: { q } })

  loading.value = false

  return categories
}









const loadingCourseCreate=ref(false)

const {createCourse}=UseCourse();
const courseData=reactive({
             title:"",
              category:{
                name:""
              },
              description:"",
              requriments:"",
              whoUseIt:"",
              level:{
                name:""
              },
              price:"",
              cover:"",
  loadingCourseCreate:false,
})

async function submitCourse() {
  courseData.loadingCourseCreate = true
  try{
    await createCourse({
              title:courseData.title,
              category:courseData.category.name,
              description:courseData.description,
              requriments:courseData.requriments,
              whoUseIt:courseData.whoUseIt,
              level:courseData.level.name,
              price:parseFloat(courseData.price),
              cover:courseData.price,})

              toast.add({ title: 'Course Created Succesfully!' })

  }
  catch(error){
    console.log("error",error)
    toast.add({ title: 'Course not ceated!' })
  }finally{
    courseData.loadingCourseCreate = false
  }
  
  
}
</script>

<style>

</style>