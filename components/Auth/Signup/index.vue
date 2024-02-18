<template>
  




  <div v-if="!user">
    <UButton 
    variant="ghost"
    class="text-base"
    label="Signup" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4 rounded-lg border shadow-xl shadow-gray-200 dark:shadow-black border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 w-full space-y-6 text-center items-center">
    <h1 class="font-bold text-lg text-center">Signup</h1>
    <div class="flex flex-col gap-2">
      <UiInput
      label="Your Full Name"
     
      v-model="data.name"
      /> 
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

      <UiInput
      label="Repeat Password"
      type="password"
      v-model="data.repeatPassword"
      />
      

    

    </div>

<div class="flex w-full justify-end px-2">
  <button  @click="handleSignup" class="bg-gray-100 hover:bg-gray-200  dark:bg-gray-700  hover:dark:bg-gray-600 transition duration-200 rounded-lg px-2 py-1">{{ data.loading? "Loading..." :"Submit"}}</button>
</div>

    
  </div>
    </UModal>
  </div>










</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import useAuth from '~/composables/useAuth';

const isOpen = ref(false)
const {signupUser}=useAuth();
const data=reactive({
  name:"",
  email:"",
  password:"",
  repeatPassword:"",
  loading:false,
})

async function handleSignup() {
  data.loading = true
  try{
    await signupUser({
      name:data.name,
      email:data.email,
      password:data.password, 
      repeatPassword:data.repeatPassword,})

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