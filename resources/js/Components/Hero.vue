<template>
  <section
    id="home-section"
    class="relative h-screen bg-cover bg-center"
    :style="{
      backgroundImage: `url('/storage/${hero.content.image}')`,
      backgroundColor: settings.bg_color,
    }"
  >
    <!-- Overlay -->
    <div
      class="absolute inset-0"
      :style="{
        backgroundColor: settings.bg_color,
        opacity: 0.5,
      }"
    ></div>

    <!-- Content -->
      <div
        class="container mx-auto h-full flex flex-col items-center justify-center px-4 text-center relative z-10"
      >
        <h1
          class="text-4xl md:text-5xl text-white lg:text-6xl font-extrabold leading-tight"
          
        >
          {{ hero.content.header }}
        </h1>
        <p
          class="mt-4 text-lg md:text-xl text-white lg:text-2xl max-w-2xl mx-auto leading-relaxed"
        >
          {{ hero.content.description }}
        </p>
        <div class="mt-8">
          <a
            href="#pricing"
            class="inline-block px-6 py-3 text-white rounded-full font-semibold text-lg hover:opacity-90 transition duration-300 shadow-md"
            :style="{
              backgroundColor: settings.main_color,
            
            }"
          >
            Pricing
          </a>
        </div>
      </div>
  </section>
</template>

<script setup>
const props = defineProps({
  settings: Object, // Contains dynamic colors (main_color, secondary_color, bg_color, main_font_color, secondary_font_color)
  hero: Object,     // Contains hero content (image, header, description)
});
</script>

<style>
</style>
