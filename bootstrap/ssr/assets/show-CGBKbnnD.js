import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import { Link } from "@inertiajs/vue3";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "show",
  __ssrInlineRender: true,
  props: {
    plan: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))}><div class="flex justify-between items-center mb-6"><h1 class="text-3xl font-bold">Plan Details</h1><div class="space-x-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("prices.edit", __props.plan.id),
        class: "px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ✏️ Edit `);
          } else {
            return [
              createTextVNode(" ✏️ Edit ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Plan Name</h2><p class="text-gray-900 dark:text-white">${ssrInterpolate(__props.plan.name)}</p></div><div><h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Price</h2><p class="text-gray-900 dark:text-white">${ssrInterpolate(__props.plan.price)}</p></div><div><h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Per</h2><p class="text-gray-900 dark:text-white">${ssrInterpolate(__props.plan.per)}</p></div><div><h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Description</h2><p class="text-gray-900 dark:text-white">${ssrInterpolate(__props.plan.description || "No description available.")}</p></div></div></div><div class="bg-gray-50 dark:bg-gray-900 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700"><h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Features</h2><ul class="list-disc pl-5 space-y-2"><!--[-->`);
      ssrRenderList(__props.plan.features, (feature) => {
        _push(`<li class="text-gray-700 dark:text-gray-300">${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="mt-6">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("prices.index"),
        class: "px-6 py-3 bg-gray-600 text-white text-sm font-medium rounded-md shadow hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← Back to Plans `);
          } else {
            return [
              createTextVNode(" ← Back to Plans ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Prices/show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
