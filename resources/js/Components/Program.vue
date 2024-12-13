<template>
  <section
    id="affiliate-section"
    class="py-16 bg-white"
  >
    <div class="container mx-auto max-w-6xl text-center space-y-12">
      <!-- Section Title -->
      <h2
        class="text-3xl font-bold"
        :style="{ color: settings.main_font_color }"
      >
        {{ Affiliate_Program.content.header }}
      </h2>
      <p
        class="text-xl max-w-2xl mx-auto"
        :style="{ color: settings.secondary_font_color }"
      >
        {{ Affiliate_Program.content.sub_header }}
      </p>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Left Card: Image -->
        <div
          class="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <img
            :src="`/storage/${Affiliate_Program.content.image}`"
            alt="Affiliate Program Image"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Right Card: Form -->
        <div
          class="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between space-y-6"
        >
          <h3
            class="text-2xl font-semibold"
            :style="{ color: settings.main_font_color }"
          >
            {{ Affiliate_Program.content.third_header }}
          </h3>
          <p :style="{ color: settings.secondary_font_color }">
            {{ Affiliate_Program.content.description }}
          </p>
          <form @submit.prevent="send" class="space-y-4">
            <input
              type="text"
              v-model="form.name"
              class="w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="Name"
              :style="{
                borderColor: settings.main_color,
                color: settings.secondary_font_color,
              }"
            />
            <input
              type="email"
              v-model="form.email"
              class="w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="Email"
              :style="{
                borderColor: settings.main_color,
                color: settings.secondary_font_color,
              }"
            />
            <input
              type="tel"
              v-model="form.phone"
              class="w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="Phone"
              :style="{
                borderColor: settings.main_color,
                color: settings.secondary_font_color,
              }"
            />
            <button
              type="submit"
              class="w-full h-12 rounded-lg font-semibold transition duration-300"
              :style="{
                backgroundColor: settings.main_color,
                color: settings.secondary_color,
              }"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import Swal from "sweetalert2";

// Form State
const form = useForm({
  name: "",
  email: "",
  phone: "",
});

// Form Submission Handler
const send = () => {
  form.post(route("programs.store"), {
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

// Props
const props = defineProps({
  Affiliate_Program: Object, // Contains the content data
  settings: Object, // Contains dynamic settings for colors
});
</script>

<style scoped>
/* Scoped styles for fine-tuning if needed */
</style>
