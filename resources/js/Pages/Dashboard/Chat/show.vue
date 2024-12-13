<template>
  <div class="flex h-[90vh] overflow-hidden">
    <div class="flex-1 flex flex-col">
      <!-- Chat Header -->
      <header class="bg-white p-4 text-gray-700">
        <h1 class="text-2xl font-semibold">Chat</h1>
      </header>

      <!-- Chat Messages -->
      <div
        ref="messagesContainer"
        class="flex-1 overflow-y-auto p-4 space-y-4"
      >
        <!-- Incoming Message -->
        <div
          class="flex mb-4 cursor-pointer"
          v-for="message in messages"
          :key="message.id"
          :class="{ 'justify-end': message.sender, 'justify-start': message.sender == null }"
        >
          <div
            class="flex max-w-[75%] rounded-lg p-4 gap-3 shadow-lg"
            :class="message.sender ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'"
          >
            <div class="flex flex-col">
              <p class="text-sm leading-relaxed">{{ message.message }}</p>
              <span
                class="text-xs text-gray-500 mt-1"
                v-if="message.timestamp"
              >
                {{ new Date(message.timestamp).toLocaleTimeString() }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <footer class="bg-white border-t border-gray-300 p-4">
        <div class="flex items-center">
          <input v-model="newMessage" type="text" placeholder="Type a message..."
            class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500">
          <button @click="sendMessage" class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
        </div>
      </footer>
    </div>
  </div>
</template>
<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link } from '@inertiajs/vue3';
import { initFlowbite } from 'flowbite';
import { onMounted, ref, nextTick } from 'vue';

const props = defineProps({
  chat: Object,
  auth: Object
});

const messages = ref([...props.chat.messages]); // Copy messages to a local variable
const newMessage = ref('');
const messagesContainer = ref(null); // Ref for the messages container

onMounted(() => {
  initFlowbite();
    scrollToBottom();
  window.Echo.private('NewMessage.' + props.chat.id)
    .listen('NewMessageEvent', (e) => {
      if (e.message.sender == null) {
        console.log(e.message, "xdd");
        messages.value.push(e.message); // Update the local variable
        scrollToBottom(); // Scroll to the bottom after new message
      }
    });
});

defineOptions({
  layout: AuthenticatedLayout
});

const sendMessage = async () => {
  try {
    const response = await axios.post(route('sendMessage'), {
      message: newMessage.value,
      chat_id: props.chat.id,
    });
    if (response.data) {
      console.log(response.data);
      newMessage.value = '';
      messages.value.push(response.data);
      scrollToBottom(); // Scroll to bottom when a new message is added
    }
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// Function to scroll to the bottom of the messages container
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};
</script>
