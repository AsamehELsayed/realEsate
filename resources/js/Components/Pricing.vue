<template>
  <section
    class="py-16 bg-gradient-to-r from-blue-500 to-indigo-600"
    ref="section"
    :style="sharedBackgroundStyle"
  >
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-20">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 text-white">
        <h2
          class="mb-4 text-4xl font-extrabold tracking-tight text-white"
          :style="{ color: settings.main_color }"
        >
          {{ plans.content.header }}
        </h2>
        <h5 class="mb-4 text-xl font-semibold tracking-tight text-gray-200">
          {{ plans.content.description }}
        </h5>
      </div>

      <div
        class="lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 space-y-8"
        :class="{ 'animate__animated animate__fadeInDown': animate }"
      >
        <!-- Pricing Card -->
        <div
  v-for="(price, index) in prices"
  :key="price.id"
  class="flex flex-col p-6 mx-auto text-center rounded-xl border shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
  :style="{
    backgroundColor: settings.main_color,
    borderColor: settings.secondary_color,
    borderWidth: '2px',
    width: '100%',
    minWidth: '300px',
    minHeight: '450px',
  }"
>
  <h3
    class="mb-4 text-2xl font-semibold text-white"
    :style="{ color: settings.main_font_color }"
  >
    {{ price.name }}
  </h3>
  <p
    class="font-light text-lg text-gray-300 mb-6"
    :style="{ color: settings.secondary_font_color }"
  >
    {{ price.description }}
  </p>

  <div class="flex justify-center items-baseline my-6">
    <span
      class="mr-2 text-5xl font-extrabold text-white"
      :style="{ color: settings.main_font_color }"
    >
      {{ formatPrice(price.price) }}$
    </span>
    <span
      class="text-gray-300"
      :style="{ color: settings.secondary_font_color }"
      >/ hour</span
    >
  </div>

  <ul
    role="list"
    class="mb-8 list-disc space-y-4 text-left text-gray-300 flex-grow"
  >
    <li
      class="flex items-center space-x-3"
      v-for="feature in price.features"
      :key="feature"
    >
    <svg class="w-6 h-6 "  :style="{ color: settings.secondary_color }"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
</svg>

      <span class=" font-medium" :style="{ color: settings.secondary_color }">{{ feature }}</span>
    </li>
  </ul>

  <a
    :href="price.link"
    class="text-white font-medium rounded-lg text-sm px-6 py-3 text-center transition-all duration-300 ease-in-out transform cursor-pointer hover:scale-110 mt-auto"
    :style="{
      backgroundColor: hoverStates[index] ? 'white' : settings.secondary_color,
      color: hoverStates[index] ? settings.secondary_color : 'white',
      border: hoverStates[index] ? `2px solid ${settings.secondary_color}` : 'none',
    }"
    @mouseover="hoverStates[index] = true"
    @mouseleave="hoverStates[index] = false"
  >
    Subscribe Now
  </a>
</div>

        <!-- End of Pricing Card -->
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  prices: Array,
  settings: Object,
  plans: Object,
  hero: Object,
  position: Number,
});

const sharedBackgroundStyle = {
  backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
  backgroundColor: props.settings.bg_color,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

const hoverStates = ref(props.prices.map(() => false)); // Create a hover state for each button

const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
  return formatter.format(price);
};

const section = ref(null);
const positionY = ref(0);

onMounted(() => {
  positionY.value =
    section.value.getBoundingClientRect().top + window.pageYOffset - 600;
});

const animate = computed(() => {
  return props.position > positionY.value;
});
</script>
