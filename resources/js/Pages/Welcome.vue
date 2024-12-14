<template>

    <Hero :settings="settings" :hero="hero"></Hero>
    <Capabilities  :settings="settings" :capabilities="capabilities"></Capabilities>
    <Features  :settings="settings" :features="features"></Features>
    <pricing  :settings="settings" :prices="prices"  :plans="plans"></pricing>
    <program :settings="settings"  :Affiliate_Program="Affiliate_Program"></program>
    <Chat :settings="settings"></Chat>




 

</template>



<script setup>
import Calendly from '@/Pages/Guest/Calendly.vue';
import Capabilities from '@/Components/Capabilities.vue';
import Chat from '@/Components/Chat.vue';
import Features from '@/Components/Features.vue';
import Hero from '@/Components/Hero.vue';
import Pricing from '@/Components/Pricing.vue';
import Program from '@/Components/Program.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';

defineOptions({
    layout: GuestLayout,
});
const props = defineProps({
    hero: Object,
    Affiliate_Program: Object,
    capabilities: Object,
    prices: Object,
    plans: Object,
    features: Object,
    settings: Object
});

</script>