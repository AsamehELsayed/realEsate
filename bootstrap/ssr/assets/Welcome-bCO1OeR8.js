import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "./Calendly--4kW7xTJ.js";
import { mergeProps, useSSRContext, ref, watch, nextTick, unref, withCtx, createVNode, openBlock, createBlock, resolveComponent, createTextVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { Link, useForm } from "@inertiajs/vue3";
import { loadStripe } from "@stripe/stripe-js";
import "sweetalert2";
import { G as GuestLayout } from "./GuestLayout-BTTpX88I.js";
import "./InputError-D7Pvlg8p.js";
import "flowbite";
const _sfc_main$6 = {
  __name: "Capabilities",
  __ssrInlineRender: true,
  props: {
    capabilities: Object,
    // Contains dynamic content for each capability (header, title, description)
    settings: Object
    // Contains dynamic colors (bg_color, main_color, secondary_color, main_font_color, secondary_font_color)
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "capabilities-section",
        class: "py-16 bg-white sm:h-full lg:h-96"
      }, _attrs))} data-v-961dd3ff><div class="container mx-auto max-w-5xl text-center space-y-12 z-20" data-v-961dd3ff><h2 class="text-3xl font-bold z-20" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}" data-v-961dd3ff>${ssrInterpolate(__props.capabilities.content.header)}</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8 z-20" data-v-961dd3ff><div class="space-y-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out" style="${ssrRenderStyle({
        borderWidth: "2px"
      })}" data-v-961dd3ff><div class="text-6xl mb-4 flex w-full justify-center" style="${ssrRenderStyle({ color: __props.settings.main_color })}" data-v-961dd3ff></div><h3 class="text-xl font-semibold" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}" data-v-961dd3ff>${ssrInterpolate(__props.capabilities.content.capabilities_one.title)}</h3><p class="text-gray-600" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}" data-v-961dd3ff>${ssrInterpolate(__props.capabilities.content.capabilities_one.description)}</p></div><div class="space-y-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out" style="${ssrRenderStyle({
        borderWidth: "2px"
      })}" data-v-961dd3ff><div class="text-6xl mb-4 flex w-full justify-center" style="${ssrRenderStyle({ color: __props.settings.main_color })}" data-v-961dd3ff></div><h3 class="text-xl font-semibold" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}" data-v-961dd3ff>${ssrInterpolate(__props.capabilities.content.capabilities_two.title)}</h3><p class="text-gray-600" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}" data-v-961dd3ff>${ssrInterpolate(__props.capabilities.content.capabilities_two.description)}</p></div><div class="space-y-4 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out" style="${ssrRenderStyle({
        borderWidth: "2px"
      })}" data-v-961dd3ff><div class="text-6xl mb-4 flex w-full justify-center" style="${ssrRenderStyle({ color: __props.settings.main_color })}" data-v-961dd3ff></div><h3 class="text-xl font-semibold" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}" data-v-961dd3ff>${ssrInterpolate(__props.capabilities.content.capabilities_three.title)}</h3><p class="text-gray-600" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}" data-v-961dd3ff>${ssrInterpolate(__props.capabilities.content.capabilities_three.description)}</p></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Capabilities.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Capabilities = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-961dd3ff"]]);
const _sfc_main$5 = {
  __name: "Chat",
  __ssrInlineRender: true,
  props: {
    settings: Object
  },
  setup(__props) {
    const chatStarted = ref(false);
    ref(null);
    const messages = ref([]);
    const messageContainer = ref(null);
    const newMessage = ref("");
    const toggleChat = ref(false);
    const scrollToBottom = () => {
      nextTick(() => {
        if (messageContainer.value) {
          messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
        }
      });
    };
    watch(messages, () => {
      scrollToBottom();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (!toggleChat.value) {
        _push(`<button class="fixed bottom-4 z-50 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-12 h-12 bg-gray-600 hover:bg-gray-700 cursor-pointer border-gray-200 bg-none p-0 transition duration-200" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" data-v-090d8d24><svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white block border-gray-200 align-middle" data-v-090d8d24><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" class="border-gray-200" data-v-090d8d24></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      if (toggleChat.value) {
        _push(`<div class="fixed z-50 bottom-6 right-6 bg-white p-5 rounded-xl border border-gray-200 shadow-xl w-[400px] h-[550px] flex flex-col transition-all duration-300 transform ease-in-out" data-v-090d8d24><button class="absolute top-2 right-2 bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-full p-2 shadow-md focus:outline-none" data-v-090d8d24><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-090d8d24><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-090d8d24></path></svg></button><div class="flex flex-col space-y-1 pb-3 border-b border-gray-200" data-v-090d8d24><h2 class="font-bold text-lg text-gray-900" data-v-090d8d24>${ssrInterpolate(__props.settings.website_name)}</h2><p class="text-sm text-gray-600" data-v-090d8d24>Top-tier lead generation capabilities</p></div>`);
        if (!chatStarted.value) {
          _push(`<div class="grid row-span-2 grid-flow-row h-full items-center justify-center space-y-4" data-v-090d8d24><img src="/images/chat.png" class="w-72 h-72 object-cover rounded-lg" alt="Chatbot Image" data-v-090d8d24><button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition duration-300" data-v-090d8d24> Start Chat </button></div>`);
        } else {
          _push(`<div class="flex-1 flex flex-col space-y-4" data-v-090d8d24><div class="flex-1 overflow-y-auto bg-gray-50 p-3 rounded-lg shadow-inner space-y-2 max-h-[400px]" data-v-090d8d24><!--[-->`);
          ssrRenderList(messages.value, (message) => {
            _push(`<div class="${ssrRenderClass([!message.sender ? "self-end bg-blue-500 text-white" : "self-start bg-gray-200 text-gray-800", "p-3 rounded-lg shadow-sm max-w-[75%]"])}" data-v-090d8d24><p class="text-sm" data-v-090d8d24>${ssrInterpolate(message.message)}</p></div>`);
          });
          _push(`<!--]--></div><div class="flex items-center space-x-3" data-v-090d8d24><input${ssrRenderAttr("value", newMessage.value)} type="text" placeholder="Type your message..." class="flex-1 h-10 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200" data-v-090d8d24><button type="button" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md flex items-center justify-center transition duration-200" data-v-090d8d24><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-090d8d24><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-9.72-4.272A1 1 0 004 7.82v8.358a1 1 0 001.356.93l9.396-3.91a1 1 0 00.748-.916V11.17a1 1 0 00-.748-.917z" data-v-090d8d24></path></svg></button></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Chat.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Chat = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-090d8d24"]]);
const _sfc_main$4 = {
  __name: "Features",
  __ssrInlineRender: true,
  props: {
    features: Object,
    // Contains dynamic content for each capability (header, title, description)
    settings: Object
    // Contains dynamic colors (bg_color, main_color, secondary_color, main_font_color, secondary_font_color)
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "features-section",
        class: "py-16 sm:h-full lg:min-h-full relative overflow-hidden"
      }, _attrs))} data-v-5bee831d><div class="absolute inset-0 opacity-10 pointer-events-none" data-v-5bee831d></div><div class="container mx-auto max-w-7xl px-6 text-center space-y-16 relative z-20" data-v-5bee831d><h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}" data-v-5bee831d>${ssrInterpolate(__props.features.content.header)}</h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12" data-v-5bee831d><!--[-->`);
      ssrRenderList([
        __props.features.content.feature_one,
        __props.features.content.feature_two,
        __props.features.content.feature_three,
        __props.features.content.feature_four
      ], (feature, index) => {
        _push(`<div class="relative group rounded-xl p-8 bg-white shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out" style="${ssrRenderStyle({ border: `2px solid ${__props.settings.main_color}` })}" data-v-5bee831d><div class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr flex items-center justify-center text-white text-3xl shadow-md" style="${ssrRenderStyle({ background: __props.settings.main_color })}" data-v-5bee831d><svg style="${ssrRenderStyle({ fill: __props.settings.secondary_color })}" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-v-5bee831d><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" data-v-5bee831d></path></svg></div><h3 class="text-lg font-semibold mt-8" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}" data-v-5bee831d>${ssrInterpolate(feature == null ? void 0 : feature.title)}</h3><p class="mt-4 text-gray-600 leading-relaxed" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}" data-v-5bee831d>${ssrInterpolate(feature == null ? void 0 : feature.description)}</p></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center my-8" data-v-5bee831d>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("calendly"),
        as: "button",
        target: "_blank",
        class: "px-6 py-3 rounded-lg bg-green-500 text-white text-lg font-semibold hover:bg-green-600 transition duration-300 ease-in-out",
        style: {
          backgroundColor: __props.settings.secondary_color,
          color: __props.settings.main_color
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center" data-v-5bee831d${_scopeId}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24" data-v-5bee831d${_scopeId}><path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd" data-v-5bee831d${_scopeId}></path></svg><span data-v-5bee831d${_scopeId}>Get in touch</span></span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-6 h-6 text-gray-800 dark:text-white",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "white",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z",
                    "clip-rule": "evenodd"
                  })
                ])),
                createVNode("span", null, "Get in touch")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Features.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Features = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5bee831d"]]);
const _sfc_main$3 = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    settings: Object,
    // Contains dynamic colors (main_color, secondary_color, bg_color, main_font_color, secondary_font_color)
    hero: Object
    // Contains hero content (image, header, description)
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
      const _component_Link = resolveComponent("Link");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home-section",
        class: "relative h-screen bg-cover bg-center",
        style: sharedBackgroundStyle
      }, _attrs))}><div class="container mx-auto h-full flex flex-col items-center justify-center px-4 text-center relative"><h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight" style="${ssrRenderStyle({ color: __props.settings.main_color })}">${ssrInterpolate(__props.hero.content.header)}</h1><p class="mt-4 text-lg md:text-xl text-white lg:text-2xl max-w-2xl mx-auto leading-relaxed" style="${ssrRenderStyle({ color: __props.settings.main_color })}">${ssrInterpolate(__props.hero.content.description)}</p><div class="mt-8">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("plans"),
        class: "inline-block px-6 py-3 text-white rounded-full font-semibold text-lg hover:opacity-90 transition duration-300 shadow-md",
        style: {
          backgroundColor: __props.settings.secondary_color,
          color: __props.settings.main_color
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pricing `);
          } else {
            return [
              createTextVNode(" Pricing ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Pricing",
  __ssrInlineRender: true,
  props: {
    prices: Array,
    // Array of pricing objects with title, description, price, per, and features
    settings: Object,
    // Contains colors (bg_color, main_color, secondary_color, main_font_color, secondary_font_color)
    plans: Object,
    hero: Object
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
        _push(`<div class="flex flex-col p-6 mx-auto w-80 text-center rounded-xl border shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 h-full" style="${ssrRenderStyle({
          backgroundColor: __props.settings.main_color,
          borderColor: __props.settings.secondary_color,
          borderWidth: "2px",
          position: "relative"
        })}"><h3 class="mb-4 text-2xl font-semibold text-white" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}">${ssrInterpolate(price.name)}</h3><p class="font-light sm:text-lg text-gray-300" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}">${ssrInterpolate(price.description)}</p><div class="flex justify-center items-baseline my-8"><span class="mr-2 text-5xl font-extrabold text-white" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}">${ssrInterpolate(price.price)}$ </span><span class="text-gray-300" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}"> / hour </span></div><ul role="list" class="mb-8 space-y-4 text-left flex-grow text-gray-300" style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}"><li class="flex items-center space-x-3"><svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ color: __props.settings.main_color })}"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span>${ssrInterpolate(price.employees_count)} Employees</span></li><!--[-->`);
        ssrRenderList(price.features, (feature, index) => {
          _push(`<li class="flex items-center space-x-3"><svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ color: __props.settings.main_color })}"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul><div class="flex items-center justify-between mb-6"><label for="quantity" class="text-gray-800 font-medium"> Quantity </label><input id="quantity" type="number" class="w-20 p-2 text-center rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"${ssrRenderAttr("value", price.quantity)} min="1"></div><button class="text-white font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-300 ease-in-out transform hover:bg-opacity-90" style="${ssrRenderStyle({
          backgroundColor: __props.settings.secondary_color,
          color: __props.settings.main_color
        })}"> Subscribe </button></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pricing.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Program",
  __ssrInlineRender: true,
  props: {
    Affiliate_Program: Object,
    // Contains the content data
    settings: Object
    // Contains dynamic settings for colors
  },
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      phone: ""
    });
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
        class: "py-16 bg-white",
        style: sharedBackgroundStyle
      }, _attrs))} data-v-3729b662><div class="container mx-auto max-w-6xl text-center space-y-12 z-20" data-v-3729b662><h2 class="text-3xl font-bold" style="${ssrRenderStyle({ color: __props.settings.main_color })}" data-v-3729b662>${ssrInterpolate(__props.Affiliate_Program.content.header)}</h2><p class="text-xl max-w-2xl mx-auto" style="${ssrRenderStyle({ color: __props.settings.main_color })}" data-v-3729b662>${ssrInterpolate(__props.Affiliate_Program.content.sub_header)}</p><div class="grid lg:grid-cols-2 gap-12" data-v-3729b662><div class="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 max-h-[500px] hover:scale-105" data-v-3729b662><img${ssrRenderAttr("src", `/storage/${__props.Affiliate_Program.content.image}`)} alt="Affiliate Program Image" class="w-full h-full object-cover" data-v-3729b662></div><div class="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between space-y-6" data-v-3729b662><h3 class="text-2xl font-semibold" style="${ssrRenderStyle({ color: __props.settings.main_font_color })}" data-v-3729b662>${ssrInterpolate(__props.Affiliate_Program.content.third_header)}</h3><p style="${ssrRenderStyle({ color: __props.settings.secondary_font_color })}" data-v-3729b662>${ssrInterpolate(__props.Affiliate_Program.content.description)}</p><form class="space-y-4" data-v-3729b662><input type="text"${ssrRenderAttr("value", unref(form).name)} class="w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:outline-none" placeholder="Name" style="${ssrRenderStyle({
        borderColor: __props.settings.secondary_color,
        color: __props.settings.secondary_font_color
      })}" data-v-3729b662><input type="email"${ssrRenderAttr("value", unref(form).email)} class="w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:outline-none" placeholder="Email" style="${ssrRenderStyle({
        borderColor: __props.settings.secondary_color,
        color: __props.settings.secondary_font_color
      })}" data-v-3729b662><input type="tel"${ssrRenderAttr("value", unref(form).phone)} class="w-full h-12 px-4 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:outline-none" placeholder="Phone" style="${ssrRenderStyle({
        borderColor: __props.settings.secondary_color,
        color: __props.settings.secondary_font_color
      })}" data-v-3729b662><button type="submit" class="w-full h-12 rounded-lg font-semibold transition duration-300" style="${ssrRenderStyle({
        backgroundColor: __props.settings.secondary_color,
        color: __props.settings.main_color
      })}" data-v-3729b662> Send Message </button></form></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Program.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Program = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3729b662"]]);
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: GuestLayout
}, {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    hero: Object,
    Affiliate_Program: Object,
    capabilities: Object,
    prices: Object,
    plans: Object,
    features: Object,
    settings: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        settings: __props.settings,
        hero: __props.hero
      }, null, _parent));
      _push(ssrRenderComponent(Capabilities, {
        settings: __props.settings,
        capabilities: __props.capabilities
      }, null, _parent));
      _push(ssrRenderComponent(Features, {
        settings: __props.settings,
        features: __props.features
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        settings: __props.settings,
        prices: __props.prices,
        plans: __props.plans
      }, null, _parent));
      _push(ssrRenderComponent(Program, {
        settings: __props.settings,
        Affiliate_Program: __props.Affiliate_Program
      }, null, _parent));
      _push(ssrRenderComponent(Chat, { settings: __props.settings }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
