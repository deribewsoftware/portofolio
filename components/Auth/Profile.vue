<template>
  <div v-if="user" class="">
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p v-if="item.label==='email'" class="truncate font-medium text-gray-900 dark:text-white">
          {{ user?.email}}
        </p>
        <p v-else class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
</div>
</template>








<script lang="ts" setup>
import useAuth from '~/composables/useAuth';



const {initAuth}=useAuth()


onBeforeUnmount(()=>{
  initAuth();
})



const {data:user}=useFetch("/api/auth/user",{
  lazy: false,
  server:false,
})







definePageMeta({
  middleware: "auth",
});



















const items = [
  [{
    label: "email",
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open'
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone'
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal'
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
]

</script>








<style>

</style>