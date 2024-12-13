<template>
  <div
      class="container mx-auto h-full flex flex-col items-center justify-center px-4"
    >
      <h1
        class="text-xl md:text-2xl text-black lg:text-3xl font-extrabold leading-tight pt-20"
        
      >
        {{ privacy.content.header }}
      </h1>
      <div class="prose lg:prose-xl py-5" v-html="privacy.content.html_content
"></div>
  
    </div>
</template>

<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';

    defineOptions({
        layout: GuestLayout
    })
    const props= defineProps({
        privacy:Object
    })

</script>

<style>

</style>