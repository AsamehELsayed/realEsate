<template>
  <div>
    <h1>Edit Section</h1>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div v-for="(value, key) in form.content" :key="key" class="field">
        <label :for="key">{{ key.replace('_', ' ').toUpperCase() }}:</label>

        <template v-if="key === 'image'">
          <input
            type="file"
            :id="key"
            @change="handleFileUpload(key, $event)"
            class="input"
          />
          <span v-if="form.errors[`content.${key}`]" class="error">
            {{ form.errors[`content.${key}`] }}
          </span>
          <div v-if="previews[key]">
            <img :src="previews[key]" alt="Preview" class="preview" />
          </div>
        </template>

        <template v-else>
          <input
            type="text"
            :id="key"
            v-model="form.content[key]"
            class="input"
            :class="{ 'is-invalid': form.errors[`content.${key}`] }"
          />
          <span v-if="form.errors[`content.${key}`]" class="error">
            {{ form.errors[`content.${key}`] }}
          </span>
        </template>
      </div>

      <button type="submit" class="btn">Save</button>
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

// Props from Laravel
const props = defineProps({
  section: Object,
});

// Form handling with useForm
const form = useForm({
  content: { ...props.section.content },
  _method: "PUT",
});

const previews = reactive({});

// Handle file uploads
const handleFileUpload = (key, event) => {
  const file = event.target.files[0];
  if (file) {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    // Revoke previous URL if it exists
    if (previews[key]) {
      URL.revokeObjectURL(previews[key]);
    }

    form.content[key] = file;
    previews[key] = URL.createObjectURL(file);
  }
};

// Submit form
const submitForm = () => {
  form.post(route("sections.update", props.section.id), {
    preserveScroll: true,
    onSuccess: () => {
      // Clean up previews
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
.input {
  display: block;
  margin-bottom: 10px;
}

.field {
  margin-bottom: 15px;
}

.error {
  color: red;
  font-size: 0.9em;
}

.preview {
  margin-top: 10px;
  max-width: 200px;
  max-height: 200px;
}
</style>
