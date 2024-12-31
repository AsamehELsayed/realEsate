<template>
  <Head title="Book a Meeting" />

  <section
    class="py-16 bg-white"
    :style="sharedBackgroundStyle"
  >
    <div class="container mx-auto max-w-6xl text-center space-y-14 py-5 z-20">
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="flex justify-center items-center">





        
        <div class="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
      </div>
    </div>

    <!-- Calendly Widget -->
    <div
      id="calendly"
      v-once
      class="calendly-inline-widget z-10"
      :data-url="calendlyUrl"
      style="min-width:320px;height:700px;"
    ></div>
  </section>
</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

defineOptions({
  layout: GuestLayout,
});

const props = defineProps({
  settings: Object, // Contains dynamic colors (main_color, secondary_color, bg_color, main_font_color, secondary_font_color)
});

const sharedBackgroundStyle = {
  backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
  backgroundColor: props.settings.bg_color,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

// Define a reactive property for the Calendly URL
const calendlyUrl = ref("https://calendly.com/elkrewy1");

// Reactive property to track loading state
const isLoading = ref(true);

// Initialize the Calendly widget after the component is mounted
onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  script.onload = () => {
    // Hide loading spinner once Calendly script is loaded
    isLoading.value = false;
  };
  document.body.appendChild(script);
});
</script>
