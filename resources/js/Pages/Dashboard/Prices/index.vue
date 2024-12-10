<template>
<div class="w-full flex justify-between items-center mb-6">
  <h1 class="text-3xl font-bold">Plans</h1>
  <Link :href="route('prices.create')" class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
    + Create
  </Link>
</div>

<div class="relative overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
  <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
    <thead class="text-sm font-semibold uppercase bg-gray-100 dark:bg-gray-800">
      <tr>
        <th scope="col" class="px-6 py-3">Plan Name</th>
        <th scope="col" class="px-6 py-3">Price per hour $</th>
        <th scope="col" class="px-6 py-3">Count of employees</th>
        <th scope="col" class="px-6 py-3">Total</th>
        <th scope="col" class="px-6 py-3 text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="price in prices" :key="price.id" 
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-700 transition-colors">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ price.name }}</td>
        <td class="px-6 py-4">{{ price.price }}</td>
        <td class="px-6 py-4">{{ price.employees_count }}</td>
        <td class="px-6 py-4">{{ price.total }}$</td>
        <td class="px-6 py-4 flex justify-center gap-2">
          <Link :href="route('prices.edit', price.id)" 
                class="px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded shadow hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300">
           Edit
          </Link>
          <Link :href="route('prices.show', price.id)" 
                class="px-3 py-2 bg-green-600 text-white text-sm font-medium rounded shadow hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300">
            Show
          </Link>
          <Link :href="route('prices.destroy', price.id)" 
                method="delete"
                class="px-3 py-2 bg-red-600 text-white text-sm font-medium rounded shadow hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300">
            Delete
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
    prices:Object
})
</script>

<style>

</style>