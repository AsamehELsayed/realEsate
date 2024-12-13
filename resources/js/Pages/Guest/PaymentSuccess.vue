<template>
      <div class="flex justify-center items-center min-h-screen bg-blue-50 py-10">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
          <div class="mb-6">
            <!-- Success Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-24 h-24 text-green-500 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 class="text-3xl font-semibold text-green-600 mb-4">Payment Successful!</h1>
          <p class="text-lg text-gray-700 mb-6">Thank you for your purchase. Your payment has been successfully processed.</p>
          
          <!-- CTA Buttons -->
        
        </div>
      </div>
  </template>
  
  <script setup>
  import { router } from '@inertiajs/vue3';
  import GuestLayout from '@/Layouts/GuestLayout.vue';
  
  defineOptions({
    layout: GuestLayout
  });
  
 
  
  const goHome = () => {
    router.visit('/');
  };
  
  const viewOrder = () => {
    router.visit('/order-details');
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed, but Tailwind handles most of the design */
  </style>
  