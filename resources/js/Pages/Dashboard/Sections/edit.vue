<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-semibold text-gray-800 mb-6">Edit Section</h1>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div v-for="(value, key) in form.content" :key="key" class="mb-6">
        <label :for="key" class="block text-sm font-medium text-gray-700 mb-2">
          {{ key.replace('_', ' ').toUpperCase() }}:
        </label>

        <template v-if="key === 'image'">
          <div class="flex flex-col">
            <input
              type="file"
              :id="key"
              @change="handleFileUpload(key, $event)"
              class="file:border file:border-gray-300 file:rounded-md file:px-4 file:py-2 file:bg-gray-50 file:text-gray-700"
            />
            <span v-if="form.errors[`content.${key}`]" class="text-red-500 text-sm mt-1">
              {{ form.errors[`content.${key}`] }}
            </span>
            <div v-if="previews[key]" class="mt-4">
              <img :src="previews[key]" alt="Preview" class="w-32 h-32 object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </template>

        <template v-else>
          <input
            type="text"
            :id="key"
            v-model="form.content[key]"
            class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            :class="{ 'border-red-500': form.errors[`content.${key}`] }"
          />
          <span v-if="form.errors[`content.${key}`]" class="text-red-500 text-sm mt-1">
            {{ form.errors[`content.${key}`] }}
          </span>
        </template>
      </div>

      <button type="submit" class="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Save
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useForm } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

defineOptions({
  layout: AuthenticatedLayout,
});

const props = defineProps({
  section: Object,
});

const form = useForm({
  content: { ...props.section.content },
  _method: "PUT",
});

const previews = reactive({});

const handleFileUpload = (key, event) => {
  const file = event.target.files[0];
  if (file) {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    if (previews[key]) {
      URL.revokeObjectURL(previews[key]);
    }

    form.content[key] = file;
    previews[key] = URL.createObjectURL(file);
  }
};

const submitForm = () => {
  form.post(route("sections.update", props.section.id), {
    preserveScroll: true,
    onSuccess: () => {
      Object.keys(previews).forEach((key) => {
        if (previews[key]) {
          URL.revokeObjectURL(previews[key]);
          previews[key] = null;
        }
      });
      alert("Section updated successfully!");
    },
  });
};
</script>

<style>
/* You can leave the styles as they are since Tailwind CSS is being used for the design */
</style>
