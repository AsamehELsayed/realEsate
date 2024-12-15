<template>

  <section
    id="home-section"
    class="relative h-screen bg-cover bg-center"
    :style="sharedBackgroundStyle"
  >
    <!-- Overlay -->

      <div
        class="container mx-auto h-full flex flex-col items-center justify-center px-4 text-center relative "
      >
        <h1
          class="text-4xl md:text-5xl  lg:text-7xl font-extrabold leading-tight"
          :style="{ color: settings.main_color }"
        >
          {{ hero.content.header }}
        </h1>
        <p
          class="mt-4 text-lg md:text-xl text-white lg:text-2xl max-w-2xl mx-auto leading-relaxed"
          :style="{ color: settings.main_color }"
        >
          {{ hero.content.description }}
        </p>
        <div class="mt-8">
          <Link
            :href="route('plans')"
            class="inline-block px-6 py-3 text-white rounded-full font-semibold text-lg hover:opacity-90 transition duration-300 shadow-md"
            :style="{
              backgroundColor: settings.secondary_color,
              color: settings.main_color,
            }"
          >
            Pricing
          </Link>
        </div>
      </div>
  </section>
</template>

<script setup>
const props = defineProps({
  settings: Object, // Contains dynamic colors (main_color, secondary_color, bg_color, main_font_color, secondary_font_color)
  hero: Object,     // Contains hero content (image, header, description)
});
const sharedBackgroundStyle = {
  backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
  backgroundColor: props.settings.bg_color,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  
};

</script>

<style>
</style>
