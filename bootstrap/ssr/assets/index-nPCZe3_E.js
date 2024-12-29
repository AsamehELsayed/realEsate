import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import { Link } from "@inertiajs/vue3";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    prices: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-full flex justify-between items-center mb-6"><h1 class="text-3xl font-bold">Plans</h1>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("prices.create"),
        class: "px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + Create `);
          } else {
            return [
              createTextVNode(" + Create ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700"><table class="w-full text-sm text-left text-gray-700 dark:text-gray-400"><thead class="text-sm font-semibold uppercase bg-gray-100 dark:bg-gray-800"><tr><th scope="col" class="px-6 py-3">Plan Name</th><th scope="col" class="px-6 py-3">Price per hour $</th><th scope="col" class="px-6 py-3">Count of employees</th><th scope="col" class="px-6 py-3">Total</th><th scope="col" class="px-6 py-3 text-center">Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.prices, (price) => {
        _push(`<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-700 transition-colors"><td class="px-6 py-4 font-medium text-gray-900 dark:text-white">${ssrInterpolate(price.name)}</td><td class="px-6 py-4">${ssrInterpolate(price.price)}</td><td class="px-6 py-4">${ssrInterpolate(price.employees_count)}</td><td class="px-6 py-4">${ssrInterpolate(price.total)}$</td><td class="px-6 py-4 flex justify-center gap-2">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("prices.edit", price.id),
          class: "px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded shadow hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Edit `);
            } else {
              return [
                createTextVNode(" Edit ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("prices.show", price.id),
          class: "px-3 py-2 bg-green-600 text-white text-sm font-medium rounded shadow hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Show `);
            } else {
              return [
                createTextVNode(" Show ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("prices.destroy", price.id),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Prices/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
