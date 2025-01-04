<template>
  <section
    id="features-section"
    class="py-20 sm:h-full lg:min-h-full relative overflow-hidden bg-gray-50"
  >
    <div class="absolute inset-0 opacity-10 pointer-events-none"></div>

    <div class="container mx-auto max-w-6xl px-8 text-center space-y-20 relative z-20">
      <h2
        class="text-5xl font-extrabold tracking-tight sm:text-6xl"
        :style="{ color: settings.main_font_color }"
      >
      Features
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
        <!-- Feature Cards -->
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="relative group rounded-2xl p-12 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
          :style="{ border: `3px solid ${settings.main_color}` }"
        >
          <div
            class="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-tr flex items-center justify-center text-white shadow-lg overflow-hidden"
            :style="{ background: settings.main_color }"
          >
            <!-- Dynamic Image -->
            <img
            :src="feature?.image" 
            alt="Feature Icon"
              class="w-full h-full object-cover"
            />
          </div>

          <h3
            class="text-2xl font-bold mt-16"
            :style="{ color: settings.main_font_color }"
          >
            {{ feature?.title }}
          </h3>
          <p
            class="mt-6 text-lg text-gray-600 leading-relaxed"
            :style="{ color: settings.secondary_font_color }"
          >
            {{ feature?.description }}
          </p>
        </div>
      </div>

      <div class="flex justify-center my-12">
        <Link
          :href="route('calendly')"
          as="button"
          target="_blank"
          class="px-8 py-4 transform cursor-pointer hover:scale-110 rounded-lg bg-green-600 text-white text-xl font-semibold hover:bg-green-700 transition duration-300 ease-in-out"
          :style="hover ? { backgroundColor: 'white' , color: settings.secondary_color ,border: `2px solid ${settings.secondary_color}` } : { backgroundColor: settings.secondary_color }"
    @mouseover="hover = true"
            @mouseleave="hover = false"
        >
          <span class="flex items-center">
            <svg class="w-6 h-6 text-gray-800  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" :fill="hover ? settings.secondary_color : 'white'" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
</svg>


            <span>Get in Touch</span>
          </span>
        </Link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';
const hover = ref(false);
defineProps({
  features: Object, // Contains dynamic content for each capability (header, title, description, icon)
  settings: Object, // Contains dynamic colors (bg_color, main_color, secondary_color, main_font_color, secondary_font_color)
});
</script>

<style scoped>
/* Scoped styles for better isolation */
</style>
