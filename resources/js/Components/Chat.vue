<template>
  <!-- Chatbot Button -->
  <button @click="toggleChat = !toggleChat" v-if="!toggleChat"
  
    class="fixed bottom-4 z-50 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-12 h-12 bg-gray-600 hover:bg-gray-700 cursor-pointer border-gray-200 bg-none p-0 transition duration-200"
    type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="text-white block border-gray-200 align-middle">
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" class="border-gray-200"></path>
    </svg>
  </button>

  <!-- Chat Container -->
  <div v-if="toggleChat"
    class="fixed z-50 bottom-6 right-6 bg-white p-5 rounded-xl border border-gray-200 shadow-xl w-[400px] h-[550px] flex flex-col transition-all duration-300 transform ease-in-out">
    
    <!-- Close Button -->
    <button @click="toggleChat = false"
      class="absolute top-2 right-2 bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full p-2 shadow-md focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Heading -->
    <div class="flex flex-col space-y-1 pb-3 border-b border-gray-200">
      <h2 class="font-bold text-lg text-gray-900">{{ settings.website_name }}</h2>
      <p class="text-sm text-gray-600">Top-tier lead generation capabilities</p>
    </div>

    <!-- Initial State: Chat Image and Button -->
    <div v-if="!chatStarted" class="grid row-span-2 grid-flow-row h-full items-center justify-center space-y-4">
      <img src="/images/chat.png" class="w-72 h-72 object-cover rounded-lg" alt="Chatbot Image">
      <button @click="startChat"
        class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition duration-300">
        Start Chat
      </button>
    </div>

    <!-- Chat Messages -->
    <div v-else class="flex-1 flex flex-col space-y-4">
      <div ref="messageContainer" class="flex-1 overflow-y-auto bg-gray-50 p-3 rounded-lg shadow-inner space-y-2 max-h-[400px]">
        <div v-for="message in messages" :key="message.id"
          :class="!message.sender ? 'self-end bg-blue-500 text-white' : 'self-start bg-gray-200 text-gray-800'"
          class="p-3 rounded-lg shadow-sm max-w-[75%]">
          <p class="text-sm">{{ message.message }}</p>
        </div>
      </div>

      <!-- Input Field -->
      <div class="flex items-center space-x-3">
        <input v-model="newMessage" type="text" placeholder="Type your message..."
          class="flex-1 h-10 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200" />
        <button @click="sendMessage" type="button"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md flex items-center justify-center transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-9.72-4.272A1 1 0 004 7.82v8.358a1 1 0 001.356.93l9.396-3.91a1 1 0 00.748-.916V11.17a1 1 0 00-.748-.917z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  settings: Object,
});
import axios from "axios";
import { ref, reactive, watch, nextTick } from "vue";

const chatStarted = ref(false);
const chatId = ref(null);
const messages = ref([]);
const messageContainer = ref(null); // Ref for the message container

const startChat = async () => {
  try {
    const response = await axios.post(route('chats.store'));
    if (response.data) {
      chatStarted.value = true;
      chatId.value = response.data.id;
      if (response.data.messages.length > 0) {
        messages.value = response.data.messages;
      }
      scrollToBottom(); // Scroll to bottom when chat starts

      // Subscribe to the chat channel
      window.Echo.channel('public.NewMessage.' + chatId.value)
        .listen('NewMessageToPublicEvent', (e) => {
          messages.value.push(e.message);
          scrollToBottom();
        });
    }
  } catch (error) {
    console.error(error);
  }
};

const newMessage = ref('');
const sendMessage = async () => {
  if (!chatId.value) {
    return;
  }
  try {
    const response = await axios.post(route('sendMessageGuest'), {
      message: newMessage.value,
      chat_id: chatId.value,
    },{

    });
    if (response.data) {
      newMessage.value = '';
      messages.value.push(response.data);
      scrollToBottom(); // Scroll to bottom when a new message is added
    }
  } catch (error) {
    console.error(error);
  }
};

const toggleChat = ref(false);

const scrollToBottom = () => {
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }
  });
};

// Watch for changes in messages and scroll to the bottom
watch(messages, () => {
  scrollToBottom();
});
</script>

<style scoped>
/* Add any custom styles for further refinement if needed */
</style>
