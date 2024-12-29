import { onMounted, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import { Link } from "@inertiajs/vue3";
import { initFlowbite } from "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    chats: Object
  },
  setup(__props) {
    onMounted(() => {
      initFlowbite();
      window.Echo.private("NewChat").listen("NewChatEvent", (e) => {
        props.chats.push(e.chat);
      });
    });
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-full flex justify-between items-center mb-6"><h1 class="text-3xl font-bold">Chats</h1></div><!--[-->`);
      ssrRenderList(__props.chats, (chat) => {
        _push(ssrRenderComponent(unref(Link), {
          key: chat.id,
          href: _ctx.route("chats.show", chat.id),
          class: "flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<div class="flex flex-col justify-between p-4 leading-normal w-full"${_scopeId}><p class="mb-3 font-normal text-gray-700 dark:text-gray-400"${_scopeId}>${ssrInterpolate((((_a = chat == null ? void 0 : chat.last_message) == null ? void 0 : _a.message) || "N/A").slice(0, 50) + "...")}</p><div class="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400"${_scopeId}><span${_scopeId}>Messages: ${ssrInterpolate((chat == null ? void 0 : chat.messages_count) || 0)}</span><span${_scopeId}>Last User: ${ssrInterpolate(((_b = chat == null ? void 0 : chat.user) == null ? void 0 : _b.name) || "N/A")}</span><span${_scopeId}>Created At: ${ssrInterpolate((chat == null ? void 0 : chat.created_at) || 2022)}</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col justify-between p-4 leading-normal w-full" }, [
                  createVNode("p", { class: "mb-3 font-normal text-gray-700 dark:text-gray-400" }, toDisplayString((((_c = chat == null ? void 0 : chat.last_message) == null ? void 0 : _c.message) || "N/A").slice(0, 50) + "..."), 1),
                  createVNode("div", { class: "flex justify-between items-center text-sm text-gray-500 dark:text-gray-400" }, [
                    createVNode("span", null, "Messages: " + toDisplayString((chat == null ? void 0 : chat.messages_count) || 0), 1),
                    createVNode("span", null, "Last User: " + toDisplayString(((_d = chat == null ? void 0 : chat.user) == null ? void 0 : _d.name) || "N/A"), 1),
                    createVNode("span", null, "Created At: " + toDisplayString((chat == null ? void 0 : chat.created_at) || 2022), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Chat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
