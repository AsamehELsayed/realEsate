import { reactive, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import { Link } from "@inertiajs/vue3";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    contacts: Object
  },
  setup(__props) {
    const expandedMessages = reactive({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-full flex justify-between items-center mb-6"><h1 class="text-3xl font-bold">Contacts</h1></div><div class="relative overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700"><table class="w-full text-sm text-left text-gray-700 dark:text-gray-400"><thead class="text-sm font-semibold uppercase bg-gray-100 dark:bg-gray-800"><tr><th scope="col" class="px-6 py-3">Name</th><th scope="col" class="px-6 py-3">Email</th><th scope="col" class="px-6 py-3 text-center">Subject</th><th scope="col" class="px-6 py-3 text-center">Message</th><th scope="col" class="px-6 py-3 text-center">Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.contacts, (contact) => {
        _push(`<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-700 transition-colors"><td class="px-6 py-4 font-medium text-gray-900 dark:text-white">${ssrInterpolate(contact.name)}</td><td class="px-6 py-4">${ssrInterpolate(contact.email)}</td><td class="px-6 py-4">${ssrInterpolate(contact.subject)}</td><td class="px-6 py-4">`);
        if (!expandedMessages[contact.id]) {
          _push(`<span>${ssrInterpolate(contact.message.slice(0, 30))} `);
          if (contact.message.length > 30) {
            _push(`<span class="text-indigo-600 cursor-pointer hover:underline"> ...See more </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        } else {
          _push(`<span>${ssrInterpolate(contact.message)} <span class="text-indigo-600 cursor-pointer hover:underline"> Show less </span></span>`);
        }
        _push(`</td><td class="px-6 py-4 flex justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("contacts.destroy", contact.id),
          method: "delete",
          class: "px-3 py-2 bg-red-600 text-white text-sm font-medium rounded shadow hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Delete `);
            } else {
              return [
                createTextVNode(" Delete ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
