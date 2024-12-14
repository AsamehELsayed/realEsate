<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h1 class="text-2xl font-semibold text-gray-800 mb-6">Settings</h1>

      <form @submit.prevent="updateSettings">
        <div class="mb-4">
          <label for="website_name" class="block text-sm font-medium text-gray-700">Website Name</label>
          <input v-model="form.website_name" id="website_name" type="text"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="grid grid-cols-3 gap-4">
          <!-- Main Color -->
          <div class="mb-4">
            <label for="main_color" class="block text-sm font-medium text-gray-700">Main Color</label>
            <div class="mt-1 flex items-center">
              <input v-model="form.main_color" id="main_color" type="color"
                class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <span class="ml-2 text-sm text-gray-700">{{ form.main_color }}</span>
            </div>
          </div>

          <!-- Secondary Color -->
          <div class="mb-4">
            <label for="secondary_color" class="block text-sm font-medium text-gray-700">Secondary Color</label>
            <div class="mt-1 flex items-center">
              <input v-model="form.secondary_color" id="secondary_color" type="color"
                class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <span class="ml-2 text-sm text-gray-700">{{ form.secondary_color }}</span>
            </div>
          </div>

          <!-- Background Color -->
          <div class="mb-4">
            <label for="bg_color" class="block text-sm font-medium text-gray-700">Background Color</label>
            <div class="mt-1 flex items-center">
              <input v-model="form.bg_color" id="bg_color" type="color"
                class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <span class="ml-2 text-sm text-gray-700">{{ form.bg_color }}</span>
            </div>
          </div>

          <!-- Main Font Color -->
          <div class="mb-4">
            <label for="main_font_color" class="block text-sm font-medium text-gray-700">Main Font Color</label>
            <div class="mt-1 flex items-center">
              <input v-model="form.main_font_color" id="main_font_color" type="color"
                class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <span class="ml-2 text-sm text-gray-700">{{ form.main_font_color }}</span>
            </div>
          </div>

          <!-- Secondary Font Color -->
          <div class="mb-4">
            <label for="secondary_font_color" class="block text-sm font-medium text-gray-700">Secondary Font
              Color</label>
            <div class="mt-1 flex items-center">
              <input v-model="form.secondary_font_color" id="secondary_font_color" type="color"
                class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <span class="ml-2 text-sm text-gray-700">{{ form.secondary_font_color }}</span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <!-- File Input -->
          <input id="logo" type="file" accept="logo/*" @change="handlelogoUpload"
            class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />

          <!-- Progress Bar -->
          <div v-if="form.progress" class="relative w-full h-2 bg-gray-200 rounded-md">
            <div class="absolute top-0 left-0 h-2 bg-blue-500 rounded-md"
              :style="{ width: `${form.progress.percentage}%` }">
            </div>
          </div>
          <p v-if="form.progress" class="text-sm text-gray-500">
            {{ form.progress.percentage }}%
          </p>
        
          <!-- Error Message -->
          <p v-if="form.errors.logo" class="text-sm text-red-500">
            {{ form.errors.logo }}
          </p>

          <!-- logo Preview -->
          <div  class="mt-4 w-full flex justify-center">
            <img :src="previewlogo " alt="Preview logo"
              class="w-96 h-96 rounded-md shadow-md object-cover border border-gray-300" />
          </div>
        </div>
        <div class="space-y-4">
          <!-- File Input -->
          <input id="image" type="file" accept="logo/*" @change="handlebgUpload"
            class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />

          <!-- Progress Bar -->
          <div v-if="form.progress" class="relative w-full h-2 bg-gray-200 rounded-md">
            <div class="absolute top-0 left-0 h-2 bg-blue-500 rounded-md"
              :style="{ width: `${form.progress.percentage}%` }">
            </div>
          </div>
          <p v-if="form.progress" class="text-sm text-gray-500">
            {{ form.progress.percentage }}%
          </p>
        
          <!-- Error Message -->
          <p v-if="form.errors.logo" class="text-sm text-red-500">
            {{ form.errors.main_bg_image }}
          </p>

          <!-- logo Preview -->
          <div  class="mt-4 w-full flex justify-center">
            <img :src="previewbg " alt="Preview logo"
              class="w-96 h-96 rounded-md shadow-md object-cover border border-gray-300" />
          </div>
        </div>

        <div class="mb-4">
          <label for="facebook" class="block text-sm font-medium text-gray-700">Facebook URL</label>
          <input v-model="form.facebook" id="facebook" type="url"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div class="mb-4">
          <label for="linkedin" class="block text-sm font-medium text-gray-700">LinkedIn URL</label>
          <input v-model="form.linkedin" id="linkedin" type="url"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="form.email" id="email" type="email"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input v-model="form.phone" id="phone" type="text"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>


        <div class="mb-4">
          <label for="footer-text" class="block text-sm font-medium text-gray-700">Footer Text</label>
          <input v-model="form.footer_text" id="footer-text" type="text"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div class="mb-4">

          <label for="footer-link" class="block text-sm font-medium text-gray-700">Footer Link</label>
          <textarea v-model="form.footer_description" id="footer-link" type="url"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <button type="submit"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Save
          Settings</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Import necessary functions
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ref, watch } from 'vue';
import { useForm, router } from '@inertiajs/vue3';
import { computed } from 'vue';

defineOptions({
  layout: AuthenticatedLayout
});

// Define props to receive data passed from the parent (Inertia)
const props = defineProps({
  settings: Object,
});

// Initialize the form with default values from the settings
const form = useForm({
  website_name: props.settings.website_name || '',
  main_color: props.settings.main_color || '#ffffff',
  secondary_color: props.settings.secondary_color || '#ffffff',
  bg_color: props.settings.bg_color || '#ffffff',
  main_font_color: props.settings.main_font_color || '#000000',
  secondary_font_color: props.settings.secondary_font_color || '#555555',
  logo: null,
  main_bg_image: null,
  facebook: props.settings.facebook || '',
  linkedin: props.settings.linkedin || '',
  email: props.settings.email || '',
  phone: props.settings.phone || '',
  footer_text: props.settings.footer_text || '',
  footer_description: props.settings.footer_description || '',
});

const handlelogoUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.logo = file;
  }
};

// logo Preview
const previewlogo = computed(() => {
    if (form.logo instanceof File) {
        return URL.createObjectURL(form.logo); // If it's a file, create an object URL
    }
    if (typeof form.logo === 'string' && form.logo) {
        return `/storage/${form.logo}`; // If it's a string (image path), return it directly
    }
    return props.settings.logo ? `/storage/${props.settings.logo}` : null; // Return stored logo or null if not available
});

const handlebgUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.main_bg_image = file;
  }
};

// Background Preview
const previewbg = computed(() => {
    if (form.main_bg_image instanceof File) {
        return URL.createObjectURL(form.main_bg_image); // If it's a file, create an object URL
    }
    if (typeof form.main_bg_image === 'string' && form.main_bg_image) {
        return `/storage/${form.main_bg_image}`; // If it's a string (image path), return it directly
    }
    return props.settings.main_bg_image ? `/storage/${props.settings.main_bg_image}` : null; // Return stored logo or null if not available
});
// Method to update settings using Inertia
const updateSettings = () => {
  // Send the updated settings via a POST request using Inertia.js
  form.post(route('settings.store'));
};
</script>

<style scoped>
/* You can add any custom styles here if needed */
</style>