<template>
    <div>
      <!-- Header with dynamic background and text color based on scroll -->
      <header :class="[headerClass, textClass]" class="transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50">
        <div class="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
          <!-- Logo -->
          <h1 class="text-2xl lg:text-3xl font-bold transition duration-300">
            <a href="index.html">Stated.</a>
          </h1>
  
          <!-- Desktop Navigation -->
          <nav class="hidden xl:flex space-x-8 text-lg">
            <a href="#home-section" :class="linkClass">Home</a>
            <a href="#properties-section" :class="linkClass">Properties</a>
            <a href="#agents-section" :class="linkClass">Agents</a>
            <a href="#about-section" :class="linkClass">About</a>
            <a href="#news-section" :class="linkClass">News</a>
            <a href="#contact-section" :class="linkClass">Contact</a>
          </nav>
  
          <!-- Mobile Menu Button -->
          <div class="xl:hidden">
            <button class="text-gray-700 text-3xl hover:text-blue-500 transition duration-300 js-menu-toggle">
              <span class="icon-menu"></span>
            </button>
          </div>
        </div>
      </header>
  
      <!-- Main Content -->
      <main > <!-- Adjust for header height -->
        <slot></slot>
      </main>
      <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
    <!-- More Info Section -->
    <div>
      <h2 class="text-3xl font-extrabold text-white mb-6">More Info</h2>
      <p class="text-gray-400 mb-6 leading-relaxed">
        Save time, increase productivity, and close deals faster with Alie Callers. Get started today and rise with us!
      </p>
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-white">Email</h3>
          <div class="flex items-center space-x-4 mt-2">
            <div class="bg-gray-800 shadow-lg h-12 w-12 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#00aaff" viewBox="0 0 479.058 479.058">
                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
              </svg>
            </div>
            <a href="mailto:info@example.com" class="text-blue-400 hover:text-blue-500 underline">info@example.com</a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white">Follow Us</h3>
          <div class="flex space-x-4 mt-2">
            <a href="#" class="bg-gray-800 shadow-lg h-12 w-12 flex items-center justify-center rounded-full hover:bg-blue-500 transition-transform transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#00aaff" viewBox="0 0 24 24">
                <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Links Section -->
    <div>
      <h3 class="text-2xl font-extrabold text-white mb-4">Quick Links</h3>
      <ul class="space-y-4">
        <li><a href="#" class="text-gray-400 hover:text-white transition">About Us</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Services</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white transition">Contact Us</a></li>
      </ul>
    </div>

    <!-- Contact Us Section -->
    <div>
      <h2 class="text-3xl font-extrabold text-white mb-6">Contact Us</h2>
      <form action="#" method="POST" class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Your Name" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" placeholder="Your Email" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <input type="text" name="subject" placeholder="Subject" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea name="message" rows="6" placeholder="Your Message" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">Send Message</button>
      </form>
    </div>
  </div>
</footer>



    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const headerClass = ref('bg-transparent');
  
  // Initial text class (white and bold at the top)
  const textClass = ref('text-white');
  
  // Initial link class (white and bold at the top)
  const linkClass = ref('text-white font-bold transition duration-300 hover:text-blue-500');
  
  // Scroll handler function to toggle header background, text color, and links color
  const handleScroll = () => {
    if (window.scrollY > 0) {
      // Change background to white with shadow when scrolled
      headerClass.value = 'bg-white shadow-md';
      // Change text color to dark (default) when scrolled
      textClass.value = 'text-gray-800';
      // Change links text color to dark and remove bold when scrolled
      linkClass.value = 'text-gray-800 font-normal transition duration-300 hover:text-blue-500';
    } else {
      // Keep transparent when at the top of the page
      headerClass.value = 'bg-transparent';
      // Keep text white and bold when at the top
      textClass.value = 'text-white';
      // Keep links white and bold when at the top
      linkClass.value = 'text-white font-bold transition duration-300 hover:text-blue-500';
    }
  };
  
  // Listen for scroll events on mount
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  // Clean up on unmount
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  /* You can add additional custom styles here */
  </style>
  