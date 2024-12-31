<template>
  <!-- Header with dynamic background and text color based on scroll -->
  <header
    :class="[headerClass, textClass]"
    :style="{ backgroundColor: headerBackgroundColor, color: headerTextColor }"
    class="transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50"
  >
    <div
      class="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8"
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
      <div
        class="lg:col-span-2 flex flex-col items-start justify-center text-white"
      >
        <h2 class="text-2xl font-bold mb-6">{{ settings.footer_text }}</h2>
        <p class="text-lg">{{ settings.footer_description }}</p>
        <div class="flex space-x-4">
       
          <Link
            :href="route('privacy')"
            class="font-bold text-lg hover:scale-110 transition-all"
            :class="linkClass"
            :style="{ color: linkTextColor }"
            >Privacy Policy</Link
          >
          <Link
            :href="route('refund')"
            class="font-bold text-lg hover:scale-110 transition-all"
            :class="linkClass"
            :style="{ color: linkTextColor }"
            >Refund Policy</Link
          >
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="lg:col-span-1 space-y-6 text-white">
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
