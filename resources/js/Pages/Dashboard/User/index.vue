<template>
    <div class="w-full flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Plans</h1>
      <Link :href="route('users.create')"  v-if="auth.user.is_admin"  class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
        + Create
      </Link>
    </div>
    
    <div class="relative overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
      <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
        <thead class="text-sm font-semibold uppercase bg-gray-100 dark:bg-gray-800">
          <tr>
            <th scope="col" class="px-6 py-3">user ID</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Count of employees</th>
            <th scope="col" class="px-6 py-3">Total</th>
            <th scope="col" class="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" 
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-700 transition-colors">
            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ user.id }}</td>
            <td class="px-6 py-4">{{ user.name }}</td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">{{ user.phone }}</td>
            <td class="px-6 py-4 flex justify-center gap-2">
              <Link :href="route('users.edit', user.id) " v-if="auth.user.is_admin" 
                    class="px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded shadow hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300">
               Edit
              </Link>      
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </template>
    
    <script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Link } from '@inertiajs/vue3';
    
    defineOptions({
        layout: AuthenticatedLayout
    })
    const props= defineProps({
        users:Object,
        auth:Object
    })
    </script>
    
    <style>
    
    </style>