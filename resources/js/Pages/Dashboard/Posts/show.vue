<template>
<div class="container mx-auto px-4 py-8">
  <!-- Header Section -->
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold">post Details</h1>
    <div class="space-x-2">
      <Link 
        :href="route('posts.edit', post.id)" 
        class="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300">
        ✏️ Edit
      </Link>
   
 
    </div>
  </div>

  <!-- post Details Card -->
  <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
    <div class="grid grid-cols-1 sm:grid-cols-1 gap-4">
      <div class="flex justify-between">
        <div>
          <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">post Name</h2>
          <p class="text-gray-900 dark:text-white">{{ post.title }}</p>
        </div>
        <img :src="post.image" :alt="post.title" class="w-32 h-32 object-cover rounded-lg">
      </div>
      <!-- post Name -->

    
      <div>
        <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Description</h2>
        <p class="text-gray-900 dark:text-white">
          {{ post.description || 'No description available.' }}
        </p>
      </div>
    </div>
  </div>

  <!-- Features Section -->
 
  <!-- Back Button -->
  <div class="mt-6">
    <Link 
      :href="route('posts.index',{type : post.type})" 
      class="px-6 py-3 bg-gray-600 text-white text-sm font-medium rounded-md shadow hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300">
      ← Back to posts
    </Link>
  </div>
</div>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link } from '@inertiajs/vue3';

defineOptions({
    layout: AuthenticatedLayout
})

const props = defineProps({
    post: Object
})
</script>

<style>

</style>