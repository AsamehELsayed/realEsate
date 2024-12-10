<template>
    <div>
      <button @click="subscribe">اشتراك</button>
    </div>
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
  