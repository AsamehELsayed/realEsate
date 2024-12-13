<template>
    <div>
      <button @click="subscribe">اشتراك</button>
    </div>
            <!-- <div class="flex gap-2 my-2 text-gray-600 text-sm">
          <span class="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6">
            <div class="rounded-full bg-gray-100 border p-1">
              <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
              </svg>
            </div>
          </span>
          <p class="leading-relaxed">
            <span class="block font-bold text-gray-700">AI</span> Hi, how can I help you today?
          </p>
        </div>
  
        <div class="flex gap-2 my-2 text-gray-600 text-sm">
          <span class="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6">
            <div class="rounded-full bg-gray-100 border p-1">
              <svg stroke="none" fill="black" stroke-width="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
              </svg>
            </div>
          </span>
          <p class="leading-relaxed">
            <span class="block font-bold text-gray-700">You</span> How does it work?
          </p>
        </div>
  
        <div class="flex gap-2 my-2 text-gray-600 text-sm">
          <span class="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6">
            <div class="rounded-full bg-gray-100 border p-1">
              <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
              </svg>
            </div>
          </span>
          <p class="leading-relaxed">
            <span class="block font-bold text-gray-700">AI</span> It uses machine learning to understand and respond to your questions.
          </p>
        </div> -->
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { loadStripe } from '@stripe/stripe-js';
  import axios from 'axios'; // استيراد axios
  
  // تحميل Stripe باستخدام المفتاح العام الخاص بك
  const stripePromise = loadStripe('pk_test_51Q7K9jCGumqKsc28Z7l9F0TfwgY2GOdCUuSDHm4rEg2TkmDUlHS7k4xt9VLOnBRkiwEMxXz0li5mu0rL6WyA0u1a00WlRBdRbY'); // استبدل المفتاح العام بمفتاحك الخاص من Stripe
  
  // البيانات المطلوبة لحساب السعر
  const daysPerWeek = ref(5); // عدد الأيام في الأسبوع
  const numberOfDays = ref(20); // عدد الأيام الإجمالي
  const numberOfEmployees = ref(3); // عدد الموظفين
  
  // وظيفة الاشتراك
  const subscribe = async () => {
    try {
      // إرسال البيانات إلى الخادم لإنشاء جلسة دفع
      const response = await axios.post('/create-checkout-session', {
        daysPerWeek: daysPerWeek.value,
        numberOfDays: numberOfDays.value,
        numberOfEmployees: numberOfEmployees.value,
      });
  
      // الحصول على معرف الجلسة من الاستجابة
      const session = response.data;
  
      // إعادة توجيه المستخدم إلى صفحة الدفع باستخدام Stripe
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
  
      if (error) {
        console.error('Error redirecting to checkout:', error);
        alert('حدث خطأ أثناء عملية الدفع. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('حدث خطأ أثناء إنشاء جلسة الدفع. يرجى المحاولة مرة أخرى.');
    }
  };
  </script>
  