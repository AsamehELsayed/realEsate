<template>
    <div class="w-full flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Contacts</h1>
      <!-- <Link :href="route('contacts.create')" class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
        + Create
      </Link> -->
    </div>
  
    <div class="relative overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
      <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400">
        <thead class="text-sm font-semibold uppercase bg-gray-100 dark:bg-gray-800">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3 text-center">Subject</th>
            <th scope="col" class="px-6 py-3 text-center">Message</th>
            <th scope="col" class="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="contact in contacts"
            :key="contact.id"
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-700 transition-colors"
          >
            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">{{ contact.name }}</td>
            <td class="px-6 py-4">{{ contact.email }}</td>
            <td class="px-6 py-4">{{ contact.subject }}</td>
            <td class="px-6 py-4">
              <span v-if="!expandedMessages[contact.id]">
                {{ contact.message.slice(0, 30) }}
                <span v-if="contact.message.length > 30" @click="toggleMessage(contact.id)" class="text-indigo-600 cursor-pointer hover:underline">
                  ...See more
                </span>
              </span>
              <span v-else>
                {{ contact.message }}
                <span @click="toggleMessage(contact.id)" class="text-indigo-600 cursor-pointer hover:underline">
                  Show less
                </span>
              </span>
            </td>
            <td class="px-6 py-4 flex justify-center gap-2">
              <Link
                :href="route('contacts.destroy', contact.id)"
                method="delete"
                class="px-3 py-2 bg-red-600 text-white text-sm font-medium rounded shadow hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300"
              >
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
import { reactive } from 'vue';
  
  defineOptions({
    layout: AuthenticatedLayout,
  });
  
  const props = defineProps({
    contacts: Object,
  });
  
  // State to track expanded messages
  const expandedMessages = reactive({});
  
  // Function to toggle message visibility
  function toggleMessage(contactId) {
    expandedMessages[contactId] = !expandedMessages[contactId];
  }
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>
  