<template>
  <!-- Header with dynamic background and text color based on scroll -->
  <header
    :class="[headerClass, textClass]"
    :style="{ backgroundColor: headerBackgroundColor, color: headerTextColor }"
    class="transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50"
  >
    <div
      class="container mx-auto flex justify-between lg:justify-evenly items-center py-4 px-6 lg:px-8"
    >
      <!-- Logo -->
      <h1 class="text-2xl lg:text-3xl font-bold transition duration-300">
        <img
          :src="`/storage/${settings.logo}`"
          alt="Logo"
          class="h-8 sm:h-10 lg:h-20 max-w-full"
        />
      </h1>

      <!-- Desktop Navigation Links -->
      <nav class="hidden xl:flex space-x-8 text-lg">
        <Link
          :href="route('home')"
          class="font-bold text-2xl transition-all duration-300 ease-in-out hover:text-3xl"
          :class="[route().current('home') ? 'underline' : linkClass]"
          :style="{ color: linkTextColor }"
        >
          Home
        </Link>
        <Link
          :href="route('plans')"
          class="font-bold text-2xl transition-all duration-300 ease-in-out hover:text-3xl"
          :class="[route().current('plans') ? 'underline' : linkClass]"
          :style="{ color: linkTextColor }"
        >
          Pricing
        </Link>
        <Link
          :href="route('calendly')"
          class="font-bold text-2xl transition-all duration-300 ease-in-out hover:text-3xl"
          :class="[route().current('calendly') ? 'underline' : linkClass]"
          :style="{ color: linkTextColor }"
        >
          Book a Meeting
        </Link>
        <Link
          :href="route('Affiliate_Program')"
          class="font-bold text-2xl transition-all duration-300 ease-in-out hover:text-3xl"
          :class="[route().current('Affiliate_Program') ? 'underline' : linkClass]"
          :style="{ color: linkTextColor }"
        >
        Affiliate Program
        </Link>
        <Link
          :href="route('contact-us')"
          class="font-bold text-2xl transition-all duration-300 ease-in-out hover:text-3xl"
          :class="[route().current('contact-us') ? 'underline' : linkClass]"
          :style="{ color: linkTextColor }"
        >
          Contact Us
        </Link>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="xl:hidden text-gray-700 text-3xl hover:text-blue-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-controls="mobile-menu"
        :aria-expanded="isMenuOpen.toString()"
      >
        <span class="sr-only">Toggle navigation</span>
        ☰
      </button>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div
    id="mobile-menu"
    :class="[
      'xl:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-90 text-white transform transition-transform',
      isMenuOpen ? 'translate-y-0 lg:hidden' : '-translate-y-full',
    ]"
  >
    <div class="flex flex-col items-center justify-center space-y-6 py-12">
      <Link
        :href="route('home')"
        class="font-bold text-lg hover:text-blue-500 transition-all"
        :class="linkClass"
        :style="{ color: linkTextColor }"
        >Home</Link
      >

      <Link
        :href="route('plans')"
        class="font-bold text-lg hover:text-blue-500 transition-all"
        :class="linkClass"
        :style="{ color: linkTextColor }"
        >Pricing</Link
      >

      <Link
        :href="route('calendly')"
        class="font-bold text-lg hover:text-blue-500 transition-all"
        :class="linkClass"
        :style="{ color: linkTextColor }"
        >Book a Meeting</Link
      >
      <Link
        :href="route('Affiliate_Program')"
        class="font-bold text-lg hover:text-blue-500 transition-all"
        :class="linkClass"
        :style="{ color: linkTextColor }"
        >Affiliate Program</Link
      >
      <Link
        :href="route('contact-us')"
        class="font-bold text-lg hover:text-blue-500 transition-all"
        :class="linkClass"
        :style="{ color: linkTextColor }"
        >Contact Us</Link
      >
    </div>
  </div>
  <!-- Mobile Menu (Vue Reactive State) -->

  <!-- Main Content -->

  <main>
    <slot></slot>
  </main>

  <!-- Footer Section -->
  <footer class="py-16 relative z-0" :style="sharedBackgroundStyle">
    <div
      class="bg-gray-800 opacity-50 blur-lg inset-0 absolute top-0 left-0 -z-10"
    ></div>
    <div
      class="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 z-20"
    >
      <!-- More Info Section -->

      <!-- Footer Text Description Section -->
      <div class="lg:col-span-2 flex flex-col items-start justify-center text-white">
    <h1 class="text-6xl font-bold mb-8 ">{{ settings.website_name }}</h1>
    <p class="text-2xl">{{ settings.footer_description }}</p>

    <!-- Contact Information Section -->
    <div class="mt-4 flex flex-col items-start space-y-2">
        <!-- Email -->
        <div class="flex items-center space-x-2">
            <!-- Email Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
            </svg>
            <!-- Email Link -->
            <a href="mailto:{{ settings.contact_email }}" class="text-lg hover:underline">{{ settings.email }}</a>
        </div>

        <!-- Phone -->
        <div class="flex items-center space-x-2">
            <!-- Phone Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
            </svg>
            <!-- Phone Link -->
            <a href="tel:+{{ settings.contact_phone }}" class="text-lg hover:underline">{{ settings.phone }}</a>
        </div>
    </div>
</div>


      <!-- Contact Form Section -->
      <div class="lg:col-span-1 space-y-6 text-white border-4 border-dashed border-blue-500 p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-6">Contact Us</h2>
        <form @submit.prevent="sendMessage" class="space-y-4">
          <input
            type="text"
            v-model="form.name"
            class="w-full h-12 px-4 text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Name"
          />
          <InputError :message="form.errors.name" class="mt-2" />
          <input
            type="email"
            v-model="form.email"
            class="w-full h-12 px-4 text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Email"
          />
          <InputError :message="form.errors.email" class="mt-2" />
          <input
            type="text"
            v-model="form.subject"
            class="w-full h-12 px-4 text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Subject"
          />
          <InputError :message="form.errors.subject" class="mt-2" />
          <textarea
            v-model="form.message"
            class="w-full h-32 px-4 rounded-lg text-gray-900 border focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Message"
          ></textarea>
          <InputError :message="form.errors.message" class="mt-2" />
          <button
            type="submit"
            class="w-full h-12 rounded-lg font-bold transition bg-blue-500 hover:bg-blue-600 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
      
    </div>
    <span class="text-lg text-white text-center block w-full">© {{ settings.footer_text }}</span>

<div class="text-center mt-2">
    <Link :href="route('terms')" class="text-white mx-2 underline hover:text-blue-500">Terms and Conditions</Link>
    <Link  :href="route('privacy')" class="text-white mx-2 underline hover:text-blue-500">Privacy Policy</Link>
    <Link :href="route('refund')" class="text-white mx-2 underline hover:text-blue-500">Refund Policy</Link>
</div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps(["settings"]);

const scrolled = ref(false); // Track scroll state
const sharedBackgroundStyle = {
  backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
  backgroundColor: props.settings.bg_color,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

const headerBackgroundColor = computed(() =>
  scrolled.value ? props.settings.main_color : "transparent"
);
const headerTextColor = computed(() => props.settings.secondary_color);
const linkTextColor = computed(() =>
  scrolled.value ? props.settings.secondary_color : "white"
);
const headerClass = computed(() => "transition-all duration-300 ease-in-out");
const textClass = computed(() => "font-semibold");
import { Link, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import Swal from "sweetalert2";
import { initFlowbite } from "flowbite";

const form = useForm({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const isMenuOpen = ref(false);
const isLargeOrMediumScreen = ref(false);

const checkScreenSize = () => {
  // Check if the screen is large or medium
  isLargeOrMediumScreen.value = window.innerWidth >= 768; // Adjust this value based on your breakpoints
};

const sendMessage = () => {
  form.post(route("contacts.store"), {
    preserveScroll: true,

    onSuccess: () => {
      form.reset();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Message sent successfully!",
      });
    },
  });
};
// Scroll handler

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  initFlowbite();
});

watch(isLargeOrMediumScreen, (newValue) => {
  // Automatically close the menu when the screen size is large or medium
  if (newValue) {
    isMenuOpen.value = false;
  }
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
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
