<template>
    <Hero></Hero>
    <Capabilities></Capabilities>
    <pricing></pricing>
    <program></program>
    <Chat></Chat>




 

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
</script>