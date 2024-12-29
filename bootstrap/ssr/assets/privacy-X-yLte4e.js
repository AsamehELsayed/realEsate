import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { G as GuestLayout } from "./GuestLayout-BTTpX88I.js";
import "@inertiajs/vue3";
import "./InputError-D7Pvlg8p.js";
import "sweetalert2";
import "flowbite";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: GuestLayout
}, {
  __name: "privacy",
  __ssrInlineRender: true,
  props: {
    privacy: Object,
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
        id: "affiliate-section",
        class: "py-20 bg-white",
        style: sharedBackgroundStyle
      }, _attrs))}><div class="container mx-auto h-full flex flex-col items-center justify-center px-4"><div class="container mx-auto bg-white max-w-6xl rounded-lg shadow-lg p-10"><h1 class="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight pt-20">${ssrInterpolate(__props.privacy.content.header)}</h1><div class="prose lg:prose-xl py-5">${__props.privacy.content.html_content ?? ""}</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
