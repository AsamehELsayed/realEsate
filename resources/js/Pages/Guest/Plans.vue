<template>
    <section
  
    class="py-16  "
    :style="sharedBackgroundStyle"
    
    >
  
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-20">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 text-black"
     >
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-black"
            :style="{ color: settings.main_color }"
          >
            {{ plans.content.header }}
          </h2>
  
          <h5
            class="mb-4 text-2xl tracking-tight font-semibold text-black"
            :style="{ color: settings.main_color }"
          >
            {{ plans.content.description }}
          </h5>
        </div>
  
        <div class="lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 space-y-8">
          <!-- Pricing Card -->
          <div
            v-for="price in prices"
            :key="price.id"
            class="flex flex-col p-6 mx-auto max-w-lg text-center rounded-xl border shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 h-full"
            :style="{
              backgroundColor: settings.main_color,
              borderColor: settings.secondary_color,
              borderWidth: '2px',
              position: 'relative',
            }"
          >
            <h3
              class="mb-4 text-2xl font-semibold text-white"
              :style="{ color: settings.main_font_color }"
            >
              {{ price.name }}
            </h3>
            <p
              class="font-light sm:text-lg text-gray-300"
              :style="{ color: settings.secondary_font_color }"
            >
              {{ price.description }}
            </p>
  
            <div class="flex justify-center items-baseline my-8">
              <span
                class="mr-2 text-5xl font-extrabold text-white"
                :style="{ color: settings.main_font_color }"
              >
                {{ price.price }}$
              </span>
              <span class="text-gray-300" :style="{ color: settings.secondary_font_color }">
                / hour
              </span>
            </div>
  
            <!-- List Features -->
            <ul
              role="list"
              class="mb-8 space-y-4 text-left flex-grow text-gray-300"
              :style="{ color: settings.secondary_font_color }"
            >
              <!-- Include Employee Count as a Feature -->
              <li class="flex items-center space-x-3">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  :style="{ color: settings.main_color }"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>{{ price.employees_count }} Employees</span>
              </li>
  
              <!-- Other Features -->
              <li
                class="flex items-center space-x-3"
                v-for="(feature, index) in price.features"
                :key="index"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  :style="{ color: settings.main_color }"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
  
            <button
              @click="subscribe(price)"
              class="text-white font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-300 ease-in-out transform hover:bg-opacity-90"
              :style="{
         backgroundColor: settings.secondary_color,
         color: settings.main_color,
              }"
            >
              Subscribe
            </button>
          </div>
          <!-- End of Pricing Card -->
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
    import GuestLayout from '@/Layouts/GuestLayout.vue';
import { loadStripe } from '@stripe/stripe-js';
    import Swal from 'sweetalert2';
    defineOptions({
      layout: GuestLayout
    })
    const props = defineProps({
      prices: Array,  // Array of pricing objects with title, description, price, per, and features
      settings: Object,  // Contains colors (bg_color, main_color, secondary_color, main_font_color, secondary_font_color)
      plans: Object,
    });
    const sharedBackgroundStyle = {
    backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
    backgroundColor: props.settings.bg_color,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  };
  
    const stripePromise = loadStripe('pk_test_51Q7K9jCGumqKsc28Z7l9F0TfwgY2GOdCUuSDHm4rEg2TkmDUlHS7k4xt9VLOnBRkiwEMxXz0li5mu0rL6WyA0u1a00WlRBdRbY'); // Replace with your Stripe public key
  
    const subscribe = async (price) => {
      try {
        // Show loading indicator
        Swal.fire({
          title: 'Loading',
          text: 'Please wait...',
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
  
        const featuresWithEmployeeCount = [
          `${price.employees_count} Employees`,
          ...price.features,
        ];
  
        const response = await axios.post('/create-checkout-session', {
          total: price.total,
          features: featuresWithEmployeeCount,
        });
  
        const session = response.data;
  
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
  
        if (error) {
          console.error('Error redirecting to checkout:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while processing the payment. Please try again.',
          });
        }
      } catch (error) {
        console.error('Error creating checkout session:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while creating the checkout session. Please try again.',
        });
      } finally {
        // Hide the loading indicator
        Swal.close();
      }
    };
  </script>
  