import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { G as GuestLayout } from "./GuestLayout-BTTpX88I.js";
import "@inertiajs/vue3";
import "./InputError-D7Pvlg8p.js";
import "sweetalert2";
import "flowbite";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: GuestLayout
}, {
  __name: "Calendly",
  __ssrInlineRender: true,
  props: {
    settings: Object
    // Contains dynamic colors (main_color, secondary_color, bg_color, main_font_color, secondary_font_color)
  },
  setup(__props) {
    const props = __props;
    const sharedBackgroundStyle = {
      backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
      backgroundColor: props.settings.bg_color,
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    };
    const calendlyUrl = ref("https://calendly.com/gamersharkasyy/book-a-meeting");
    onMounted(() => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-16 bg-white",
        style: sharedBackgroundStyle
      }, _attrs))}><div class="container mx-auto max-w-6xl text-center space-y-14 py-5 z-20"></div><div id="calendly" class="calendly-inline-widget z-10"${ssrRenderAttr("data-url", calendlyUrl.value)} style="${ssrRenderStyle({ "min-width": "320px", "height": "700px" })}"></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/Calendly.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
