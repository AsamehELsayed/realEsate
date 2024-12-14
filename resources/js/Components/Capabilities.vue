<template>

    <section
      id="capabilities-section"
      class="py-16 bg-white sm:h-full lg:h-96  "
    
    >
      <div class="container mx-auto max-w-5xl text-center space-y-12 z-20">
        <h2
          class="text-3xl font-bold z-20"
          :style="{ color: settings.main_font_color }"
        >
          {{ capabilities.content.header }}
        </h2>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 z-20">
          <!-- Capability 1 -->
          <div
            class="space-y-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            :style="{
          
              borderWidth: '2px'
            }"
          >
            <div
              class="text-6xl mb-4 flex w-full justify-center"
              :style="{ color: settings.main_color }"
            >
              <!-- SVG Icon for Capability 1 -->
            </div>
            <h3
              class="text-xl font-semibold"
              :style="{ color: settings.main_font_color }"
            >
              {{ capabilities.content.capabilities_one.title }}
            </h3>
            <p
              class="text-gray-600"
              :style="{ color: settings.secondary_font_color }"
            >
              {{ capabilities.content.capabilities_one.description }}
            </p>
          </div>
  
          <!-- Capability 2 -->
          <div
            class="space-y-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            :style="{
         
              borderWidth: '2px'
            }"
          >
            <div
              class="text-6xl mb-4 flex w-full justify-center"
              :style="{ color: settings.main_color }"
            >
              <!-- SVG Icon for Capability 2 -->
            </div>
            <h3
              class="text-xl font-semibold"
              :style="{ color: settings.main_font_color }"
            >
              {{ capabilities.content.capabilities_two.title }}
            </h3>
            <p
              class="text-gray-600"
              :style="{ color: settings.secondary_font_color }"
            >
              {{ capabilities.content.capabilities_two.description }}
            </p>
          </div>
  
          <!-- Capability 3 -->
          <div
            class="space-y-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            :style="{
           
              borderWidth: '2px'
            }"
          >
            <div
              class="text-6xl mb-4 flex w-full justify-center"
              :style="{ color: settings.main_color }"
            >
              <!-- SVG Icon for Capability 3 -->
            </div>
            <h3
              class="text-xl font-semibold"
              :style="{ color: settings.main_font_color }"
            >
              {{ capabilities.content.capabilities_three.title }}
            </h3>
            <p
              class="text-gray-600"
              :style="{ color: settings.secondary_font_color }"
            >
              {{ capabilities.content.capabilities_three.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    capabilities: Object, // Contains dynamic content for each capability (header, title, description)
    settings: Object,     // Contains dynamic colors (bg_color, main_color, secondary_color, main_font_color, secondary_font_color)
  });

  </script>
  
  <style scoped>
  /* Scoped styles for better isolation */
  </style>
  