<template>
    <Hero :settings="settings" :hero="hero"></Hero>
    <Capabilities :settings="settings" :capabilities="capabilities"></Capabilities>
    <pricing :settings="settings" :prices="prices"></pricing>
    <program :settings="settings" :Affiliate_Program="Affiliate_Program"></program>
    <Chat :settings="settings"></Chat>




 

</template>



<script setup>
import Capabilities from '@/Components/Capabilities.vue';
import Chat from '@/Components/Chat.vue';
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
    settings: Object
});
</script>