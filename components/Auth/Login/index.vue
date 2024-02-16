<template>
  <div class="p-4 rounded-lg border shadow-xl shadow-gray-200 dark:shadow-black border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 w-full space-y-6 text-center items-center">
    <h1 class="font-bold text-lg text-center">Login</h1>
    <div class="flex flex-col gap-2">
      <div class="relative z-0 w-full mb-5 group text-start">
        <input type="email" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  v-model="data.email"/>
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
    </div>

    <div class="relative z-0 w-full mb-5  text-start group">
        <input type="password" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  v-model="data.password"/>
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
    </div>

    </div>

<div class="flex w-full justify-end px-2">
  <button  @click="handleLogin" class="bg-gray-100 hover:bg-gray-200  dark:bg-gray-700  hover:dark:bg-gray-600 transition duration-200 rounded-lg px-2 py-1">{{ data.loading? "Loading..." :"Submit"}}</button>
</div>

    
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import useAuth from '~/composables/useAuth';


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

</script>

<style>

</style>