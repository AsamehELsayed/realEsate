<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-semibold text-gray-700 mb-6">Edit Post</h2>
        
        <form @submit.prevent="updatePost" enctype="multipart/form-data">
            <div class="mb-4">
                <label for="title" class="block text-sm font-medium text-gray-600">Title</label>
                <input
                    v-model="form.title"
                    id="title"
                    type="text"
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />
            </div>

            <div class="mb-4">
                <label for="description" class="block text-sm font-medium text-gray-600">Description</label>
                <textarea
                    v-model="form.description"
                    id="description"
                    rows="4"
                    class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                ></textarea>
            </div>

            <!-- File input for image upload -->
            <div class="mb-4">
                <label for="image" class="block text-sm font-medium text-gray-600">Image</label>
                <input type="file" @input="form.image = $event.target.files[0]" />
    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
      {{ form.progress.percentage }}%
    </progress>
            </div>

            <div class="flex justify-end">
                <button
                    type="submit"
                    class="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none"
                >
                    Update Post
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link } from '@inertiajs/vue3';

defineOptions({
    layout: AuthenticatedLayout
});

const props = defineProps({
    post: Object,
});

// Create a reactive form object
const form = useForm({
    title: props.post.title,
    description: props.post.description,
    image: null, // We will handle the image file separately
    _method: 'PUT',
});

// Create a reference for the image input
const imageInput = ref(null);

// Handle form submission
const updatePost = () => {
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('type', form.type);

    // Check if the image input has a selected file
    if (imageInput.value && imageInput.value.files && imageInput.value.files[0]) {
        formData.append('image', imageInput.value.files[0]);
    } else {
        console.error('No image selected');
    }

    // Send the form data to the backend
    form.post(route('posts.update', props.post.id), {
        data: formData,
        onSuccess: () => {
            // Handle success (e.g., redirect or show a message)
        },
    });
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
