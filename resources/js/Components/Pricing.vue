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
      <svg
        class="w-5 h-5 text-green-500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        :style="{ color: settings.main_color }"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="text-gray-700 font-medium">{{ feature }}</span>
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
