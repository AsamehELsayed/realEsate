<template>
    <section
    class="py-16 bg-white"
    :style="sharedBackgroundStyle"
  >
    <div class="container mx-auto max-w-6xl text-center space-y-14 py-5 z-20"></div>
  <div id="calendly" v-once class="calendly-inline-widget z-10" :data-url="calendlyUrl" style="min-width:320px;height:700px;"></div>
  </section>
</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
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
const calendlyUrl = ref("https://calendly.com/gamersharkasyy/book-a-meeting");

// Initialize the Calendly widget after the component is mounted
onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>
  