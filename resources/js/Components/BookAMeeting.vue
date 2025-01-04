<template>

  <section
    id="home-section"
    ref="section"
    class="relative h-screen bg-cover bg-center  "
    :style="sharedBackgroundStyle"
  >
    <!-- Overlay -->

      <div
        class="container animate__animated animate__fadeInDown mx-auto h-full flex flex-col  items-center justify-center px-4 text-center relative "
      >
        <h1
          class="text-4xl md:text-5xl  lg:text-7xl max-w-4xl font-extrabold leading-tight"
          :style="{ color: settings.main_color }"
        >
          {{ book_a_meeting.content.header }}
        </h1>
        <p
          class="mt-4 text-lg md:text-xl text-white lg:text-2xl max-w-2xl mx-auto leading-relaxed "
          :style="{ color: settings.main_color }"
        >
          {{ book_a_meeting.content.description }}
        </p>
        <div class="mt-8">
          <Link
            
            :href="route('calendly')"
            class="inline-block px-6  hover:bg-white py-3 text-white rounded-full font-semibold text-lg transition-transform duration-300 shadow-md hover:scale-110 cursor-pointer"
            :style="hover ? { backgroundColor: 'white' , color: settings.secondary_color } : { backgroundColor: settings.secondary_color }"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            Book a Meeting
          </Link> 
          
        </div>
      </div>
  </section>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  settings: Object, // Contains dynamic colors (main_color, secondary_color, bg_color, main_font_color, secondary_font_color)
  book_a_meeting: Object,     // Contains book_a_meeting content (image, header, description)
});
const sharedBackgroundStyle = {
  backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
  backgroundColor: props.settings.bg_color,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  
};
const hover = ref(false);
const section = ref(null);

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeIn');
      entry.target.classList.remove('hidden-section');
    }
  });
};

let observer;

onMounted(() => {
  observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
  if (section.value) observer.observe(section.value);
});

onUnmounted(() => {
  if (observer && section.value) observer.unobserve(section.value);
});
</script>

<style>
</style>
