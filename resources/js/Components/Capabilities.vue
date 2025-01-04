<template>
  <section
    id="capabilities-section"
    class="py-20 sm:h-full lg:min-h-full relative overflow-hidden bg-gray-50"
  >
    <div class="absolute inset-0 opacity-10 pointer-events-none"></div>

    <div class="container mx-auto max-w-6xl px-8 text-center space-y-20 relative z-20">
      <h2
        class="text-5xl font-extrabold tracking-tight sm:text-6xl"
        :style="{ color: settings.main_font_color }"
      >
       Capabilities
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        <!-- Capability Cards -->
        <div
          v-for="(capability, index) in 
            capabilities
          "
          :key="index"
          class="relative group rounded-2xl p-12 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
          :style="{ border: `3px solid ${settings.main_color}` }"
        >
          <div
            class="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-tr flex items-center justify-center text-white shadow-lg overflow-hidden"
            :style="{ background: settings.main_color }"
          >
            <!-- Dynamic Icon -->
            <img
              :src="capability?.image"
              :alt="`Icon for ${capability?.title}`"
              class="w-full h-full object-cover"
            />
          </div>

          <h3
            class="text-2xl font-bold mt-16"
            :style="{ color: settings.main_font_color }"
          >
            {{ capability.title }}
          </h3>
          <p
            class="mt-6 text-lg text-gray-600 leading-relaxed"
            :style="{ color: settings.secondary_font_color }"
          >
            {{ capability.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  capabilities: Object, // Contains dynamic content for each capability (header, title, description, icon)
  settings: Object, // Contains dynamic colors (bg_color, main_color, secondary_color, main_font_color, secondary_font_color)
});
</script>

<style scoped>
/* Scoped styles for better isolation */
</style>
