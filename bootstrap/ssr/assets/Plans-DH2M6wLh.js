import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { G as GuestLayout } from "./GuestLayout-BTTpX88I.js";
import { loadStripe } from "@stripe/stripe-js";
import "sweetalert2";
import "@inertiajs/vue3";
import "./InputError-D7Pvlg8p.js";
import "flowbite";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: GuestLayout
}, {
  __name: "Plans",
  __ssrInlineRender: true,
  props: {
    prices: Array,
    // Array of pricing objects with title, description, price, per, and features
    settings: Object,
    // Contains colors (bg_color, main_color, secondary_color, main_font_color, secondary_font_color)
    plans: Object
  },
  setup(__props) {
    const props = __props;
    const sharedBackgroundStyle = {
      backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
      backgroundColor: props.settings.bg_color,
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    };
    loadStripe("pk_test_51Q7K9jCGumqKsc28Z7l9F0TfwgY2GOdCUuSDHm4rEg2TkmDUlHS7k4xt9VLOnBRkiwEMxXz0li5mu0rL6WyA0u1a00WlRBdRbY");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-16",
        style: sharedBackgroundStyle
      }, _attrs))}><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-20"><div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 text-black"><h2 class="mb-4 text-4xl tracking-tight font-extrabold text-black" style="${ssrRenderStyle({ color: __props.settings.main_color })}">${ssrInterpolate(__props.plans.content.header)}</h2><h5 class="mb-4 text-2xl tracking-tight font-semibold text-black" style="${ssrRenderStyle({ color: __props.settings.main_color })}">${ssrInterpolate(__props.plans.content.description)}</h5></div><div class="lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 space-y-8"><!--[-->`);
      ssrRenderList(__props.prices, (price) => {
        _push(`<div class="flex flex-col p-6 mx-auto max-w-lg text-center rounded-xl border shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 h-full" style="${ssrRenderStyle({
          backgroundColor: __props.settings.main_color,
          borderColor: __props.settings.secondary_color,
          borderWidth: "2px",
          position: "relative"
        })}"><h3 class="mb-4 text-2xl font-semibold text-white" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}">${ssrInterpolate(price.name)}</h3><p class="font-light sm:text-lg text-gray-300" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}">${ssrInterpolate(price.description)}</p><div class="flex justify-center items-baseline my-8"><span class="mr-2 text-5xl font-extrabold text-white" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}">${ssrInterpolate(price.price)}$ </span><span class="text-gray-300" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}"> / hour </span></div><ul role="list" class="mb-8 space-y-4 text-left flex-grow text-gray-300" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}"><li class="flex items-center space-x-3"><svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ color: __props.settings.main_color })}"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span>${ssrInterpolate(price.employees_count)} Employees</span></li><!--[-->`);
        ssrRenderList(price.features, (feature, index) => {
          _push(`<li class="flex items-center space-x-3"><svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ color: __props.settings.main_color })}"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul><button class="text-white font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-300 ease-in-out transform hover:bg-opacity-90" style="${ssrRenderStyle({
          backgroundColor: __props.settings.secondary_color,
          color: __props.settings.main_color
        })}"> Subscribe </button></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/Plans.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
