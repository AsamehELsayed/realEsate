<template>

<section
  id="features-section"
  class="py-16  sm:h-full lg:min-h-full relative overflow-hidden"
>
  <div class="absolute inset-0 opacity-10 pointer-events-none">
 
  </div>

  <div class="container mx-auto max-w-7xl px-6 text-center space-y-16 relative z-20">
    <h2
      class="text-4xl font-extrabold tracking-tight sm:text-5xl"
      :style="{ color: settings.main_font_color }"
    >
      {{ features.content.header }}
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
      <!-- Feature Cards -->
      <div
        v-for="(feature, index) in [
          features.content.feature_one,
          features.content.feature_two,
          features.content.feature_three,
          features.content.feature_four
        ]"
        :key="index"
        class="relative group rounded-xl p-8 bg-white shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
        :style="{ border: `2px solid ${settings.main_color}` }"
      >
        <div
          class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr  flex items-center justify-center text-white text-3xl shadow-md"
          :style="{ background: settings.main_color }"
        >
          <!-- SVG Icon Placeholder -->
          <svg :style="{ fill: settings.secondary_color }" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
</svg>
        </div>

        <h3
          class="text-lg font-semibold mt-8"
          :style="{ color: settings.main_font_color }"
        >
          {{ feature?.title }}
        </h3>
        <p
          class="mt-4 text-gray-600 leading-relaxed"
          :style="{ color: settings.secondary_font_color }"
        >
          {{ feature?.description }}
        </p>

   
      </div>
    </div>
    <div class="flex justify-center my-8">
      <Link :href="route('calendly')" as="button"  target="_blank" class="px-6  transform cursor-pointer  hover:scale-110 py-3 rounded-lg bg-green-500 text-white text-lg font-semibold hover:bg-green-600 transition duration-300 ease-in-out"
      :style="{
              backgroundColor: settings.secondary_color,
              color: settings.main_color,
            }">
        <span class="flex items-center">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
</svg>

          <span>Get in touch</span>
        </span>
      </Link>
    </div>
  </div>
</section>

  </template>
  
  <script setup>
import { Link } from '@inertiajs/vue3';

  defineProps({
    features: Object, // Contains dynamic content for each capability (header, title, description)
    settings: Object,     // Contains dynamic colors (bg_color, main_color, secondary_color, main_font_color, secondary_font_color)
  });

  </script>
  
  <style scoped>
  /* Scoped styles for better isolation */
  </style>
  