import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "@inertiajs/vue3";
import { G as GuestLayout } from "./GuestLayout-BTTpX88I.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./InputError-D7Pvlg8p.js";
import "sweetalert2";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: GuestLayout
}, {
  __name: "PaymentSuccess",
  __ssrInlineRender: true,
  props: {
    settings: Object
  },
  setup(__props) {
    const props = __props;
    const sharedBackgroundStyle = {
      backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
      backgroundColor: props.settings.bg_color,
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-16",
        style: sharedBackgroundStyle
      }, _attrs))} data-v-dce17899><div class="flex justify-center items-center min-h-screen 0 py-10" data-v-dce17899><div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center" data-v-dce17899><div class="mb-6" data-v-dce17899><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-24 h-24 text-green-500 mx-auto" data-v-dce17899><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-dce17899></path></svg></div><h1 class="text-3xl font-semibold text-green-600 mb-4" data-v-dce17899>Payment Successful!</h1><p class="text-lg text-gray-700 mb-6" data-v-dce17899>Thank you for your purchase. Your payment has been successfully processed.</p></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/PaymentSuccess.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaymentSuccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dce17899"]]);
export {
  PaymentSuccess as default
};
