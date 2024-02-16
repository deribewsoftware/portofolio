<template>
  <div class="fixed bg-white dark:bg-gray-900 flex border-b border-gray-200 dark:border-gray-400 h-12 w-full flex justify-between items-center px-6 ">
    <div class="text-2xl font-extra-bold text-green-400">Deri Tech</div>

    <ul class="flex gap-2">
      <li><div>
    <UButton label="Signup"
    variant="ghost"
     @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4">
        <Placeholder class="h-48" />
      </div>
    </UModal>
  </div></li>
      <li><div>
    <UButton variant="ghost" label="Login" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4">
        <Placeholder class="h-48" />
      </div>
    </UModal>
  </div></li>
      <li><UDropdown  :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown></li>


      <li> <UButton
      :icon="isDark ? 'i-heroicons-sun-20-solid': 'i-heroicons-moon-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      class="p
      mb-2"
      @click="isDark = !isDark"
    /></li>

    </ul>

  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false)

const items = [
  [{
    label: 'ben@example.com',
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











const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<style>

</style>






