<template>
  <div class="flex flex-col pt-12 p-4 gap-20 items-center justify-center">
    <TutorialHero/>
    <div class="flex justify-center w-full ">
      <div v-if="pending" class="">
        <h1>course loading..</h1>
      </div>
      <div v-else class="w-full m-4 md:10/12 lg:9/12 xl:w-8/12 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">

<template v-for="course in courses" :key="course.id">
  <TutorialCard
  :id="course.id"
  :title="course.title"
  :cover="course.cover? course.cover :''"
  :category="course.category"
  :price="course.price"
  :rating="course.rating? course.rating :0"
  />
</template>


      </div>
    </div>

    
  </div>
</template>

<script setup lang="ts">
import useAuth from '~/composables/useAuth';

const loading = ref(false)

const {pending,data:courses}=useFetch("/api/course/list",{
  lazy:false,
  server:false,
})



definePageMeta({
  layout: 'tutorial'
})

const {useAuthUser}=useAuth()
let user=useAuthUser().value
if (!user){
  user=user
  
}else{
  console.log("user:-",user)
}


</script>


<style>

</style>