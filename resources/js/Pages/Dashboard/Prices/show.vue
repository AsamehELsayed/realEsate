<template>
<div class="container mx-auto px-4 py-8">
  <!-- Header Section -->
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold">Plan Details</h1>
    <div class="space-x-2">
      <Link 
        :href="route('prices.edit', plan.id)" 
        class="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300">
        ✏️ Edit
      </Link>
   
 
    </div>
  </div>

  <!-- Plan Details Card -->
  <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- Plan Name -->
      <div>
        <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Plan Name</h2>
        <p class="text-gray-900 dark:text-white">{{ plan.name }}</p>
      </div>

      <!-- Price -->
      <div>
        <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Price</h2>
        <p class="text-gray-900 dark:text-white">{{ plan.price }}</p>
      </div>

      <!-- Per -->
      <div>
        <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Per</h2>
        <p class="text-gray-900 dark:text-white">{{ plan.per }}</p>
      </div>

      <!-- Description -->
      <div>
        <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Description</h2>
        <p class="text-gray-900 dark:text-white">
          {{ plan.description || 'No description available.' }}
        </p>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="bg-gray-50 dark:bg-gray-900 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
    <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Features</h2>
    <ul class="list-disc pl-5 space-y-2">
      <li v-for="feature in plan.features" :key="feature.id" class="text-gray-700 dark:text-gray-300">
        {{ feature }}
      </li>
    </ul>
  </div>

  <!-- Back Button -->
  <div class="mt-6">
    <Link 
      :href="route('prices.index')" 
      class="px-6 py-3 bg-gray-600 text-white text-sm font-medium rounded-md shadow hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300">
      ← Back to Plans
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
    plan: Object
})
</script>

<style>

</style>