<template>
    <div class="w-full flex justify-between items-center mb-6">
  <h1 class="text-3xl font-bold">{{route().params.type}}s</h1>
  <Link :href="route('posts.create',{type : route().params.type})" class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
    + Create
  </Link>
</div>

<div class="relative overflow-x-auto rounded-lg lg:grid-cols-3  grid grid-cols-1 gap-4   dark:border-gray-700">
    

<div v-for="post in posts" :key="post.id" class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" :src="post.image" :alt="post.title" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.description }}</p>
        <Link :href="route('posts.show', post.id)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Show
            
        </Link>
        <Link :href="route('posts.edit', post.id)" class="inline-flex items-center px-3  mx-3  py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
           Edit
             
        </Link>
        <Link :href="route('posts.destroy', post.id)" method="delete" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
           Delete
             
        </Link>
    </div>
</div>

</div>

</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Link } from "@inertiajs/vue3";

defineOptions({
  layout: AuthenticatedLayout,
});
const props = defineProps({
  posts: Object,
});

</script>

<style>

</style>