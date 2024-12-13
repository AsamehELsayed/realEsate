<template>
    <div class="font-std mb-10 w-full rounded-2xl bg-white p-10 font-normal leading-relaxed text-gray-900 shadow-xl">
        <div class="flex flex-col">
            <div class="flex flex-col md:flex-row justify-between mb-5 items-start">
                <h2 class="mb-5 text-4xl font-bold text-blue-900">Create Profile</h2>
                <div class="text-center">
                    <div>
                        <img :src="profilePictureUrl" alt="Profile Picture" class="rounded-full w-32 h-32 mx-auto border-4 border-indigo-800 mb-4 transition-transform duration-300 hover:scale-105 ring ring-gray-300">
                        <input type="file" @change="handleProfilePictureChange" id="upload_profile" hidden>
                        <label for="upload_profile" class="inline-flex items-center">
                            <svg data-slot="icon" class="w-5 h-5 text-blue-700" fill="none" stroke-width="1.5"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 12.75a4.5 4.5 0=1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                </path>
                            </svg>
                        </label>
                    </div>
                    <button @click="triggerFileInput" class="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300">
                        Change Profile Picture
                    </button>
                </div>
            </div>

            <!-- Profile Create Form -->
            <form @submit.prevent="submitForm" class="space-y-4">
                <!-- Name -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input v-model="form.name" type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <p v-if="form.errors.name" class="text-red-500 text-xs mt-1">{{ form.errors.name }}</p>
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="form.email" type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <p v-if="form.errors.email" class="text-red-500 text-xs mt-1">{{ form.errors.email }}</p>
                </div>

                <!-- Phone -->
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input v-model="form.phone" type="tel" id="phone" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <p v-if="form.errors.phone" class="text-red-500 text-xs mt-1">{{ form.errors.phone }}</p>
                </div>

                <!-- Password -->
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="form.password" type="password" id="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <p v-if="form.errors.password" class="text-red-500 text-xs mt-1">{{ form.errors.password }}</p>
                </div>

                <!-- Confirm Password -->
                <div>
                    <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input v-model="form.password_confirmation" type="password" id="password_confirmation" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <p v-if="form.errors.password_confirmation" class="text-red-500 text-xs mt-1">{{ form.errors.password_confirmation }}</p>
                </div>

                <!-- Save Button -->
                <div class="flex justify-end space-x-4">
                    <button type="submit" class="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700">Create Profile</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineOptions({
    layout: AuthenticatedLayout
})

const form = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    image: null
});

// Handle file input change for profile picture
const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.image = file;
        profilePictureUrl.value = URL.createObjectURL(file); // Update profile picture URL
    }
};

// Submit the form
const submitForm = () => {
    form.post(route('users.store'), {
        onSuccess: () => {
            alert('Profile created successfully!');
        },
        onError: () => {
            alert('There was an error creating your profile.');
        }
    });
};

// Trigger the file input
const triggerFileInput = () => {
    document.getElementById('upload_profile').click();
};

// Dynamic profile picture URL
const profilePictureUrl = ref('https://i.pravatar.cc/300');
</script>
