<template>
    <!-- Chatbot Button -->
    <button @click="toggleChat = !toggleChat"
      class="fixed bottom-4 z-50 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-12 h-12 bg-gray-600 hover:bg-gray-700 cursor-pointer border-gray-200 bg-none p-0 transition duration-200"
      type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="text-white block border-gray-200 align-middle">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" class="border-gray-200"></path>
      </svg>
    </button>
  
    <!-- Chat Container -->
    <div v-if="toggleChat" class="fixed z-50 bottom-[calc(4rem+1rem)] right-0 mr-4 bg-white p-4 rounded-lg border border-[#e5e7eb] shadow-lg w-[360px] h-[500px] overflow-hidden">
      <!-- Heading -->
      <div class="flex flex-col space-y-1 pb-4">
        <h2 class="font-semibold text-sm tracking-tight text-gray-800">Chatbot</h2>
        <p class="text-xs text-[#6b7280] leading-3">Powered by Mendable and Vercel</p>
      </div>
  
      <!-- Chat Messages -->
      <div class="pr-3 h-[380px] overflow-y-auto">
        <!-- Chat Message AI -->
        <div class="flex gap-2 my-2 text-gray-600 text-sm">
          <span class="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6">
            <div class="rounded-full bg-gray-100 border p-1">
              <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
              </svg>
            </div>
          </span>
          <p class="leading-relaxed">
            <span class="block font-bold text-gray-700">AI</span> Hi, how can I help you today?
          </p>
        </div>
  
        <!-- User Chat Message -->
        <div class="flex gap-2 my-2 text-gray-600 text-sm">
          <span class="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6">
            <div class="rounded-full bg-gray-100 border p-1">
              <svg stroke="none" fill="black" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
              </svg>
            </div>
          </span>
          <p class="leading-relaxed">
            <span class="block font-bold text-gray-700">You</span> How does it work?
          </p>
        </div>
  
        <!-- AI Response -->
        <div class="flex gap-2 my-2 text-gray-600 text-sm">
          <span class="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6">
            <div class="rounded-full bg-gray-100 border p-1">
              <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
              </svg>
            </div>
          </span>
          <p class="leading-relaxed">
            <span class="block font-bold text-gray-700">AI</span> It uses machine learning to understand and respond to your questions.
          </p>
        </div>
      </div>
  
      <!-- Input Box -->
      <div class="flex items-center pt-4">
        <form class="flex items-center justify-center w-full space-x-2">
          <input
            class="flex h-8 w-full rounded-md border border-[#e5e7eb] px-3 py-1.5 text-xs placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] focus-visible:ring-offset-2 transition duration-200 text-[#030712]"
            placeholder="Type your message" value="">
          <button
            class="inline-flex items-center justify-center rounded-md text-xs font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-700 h-8 px-4 py-1 transition duration-200">
            Send
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';

  const toggleChat =ref(false)

  </script>
  
  <style scoped>
  /* Add any custom styles for further refinement if needed */
  </style>
  