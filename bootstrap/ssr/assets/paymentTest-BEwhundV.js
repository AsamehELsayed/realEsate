import { ssrRenderAttrs } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import { loadStripe } from "@stripe/stripe-js";
const _sfc_main = {
  __name: "paymentTest",
  __ssrInlineRender: true,
  setup(__props) {
    loadStripe("pk_test_51Q7K9jCGumqKsc28Z7l9F0TfwgY2GOdCUuSDHm4rEg2TkmDUlHS7k4xt9VLOnBRkiwEMxXz0li5mu0rL6WyA0u1a00WlRBdRbY");
    ref(5);
    ref(20);
    ref(3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button>اشتراك</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/paymentTest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
