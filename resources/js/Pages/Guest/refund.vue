<template>
    <Head title="Refund" />

<section
  id="affiliate-section"
  class="py-20 bg-white"
  :style="sharedBackgroundStyle"
>
  <div
    class="container mx-auto h-full flex flex-col items-center justify-center px-4"
  >
  <div class="container mx-auto bg-white max-w-6xl rounded-lg shadow-lg p-10">

    <h1
      class="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight pt-20"
    >
      {{ privacy.content.header }}
    </h1>
    <div
      class="prose lg:prose-xl py-5"
      v-html="privacy.content.html_content"
    ></div>
  </div>
  </div>
</section>
</template>

<script setup>
defineOptions({
layout: GuestLayout,
});
const props = defineProps({
privacy: Object,
settings: Object,
});
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head } from "@inertiajs/vue3";
const sharedBackgroundStyle = {
backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
backgroundColor: props.settings.bg_color,
backgroundAttachment: "fixed",
backgroundSize: "cover",
};

</script>

<style>
</style>