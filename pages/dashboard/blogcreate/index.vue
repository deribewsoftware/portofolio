<template>
  <div class="my-20 flex flex-col gap-20  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
    <h1>Create Blog</h1>
    <UNotifications />

<div class="py-20 space-y-6">
  <h1>{{ blogData.title }}</h1>

  <template v-for="(content,i) in contentData" :key="i">
    <div class="">
     <h3 class="font-bold">contents{{ content}}</h3>
     <ul v-if="content.list!==''">
      <li>{{ content.list }}</li>
     </ul>
     <p v-if="content.content!==''">{{ content.content }}</p>
    </div>
  </template>


</div>












    <div class=" flex flex-col gap-10">

      
      <div class="grid grid-cols-1 md:grid-cols-2  gap-20  px-4">
        <USelectMenu
    v-model= "blogData.category"
    :loading="loading"
    :searchable="search"
    placeholder="Search for a category..."
    option-attribute="name"

    trailing
    by="id"
  />
        
      </div>


      <div class="grid grid-cols-1 md:grid-cols-2  gap-20  px-4">
        <UiInput label="Course Cover" v-model= "blogData.cover" />
        <UiInput label="Course Title" v-model= "blogData.title"/>
      </div>
      <div class="py-6 px-4 w-full">
       
        <Chips @addContent="handleAddContent" />
         
        
      </div>

      <div class="py-10 flex w-full justify-end pr-10">

        <button @click="submitBlog" class="px-2 py-1 rounded border bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600 transition duration:300">{{ loadingCourseCreate? "Loading...":"Submit"}}</button>
      </div>

    </div>
    
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { UseBlog } from '~/composables/blog';
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

const contData={
  title:null,
  image:null,
  content:null,
  list:null,
}

const contentData:any[]=[]
const  handleAddContent=(data:any) =>{
  contData.title=data.title
  contData.image=data.image
  contData.content=data.content
  contData.list=data.list
  contentData.push(data)
     
     

      
    }
 
      

    console.log('Received content data:', contentData);
const loadingCourseCreate=ref(false)

const {createBlog}=UseBlog();
const blogData=reactive({
             title:"",
              category:{
                name:""
              },
              cover:"",
  loadingCourseCreate:false,
})

async function submitBlog() { 
  
  
  blogData.loadingCourseCreate = true
  try{
    await createBlog({
              title: blogData.title,
              category: blogData.category.name,
              cover: blogData.cover,
              })

              toast.add({ title: 'Course Created Succesfully!' })

  }
  catch(error){
    console.log("error",error)
    toast.add({ title: 'Course not ceated!' })
  }finally{ blogData.loadingCourseCreate = false
  }
  
  
}












</script>

<style>

</style>