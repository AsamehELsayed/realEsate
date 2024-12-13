<template>
    <div class="w-full flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Chats</h1>
       
    </div>


    <Link 
  v-for="chat in chats" 
  :key="chat.id" 
    :href="route('chats.show', chat.id)" 
  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <div class="flex flex-col justify-between p-4 leading-normal w-full">
 
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ (chat?.last_message?.message || 'N/A').slice(0, 50) + '...' }}
    </p>
    <div class="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
      <span>Messages: {{ chat?.messages_count || 0 }}</span>
      <span>Last User: {{ chat?.user?.name    || 'N/A'}}</span>
      <span>Created At: {{ chat?.created_at || 2022}}</span>
    </div>
  </div>
</Link>



</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link } from '@inertiajs/vue3';
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
onMounted(() => {
    initFlowbite();
    window.Echo.private('NewChat')
        .listen('NewChatEvent', (e) => {
            props.chats.push(e.chat)
        })
})
const props = defineProps({
    chats: Object
})
defineOptions({
    layout: AuthenticatedLayout
})
</script>

<style></style>