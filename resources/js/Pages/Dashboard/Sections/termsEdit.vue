<template>
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-semibold mb-6">Edit Refund Policy</h1>
      <form @submit.prevent="submitForm">
        <!-- Title -->
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input
            v-model="form.title"
            type="text"
            id="title"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter the title"
          />
        </div>
  
        <!-- Header -->
        <div class="mb-4">
          <label for="header" class="block text-sm font-medium text-gray-700">Header</label>
          <input
            v-model="form.header"
            type="text"
            id="header"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter the header"
          />
        </div>
  
        <!-- Description -->
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            v-model="form.description"
            id="description"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows="3"
            placeholder="Enter the description"
          ></textarea>
        </div>
  
        <!-- HTML Content (Quill Editor) -->
        <div class="mb-6">
          <label for="html_content" class="block text-sm font-medium text-gray-700">HTML Content</label>
          <div id="html_content_editor" class="border border-gray-300 rounded-md min-h-[300px]"></div>
        </div>
  
        <!-- Submit Button -->
        <button
          type="submit"
          @click="submitForm"
          class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Quill from 'quill';
  import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
  import { router } from '@inertiajs/vue3';
  
  defineOptions({
    layout: AuthenticatedLayout,
  })
  // Props from Inertia
  const props = defineProps({
    section: Object,
  });
  
  // Reactive form data
  const form = ref({
    
    title: props.section.content.title || '',
    header: props.section.content.header || '',
    description: props.section.content.description || '',
    html_content: props.section.content.html_content || '',
    _method: 'PUT',
  });
  
  // Initialize Quill editor
  let quill;
  
  onMounted(() => {
    // Initialize Quill editor with content from section
    quill = new Quill('#html_content_editor', {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['bold', 'italic', 'underline'],
          ['link'],
          [{ align: [] }],
          ['image'],
        ],
      },
    });
  
    // Set the initial content of the editor
    quill.root.innerHTML = form.value.html_content;
  });
  
  // Handle form submission
  const submitForm = () => {
    form.value.html_content = quill.root.innerHTML;
    // Submit the form data to the server using Inertia
   router.post(route('updateTerms' , props.section.id), form.value);
  };
  </script>
  
  <style scoped>
  /* Tailwind will handle the styles, no additional custom CSS needed */
  </style>
  