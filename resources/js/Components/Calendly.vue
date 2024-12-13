<template>
    <div id="calendly" v-once class="calendly-inline-widget z-10" :data-url="calendlyUrl" style="min-width:320px;height:700px;"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        calendlyUrl: "https://calendly.com/gamersharkasyy/book-a-meeting",
      };
    },
    mounted() {
      // Initialize the Calendly widget after the component is mounted
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    },
  };
  </script>
  