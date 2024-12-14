<template>

  <!-- Header with dynamic background and text color based on scroll -->
  <header 
    :class="[headerClass, textClass]" 
    :style="{ backgroundColor: headerBackgroundColor, color: headerTextColor }" 
    class="transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
      <!-- Logo -->
      <h1 class="text-2xl lg:text-3xl font-bold transition duration-300">
        <img :src="`/storage/${settings.logo}`" alt="Logo" class="h-8 sm:h-10 lg:h-12 max-w-full" />
      </h1>

      <!-- Desktop Navigation Links -->
      <nav class="hidden xl:flex space-x-8 text-lg">
        <Link :href="route('home')" class="font-bold text-2xl" :class="linkClass" :style="{ color: linkTextColor }">Home</Link>
        <Link :href="route('plans')" class="font-bold text-2xl"  :class="linkClass" :style="{ color: linkTextColor }">Pricing</Link>
        <Link :href="route('calendly')" class="font-bold text-2xl" :class="linkClass" :style="{ color: linkTextColor }">Book a Meeting</Link>
        <Link :href="route('contact-us')" class="font-bold text-2xl" :class="linkClass" :style="{ color: linkTextColor }">Contact Us</Link>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" 
        class="xl:hidden text-gray-700 text-3xl hover:text-blue-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        aria-controls="mobile-menu" :aria-expanded="isMenuOpen.toString()">
        <span class="sr-only">Toggle navigation</span>
        ☰
      </button>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div id="mobile-menu" 
    :class="['xl:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-90 text-white transform transition-transform', isMenuOpen ? 'translate-y-0 lg:hidden' : '-translate-y-full']">
    <div class="flex flex-col items-center justify-center space-y-6 py-12">
      <Link :href="route('home')" class="font-bold text-lg hover:text-blue-500 transition-all" 
        :class="linkClass" :style="{ color: linkTextColor }">Home</Link>
    
      <Link :href="route('plans')" class="font-bold text-lg hover:text-blue-500 transition-all" 
        :class="linkClass" :style="{ color: linkTextColor }">Pricing</Link>

      <Link :href="route('calendly')" class="font-bold text-lg hover:text-blue-500 transition-all" 
        :class="linkClass" :style="{ color: linkTextColor }">Book a Meeting</Link>
      <Link :href="route('contact-us')" class="font-bold text-lg hover:text-blue-500 transition-all" 
        :class="linkClass" :style="{ color: linkTextColor }">Contact Us</Link>

    </div>
  </div>
<!-- Mobile Menu (Vue Reactive State) -->



  <!-- Main Content -->

  <main>
    <slot></slot>
  </main>

  <!-- Footer Section -->
  <footer class="py-16 relative z-0" :style="sharedBackgroundStyle" >
<div class="bg-gray-800 opacity-50 blur-lg inset-0 absolute top-0 left-0 -z-10"></div>
  <div class="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 z-20">
    <!-- More Info Section -->
    <div class="space-y-8">
  <div>
    <h3 class="text-lg font-semibold mb-2 text-white"  >Email</h3>
    <div class="flex items-center space-x-4">
      <div class="bg-gray-800 shadow-lg h-12 w-12 flex items-center justify-center rounded-full transition-all transform hover:scale-105">
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
        </svg>
      </div>
      <a :href="`mailto:${settings.email}`" class="hover:underline hover:text-blue-500 text-white"  >
        {{ settings.email }}
      </a>
    </div>
  </div>

  <div>
    <h2 class="text-2xl font-bold mb-6 text-white"  >Follow Us</h2>
    <div class="flex space-x-4">
      <a :href="settings.linkedin" v-if="settings.linkedin" target="_blank" class="bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-500 transition-transform transform hover:scale-110">
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
          <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
        </svg>
      </a>
      <a :href="settings.facebook" v-if="settings.facebook" target="_blank" class="bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-500 transition-transform transform hover:scale-110">
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Developed By Section -->
  <div>
    <h3 class="text-lg font-semibold mb-2 text-white"   >Developed By</h3>
    <p class="text-white"  >
      Designed and developed by <a href="https://www.linkedin.com/in/abdelrahman-sameh-8931a41b2/" target="_blank" class="hover:underline text-blue-500">Abdelrahman Sameh</a>.
    </p>
  </div>
</div>

    <!-- Footer Text Description Section -->
    <div class="lg:col-span-1 flex flex-col items-start justify-center text-white">
      <h2 class="text-2xl font-bold mb-6">{{ settings.footer_text }}</h2>
      <p   class="text-lg">{{
        settings.footer_description }}
      </p>
    </div>

    <!-- Contact Form Section -->
    <div class="lg:col-span-1 space-y-6 text-white">
      <h2 class="text-2xl font-bold mb-6" >Contact Us</h2>
      <form @submit.prevent="sendMessage" class="space-y-4">
        <input type="text" v-model="form.name" class="w-full h-12 px-4 text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Name"   />
        <InputError :message="form.errors.name" class="mt-2" />
        <input type="email" v-model="form.email" class="w-full h-12 px-4 text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Email"   />
        <InputError :message="form.errors.email" class="mt-2" />
        <input type="text" v-model="form.subject" class="w-full h-12 px-4 text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Subject"   />
        <InputError :message="form.errors.subject" class="mt-2" />
        <textarea v-model="form.message" class="w-full h-32 px-4 rounded-lg text-gray-900 border focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Message" ></textarea>
        <InputError :message="form.errors.message" class="mt-2" />
        <button type="submit" class="w-full h-12 rounded-lg font-bold transition bg-blue-500 hover:bg-blue-600 focus:outline-none"  >Send Message</button>
      </form>
    </div>
  </div>
</footer>


</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps(['settings']);

const scrolled = ref(false); // Track scroll state
const sharedBackgroundStyle = {
  backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
  backgroundColor: props.settings.bg_color,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
};

const headerBackgroundColor = computed(() => scrolled.value ? props.settings.main_color : "transparent");
const headerTextColor = computed(() => props.settings.secondary_color);
const linkTextColor = computed(() => props.settings.secondary_color);
const headerClass = computed(() => 'transition-all duration-300 ease-in-out');
const textClass = computed(() => 'font-semibold');
import { Link, useForm } from "@inertiajs/vue3";
import InputError from '@/Components/InputError.vue';
import Swal from 'sweetalert2';
import { initFlowbite } from 'flowbite';

const form = useForm({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const  isMenuOpen = ref(false)
const sendMessage = () => {
  form.post(route("contacts.store"), {
    preserveScroll: true,

    onSuccess: () => {
      form.reset();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Message sent successfully!",
      })
    },
  });
};
// Scroll handler

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  initFlowbite();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
/* Optional additional styles for mobile menu */
#mobile-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
