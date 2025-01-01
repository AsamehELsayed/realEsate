<script setup>
import { computed } from "vue";
import { useForm } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

defineOptions({
  layout: AuthenticatedLayout,
});

// Props
const props = defineProps(["section"]);

// Form Initialization
const form = useForm({
  name: props.section.name,
  content: { ...props.section.content },
  images: [], // For multiple image uploads
  _method: "PUT",
});

// Utility to check if value is an object
const isObject = (val) => val && typeof val === "object" && !Array.isArray(val);

// Format label text
const formatLabel = (key) => key.replace(/_/g, " ");

// Handle Image Upload
const handleImageUpload = (event, nestedKey = "image", parentKey = null) => {
  const files = event.target.files;
  if (files) {
    // If it's a nested field, append files to the specific nested key
    if (parentKey) {
      // Update the form content for nested fields
      form.content[parentKey][nestedKey] = Array.from(files);
    } else {
      // Update the top-level image field
      form.images = Array.from(files);
    }
  }
};

// Image Preview
const previewImages = computed(() => {
  const images = [];

  // Check for nested image fields
  Object.keys(form.content).forEach((key) => {
    if (key === "image" && form.images.length > 0) {
      images.push(...form.images.map((file) => URL.createObjectURL(file)));
    } else if (isObject(form.content[key])) {
      Object.keys(form.content[key]).forEach((nestedKey) => {
        if (nestedKey === "image" && form.content[key][nestedKey]) {
          images.push(`/storage/${form.content[key][nestedKey]}`);
        }
      });
    }
  });

  return images;
});

// Submit Handler
// Submit Handler
const submit = () => {
  const formData = new FormData();
  formData.append("name", form.name);

  // Append content fields
  Object.keys(form.content).forEach((key) => {
    if (key === "image" && form.images.length > 0) {
      form.images.forEach((image) => {
        formData.append("images[]", image); // Append each image file
      });
    } else if (isObject(form.content[key])) {
      // Handle nested objects (like capabilities_one)
      Object.keys(form.content[key]).forEach((nestedKey) => {
        const nestedValue = form.content[key][nestedKey];
        if (nestedKey === "image" && Array.isArray(nestedValue) && nestedValue.length > 0) {
          nestedValue.forEach((image) => {
            formData.append(`content[${key}][${nestedKey}]`, image); // Append nested image
          });
        } else {
          formData.append(`content[${key}][${nestedKey}]`, nestedValue);
        }
      });
    } else {
      formData.append(`content[${key}]`, form.content[key]);
    }
  });

  // Submit form using inertia or axios
  form.post(route("sections.update", props.section.id), {
    data: formData,
    forceFormData: true,
    onSuccess: () => {
      if (form.images.length > 0) {
        form.content.image = form.images[0].name; // Handle the main image logic
      }
    },
  });
};

</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-6">Edit {{ section.name }}</h1>
    <form
      @submit.prevent="submit"
      enctype="multipart/form-data"
      class="space-y-6 bg-white rounded-lg p-6 shadow-md"
    >
      <!-- Dynamic Content Fields -->
      <fieldset>
        <legend class="text-lg font-semibold text-gray-800">Content</legend>
        <div v-for="(value, key) in form.content" :key="key" class="mt-4">
          <label
            :for="key"
            class="block text-sm font-medium text-gray-700 capitalize"
          >
            {{ formatLabel(key) }}
          </label>

          <!-- Image Field -->
          <template v-if="key === 'image'">
            <div class="space-y-4">
              <!-- File Input for Image -->
              <input
                id="image"
                type="file"
                accept="image/*"
                multiple
                @change="handleImageUpload"
                class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />

              <!-- Progress Bar -->
              <div
                v-if="form.progress"
                class="relative w-full h-2 bg-gray-200 rounded-md"
              >
                <div
                  class="absolute top-0 left-0 h-2 bg-blue-500 rounded-md"
                  :style="{ width: `${form.progress.percentage}%` }"
                ></div>
              </div>
              <p v-if="form.progress" class="text-sm text-gray-500">
                {{ form.progress.percentage }}%
              </p>

              <!-- Error Message -->
              <p v-if="form.errors.image" class="text-sm text-red-500">
                {{ form.errors.image }}
              </p>

              <!-- Image Preview -->
              <div
                v-if="previewImages.length > 0"
                class="mt-4 w-full flex flex-wrap justify-center"
              >
                <div
                  v-for="(image, index) in previewImages"
                  :key="index"
                  class="w-32 h-32 mx-2 my-2"
                >
                  <img
                    :src="image"
                    alt="Preview Image"
                    class="w-full h-full object-cover rounded-md shadow-md border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </template>

          <!-- Other Fields (Nested Objects or Simple Text) -->
          <template v-else>
            <input
              v-if="!isObject(value)"
              :id="key"
              v-model="form.content[key]"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <div v-else>
              <div
                v-for="(nestedValue, nestedKey) in value"
                :key="nestedKey"
                class="mt-2"
              >
                <template v-if="nestedKey !== 'image'">
                  <label
                    :for="nestedKey"
                    class="block text-sm font-medium text-gray-700 capitalize"
                  >
                    {{ formatLabel(nestedKey) }}
                  </label>

                  <input
                    :id="nestedKey"
                    v-model="form.content[key][nestedKey]"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </template>
                <template v-else-if="nestedKey === 'image'">
                  <label
                    :for="nestedKey"
                    class="block text-sm font-medium text-gray-700 capitalize"
                  >
                    {{ formatLabel(nestedKey) }}
                  </label>

                  <input
                    :id="nestedKey"
                    type="file"
                    multiple
                    @change="handleImageUpload($event, nestedKey, key)" 
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </template>
              </div>
            </div>
          </template>

          <!-- Error Message for Fields -->
          <span
            v-if="form.errors[`content.${key}`]"
            class="text-red-500 text-sm mt-1"
          >
            {{ form.errors[`content.${key}`] }}
          </span>
        </div>
      </fieldset>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <button
          type="submit"
          class="px-6 py-2 bg-blue-500 text-white font-bold rounded shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Update Section
        </button>
      </div>
    </form>
  </div>
</template>
