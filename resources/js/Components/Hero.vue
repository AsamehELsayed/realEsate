<template>
      <section id="home-section" class="relative h-screen bg-cover bg-center"
             style="background-image: url('/images/hero_1.jpg');">
      <div class="absolute inset-0 bg-gray-900 bg-opacity-70 z-0"></div>
      <div class="container mx-auto h-full flex flex-col items-center justify-center px-4 text-center relative z-10">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight ">
          Buy and Sell Real Estate Properties
        </h1>
        <p class="mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
          Discover the best deals and seamless transactions for your real estate needs.
        </p>
        <div class="mt-8">
          <a href="#howitworks-section" class="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold text-lg 
            hover:bg-gray-300 transition duration-300 shadow-md">
            Learn More
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <a href="#howitworks-section" class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-4xl 
          hover:text-gray-300 transition duration-300" aria-label="Scroll to How It Works section">
        <span class="icon-arrow_downward animate-bounce"></span>
      </a>
    </section>
</template>

<script setup>

</script>

<style>

</style>