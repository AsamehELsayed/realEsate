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
                <div 
                    v-for="(value, key) in form.content" 
                    :key="key" 
                    class="mt-4"
                >
                    <label 
                        :for="key" 
                        class="block text-sm font-medium text-gray-700 capitalize"
                    >
                        {{ formatLabel(key) }}
                    </label>

                    <!-- Image Field -->
                    <template v-if="key === 'image'">
                        <div class="space-y-4">
                            <!-- File Input -->
                            <input 
                                id="image" 
                                type="file" 
                                accept="image/*"
                                @change="handleImageUpload"
                                class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                            />

                            <!-- Progress Bar -->
                            <div v-if="form.progress" class="relative w-full h-2 bg-gray-200 rounded-md">
                                <div 
                                    class="absolute top-0 left-0 h-2 bg-blue-500 rounded-md" 
                                    :style="{ width: `${form.progress.percentage}%` }">
                                </div>
                            </div>
                            <p v-if="form.progress" class="text-sm text-gray-500">
                                {{ form.progress.percentage }}%
                            </p>

                            <!-- Error Message -->
                            <p v-if="form.errors.image" class="text-sm text-red-500">
                                {{ form.errors.image }}
                            </p>

                            <!-- Image Preview -->
                            <div v-if="form.content.image || form.image" class="mt-4 w-full flex justify-center">
                                <img 
                                    :src="previewImage" 
                                    alt="Preview Image" 
                                    class="w-96 h-96 rounded-md shadow-md object-cover border border-gray-300" 
                                />
                            </div>
                        </div>
                    </template>

                    <!-- Nested Objects -->
                    <template v-else-if="isObject(value)">
                        <div 
                            v-for="(nestedValue, nestedKey) in value" 
                            :key="nestedKey" 
                            class="mt-2"
                        >
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
                            <span v-if="form.errors[`content.${key}.${nestedKey}`]" class="text-red-500 text-sm mt-1">
                                {{ form.errors[`content.${key}.${nestedKey}`] }}
                            </span>
                        </div>
                    </template>

                    <!-- Simple Fields -->
                    <template v-else>
                        <input 
                            :id="key" 
                            v-model="form.content[key]" 
                            type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                        />
                        <span v-if="form.errors[`content.${key}`]" class="text-red-500 text-sm mt-1">
                            {{ form.errors[`content.${key}`] }}
                        </span>
                    </template>
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

<script setup>
import { computed, ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineOptions({
    layout: AuthenticatedLayout,
});

// Props
const props = defineProps(['section']);

// Form Initialization
const form = useForm({
    name: props.section.name,
    content: { ...props.section.content },
    image: null, // For image upload
    _method: 'PUT',
});

// Utility to check if value is an object
const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);

// Format label text
const formatLabel = (key) => key.replace(/_/g, ' ');

// Handle Image Upload
const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.image = file;
    }
};

// Image Preview
const previewImage = computed(() => 
    form.image 
        ? URL.createObjectURL(form.image) 
        : form.content.image 
            ? `/storage/${form.content.image}` 
            : ''
);

// Submit Handler
const submit = () => {
    form.post(route('sections.update', props.section.id), {
        forceFormData: true,
        onSuccess: () => {
            if (form.image) {
                form.content.image = form.image.name;
               
            }
        },
    });
};
</script>

<style scoped>
/* Form Spacing and Responsiveness */
@media (max-width: 640px) {
    h1 {
        font-size: 1.25rem;
    }

    button {
        width: 100%;
    }
}
</style>
