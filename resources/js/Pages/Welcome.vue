<template>
    <Head title="Home" />

      <Hero :settings="settings" :hero="hero"></Hero>
 
    <div ref="capabilitiesRef" class="hidden-section">
      <Capabilities :settings="settings" :position="myScrollPosition" :capabilities="capabilities"></Capabilities>
    </div>
    <div ref="featuresRef" class="hidden-section">
      <Features :settings="settings" :features="features"></Features>
    </div>

      <Pricing :position="myScrollPosition" :settings="settings" :prices="prices" :plans="plans"></Pricing>

      <Program :position="myScrollPosition" :settings="settings" :Affiliate_Program="Affiliate_Program"></Program>
 
      <Chat :settings="settings"></Chat>
  </template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Head } from '@inertiajs/vue3';
import Hero from '@/Components/Hero.vue';
import Capabilities from '@/Components/Capabilities.vue';
import Features from '@/Components/Features.vue';
import Pricing from '@/Components/Pricing.vue';
import Program from '@/Components/Program.vue';
import Chat from '@/Components/Chat.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import 'animate.css';


const myScrollPosition = ref(window.pageYOffset);

const updateScrollPosition = () => {
  myScrollPosition.value = window.pageYOffset;
};

// Define layout
defineOptions({
  layout: GuestLayout,
});

// Props passed to the component
const props = defineProps({
  hero: Object,
  Affiliate_Program: Object,
  capabilities: Object,
  prices: Object,
  plans: Object,
  features: Object,
  settings: Object,
});

// Section references
const capabilitiesRef = ref(null);
const featuresRef = ref(null);
const pricingRef = ref(null);
const programRef = ref(null);
const chatRef = ref(null);

const sections = [ capabilitiesRef, featuresRef, pricingRef, programRef, chatRef];

let observer;

onMounted(() => {
  window.addEventListener('scroll', updateScrollPosition);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInRight');
          entry.target.classList.remove('hidden-section');
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    { threshold: 0.2 } // Trigger when 50% of the section is visible
  );

  sections.forEach((section) => {
    if (section.value) {
      observer.observe(section.value);
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollPosition);

  if (observer) {
    observer.disconnect();
  }
});
</script>

<style>
.hidden-section {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}

.animate__animated {
  opacity: 1;
  visibility: visible;
}
</style>
  