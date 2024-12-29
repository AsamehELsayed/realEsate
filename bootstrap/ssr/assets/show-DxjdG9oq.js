import { ref, onMounted, nextTick, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import "@inertiajs/vue3";
import { initFlowbite } from "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "show",
  __ssrInlineRender: true,
  props: {
    chat: Object,
    auth: Object
  },
  setup(__props) {
    const props = __props;
    const messages = ref([...props.chat.messages]);
    const newMessage = ref("");
    const messagesContainer = ref(null);
    onMounted(() => {
      initFlowbite();
      scrollToBottom();
      window.Echo.private("NewMessage." + props.chat.id).listen("NewMessageEvent", (e) => {
        if (e.message.sender == null) {
          console.log(e.message, "xdd");
          messages.value.push(e.message);
          scrollToBottom();
        }
      });
    });
    const scrollToBottom = () => {
      nextTick(() => {
        if (messagesContainer.value) {
          messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-[90vh] overflow-hidden" }, _attrs))}><div class="flex-1 flex flex-col"><header class="bg-white p-4 text-gray-700"><h1 class="text-2xl font-semibold">Chat</h1></header><div class="flex-1 overflow-y-auto p-4 space-y-4"><!--[-->`);
      ssrRenderList(messages.value, (message) => {
        _push(`<div class="${ssrRenderClass([{ "justify-end": message.sender, "justify-start": message.sender == null }, "flex mb-4 cursor-pointer"])}"><div class="${ssrRenderClass([message.sender ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700", "flex max-w-[75%] rounded-lg p-4 gap-3 shadow-lg"])}"><div class="flex flex-col"><p class="text-sm leading-relaxed">${ssrInterpolate(message.message)}</p>`);
        if (message.timestamp) {
          _push(`<span class="text-xs text-gray-500 mt-1">${ssrInterpolate(new Date(message.timestamp).toLocaleTimeString())}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><footer class="bg-white border-t border-gray-300 p-4"><div class="flex items-center"><input${ssrRenderAttr("value", newMessage.value)} type="text" placeholder="Type a message..." class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"><button class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button></div></footer></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Chat/show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
