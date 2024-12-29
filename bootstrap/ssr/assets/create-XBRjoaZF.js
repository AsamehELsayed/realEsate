import { computed, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      description: "",
      price: "",
      days_per_month: null,
      hours_per_day: null,
      employees_count: null,
      features: []
    });
    const total = computed(() => {
      return form.price * form.days_per_month * form.hours_per_day * form.employees_count + "$";
    });
    const newFeature = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-4" }, _attrs))}><h1 class="text-2xl font-bold mb-4">Create Price Plan</h1><form><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Name</label><input id="name" type="text"${ssrRenderAttr("value", unref(form).name)} class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">`);
      if (unref(form).errors.name) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label for="description" class="block text-sm font-medium text-gray-700">Description</label><textarea id="description" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">${ssrInterpolate(unref(form).description)}</textarea>`);
      if (unref(form).errors.description) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.description)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label for="price" class="block text-sm font-medium text-gray-700">Price</label><input id="price" type="number" step="0.01"${ssrRenderAttr("value", unref(form).price)} class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">`);
      if (unref(form).errors.price) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.price)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label for="days_per_month" class="block text-sm font-medium text-gray-700">Days Per Month</label><input id="days_per_month" type="number"${ssrRenderAttr("value", unref(form).days_per_month)} class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">`);
      if (unref(form).errors.days_per_month) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.days_per_month)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label for="hours_per_day" class="block text-sm font-medium text-gray-700">Hours Per Day</label><input id="hours_per_day" type="number"${ssrRenderAttr("value", unref(form).hours_per_day)} class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">`);
      if (unref(form).errors.hours_per_day) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.hours_per_day)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label for="employees_count" class="block text-sm font-medium text-gray-700">Employees Count</label><input id="employees_count" type="number"${ssrRenderAttr("value", unref(form).employees_count)} class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">`);
      if (unref(form).errors.employees_count) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.employees_count)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><label for="features" class="block text-sm font-medium text-gray-700">Features</label><div class="flex items-center"><input type="text" id="features"${ssrRenderAttr("value", newFeature.value)} class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Add a new feature"><button type="button" class="ml-2 px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700"> + </button></div><ul class="mt-2"><!--[-->`);
      ssrRenderList(unref(form).features, (feature, index) => {
        _push(`<li class="flex items-center justify-between bg-gray-100 px-2 py-1 rounded-md mb-1"><span>${ssrInterpolate(feature)}</span><button type="button" class="text-red-500 text-sm hover:underline"> Remove </button></li>`);
      });
      _push(`<!--]--></ul>`);
      if (unref(form).errors.features) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.features)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="text"${ssrRenderAttr("value", total.value)} class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" readonly></div><button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"> Save Changes </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Prices/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
