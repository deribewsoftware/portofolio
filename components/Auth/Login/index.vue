<template>
  




  <div v-if="!user">
    <UButton 
    variant="ghost"
    class="text-base"
    label="Login" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4 rounded-lg border shadow-xl shadow-gray-200 dark:shadow-black border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 w-full space-y-6 text-center items-center">
    <h1 class="font-bold text-lg text-center">Login</h1>
    <div class="flex flex-col gap-2">
      <UiInput
      label="Your Email"
      type="email"
      v-model="data.email"
      />

      <UiInput
      label="Your Password"
      type="password"
      v-model="data.password"
      />
      

    

    </div>

<div class="flex w-full justify-end px-2">
  <button  @click="handleLogin" class="bg-gray-100 hover:bg-gray-200  dark:bg-gray-700  hover:dark:bg-gray-600 transition duration-200 rounded-lg px-2 py-1">{{ data.loading? "Loading..." :"Submit"}}</button>
</div>

    
  </div>
    </UModal>
  </div>










</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import useAuth from '~/composables/useAuth';

const isOpen = ref(false)
const {login}=useAuth();
const data=reactive({
  email:"",
  password:"",
  loading:false,
})

async function handleLogin() {
  data.loading = true
  try{
    await login({email:data.email,password:data.password})

  }catch(error){}finally{
    data.loading = false
  }
  
  
}

const {data:user}=useFetch("/api/auth/user",{
  lazy: false,
  server:false,
})

</script>

<style>

</style>