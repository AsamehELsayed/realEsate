import { ref, computed, onMounted, watch, onBeforeUnmount, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./InputError-D7Pvlg8p.js";
import "sweetalert2";
import { initFlowbite } from "flowbite";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  props: ["settings"],
  setup(__props) {
    const props = __props;
    const scrolled = ref(false);
    const sharedBackgroundStyle = {
      backgroundImage: `url('/storage/${props.settings.main_bg_image}')`,
      backgroundColor: props.settings.bg_color,
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    };
    const headerBackgroundColor = computed(() => scrolled.value ? props.settings.main_color : "transparent");
    const headerTextColor = computed(() => props.settings.secondary_color);
    const linkTextColor = computed(() => scrolled.value ? props.settings.secondary_color : "white");
    const headerClass = computed(() => "transition-all duration-300 ease-in-out");
    const textClass = computed(() => "font-semibold");
    const form = useForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const isMenuOpen = ref(false);
    const isLargeOrMediumScreen = ref(false);
    const checkScreenSize = () => {
      isLargeOrMediumScreen.value = window.innerWidth >= 768;
    };
    const handleScroll = () => {
      scrolled.value = window.scrollY > 50;
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      initFlowbite();
    });
    watch(isLargeOrMediumScreen, (newValue) => {
      if (newValue) {
        isMenuOpen.value = false;
      }
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="${ssrRenderClass([[headerClass.value, textClass.value], "transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50"])}" style="${ssrRenderStyle({ backgroundColor: headerBackgroundColor.value, color: headerTextColor.value })}" data-v-04d8e9da><div class="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8" data-v-04d8e9da><h1 class="text-2xl lg:text-3xl font-bold transition duration-300" data-v-04d8e9da><img${ssrRenderAttr("src", `/storage/${__props.settings.logo}`)} alt="Logo" class="h-8 sm:h-10 lg:h-20 max-w-full" data-v-04d8e9da></h1><nav class="hidden xl:flex space-x-8 text-lg" data-v-04d8e9da>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: ["font-bold text-2xl", _ctx.linkClass],
        style: { color: linkTextColor.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("plans"),
        class: ["font-bold text-2xl", _ctx.linkClass],
        style: { color: linkTextColor.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("calendly"),
        class: ["font-bold text-2xl", _ctx.linkClass],
        style: { color: linkTextColor.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Book a Meeting`);
          } else {
            return [
              createTextVNode("Book a Meeting")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact-us"),
        class: ["font-bold text-2xl", _ctx.linkClass],
        style: { color: linkTextColor.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><button class="xl:hidden text-gray-700 text-3xl hover:text-blue-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-controls="mobile-menu"${ssrRenderAttr("aria-expanded", isMenuOpen.value.toString())} data-v-04d8e9da><span class="sr-only" data-v-04d8e9da>Toggle navigation</span> ☰ </button></div></header><div id="mobile-menu" class="${ssrRenderClass(["xl:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-90 text-white transform transition-transform", isMenuOpen.value ? "translate-y-0 lg:hidden" : "-translate-y-full"])}" data-v-04d8e9da><div class="flex flex-col items-center justify-center space-y-6 py-12" data-v-04d8e9da>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: ["font-bold text-lg hover:text-blue-500 transition-all", _ctx.linkClass],
        style: { color: linkTextColor.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("plans"),
        class: ["font-bold text-lg hover:text-blue-500 transition-all", _ctx.linkClass],
        style: { color: linkTextColor.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("calendly"),
        class: ["font-bold text-lg hover:text-blue-500 transition-all", _ctx.linkClass],
        style: { color: linkTextColor.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Book a Meeting`);
          } else {
            return [
              createTextVNode("Book a Meeting")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact-us"),
        class: ["font-bold text-lg hover:text-blue-500 transition-all", _ctx.linkClass],
        style: { color: linkTextColor.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Us`);
          } else {
            return [
              createTextVNode("Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><main data-v-04d8e9da>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="py-16 relative z-0" style="${ssrRenderStyle(sharedBackgroundStyle)}" data-v-04d8e9da><div class="bg-gray-800 opacity-50 blur-lg inset-0 absolute top-0 left-0 -z-10" data-v-04d8e9da></div><div class="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 z-20" data-v-04d8e9da><div class="space-y-8" data-v-04d8e9da><div data-v-04d8e9da><h3 class="text-lg font-semibold mb-2 text-white" data-v-04d8e9da>Email</h3><div class="flex items-center space-x-4" data-v-04d8e9da><div class="bg-gray-800 shadow-lg h-12 w-12 flex items-center justify-center rounded-full transition-all transform hover:scale-105" data-v-04d8e9da><svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-v-04d8e9da><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" data-v-04d8e9da></path></svg></div><a${ssrRenderAttr("href", `mailto:${__props.settings.email}`)} class="hover:underline hover:text-blue-500 text-white" data-v-04d8e9da>${ssrInterpolate(__props.settings.email)}</a></div></div><div data-v-04d8e9da><h2 class="text-2xl font-bold mb-6 text-white" data-v-04d8e9da>Follow Us</h2><div class="flex space-x-4" data-v-04d8e9da>`);
      if (__props.settings.linkedin) {
        _push(`<a${ssrRenderAttr("href", __props.settings.linkedin)} target="_blank" class="bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-500 transition-transform transform hover:scale-110" data-v-04d8e9da><svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-v-04d8e9da><path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" data-v-04d8e9da></path><path d="M7.2 8.809H4V19.5h3.2V8.809Z" data-v-04d8e9da></path></svg></a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.settings.facebook) {
        _push(`<a${ssrRenderAttr("href", __props.settings.facebook)} target="_blank" class="bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-500 transition-transform transform hover:scale-110" data-v-04d8e9da><svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" data-v-04d8e9da><path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" data-v-04d8e9da></path></svg></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div data-v-04d8e9da><h3 class="text-lg font-semibold mb-2 text-white" data-v-04d8e9da>Developed By</h3><p class="text-white" data-v-04d8e9da> Designed and developed by <a href="https://www.linkedin.com/in/abdelrahman-sameh-8931a41b2/" target="_blank" class="hover:underline text-blue-500" data-v-04d8e9da>Abdelrahman Sameh</a>. </p></div></div><div class="lg:col-span-1 flex flex-col items-start justify-center text-white" data-v-04d8e9da><h2 class="text-2xl font-bold mb-6" data-v-04d8e9da>${ssrInterpolate(__props.settings.footer_text)}</h2><p class="text-lg" data-v-04d8e9da>${ssrInterpolate(__props.settings.footer_description)}</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("privacy"),
        class: ["font-bold text-lg hover:text-blue-500 transition-all", _ctx.linkClass],
        style: { color: linkTextColor.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="lg:col-span-1 space-y-6 text-white" data-v-04d8e9da><h2 class="text-2xl font-bold mb-6" data-v-04d8e9da>Contact Us</h2><form class="space-y-4" data-v-04d8e9da><input type="text"${ssrRenderAttr("value", unref(form).name)} class="w-full h-12 px-4 text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Name" data-v-04d8e9da>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: unref(form).errors.name,
        class: "mt-2"
      }, null, _parent));
      _push(`<input type="email"${ssrRenderAttr("value", unref(form).email)} class="w-full h-12 px-4 text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Email" data-v-04d8e9da>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: unref(form).errors.email,
        class: "mt-2"
      }, null, _parent));
      _push(`<input type="text"${ssrRenderAttr("value", unref(form).subject)} class="w-full h-12 px-4 text-gray-900 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Subject" data-v-04d8e9da>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: unref(form).errors.subject,
        class: "mt-2"
      }, null, _parent));
      _push(`<textarea class="w-full h-32 px-4 rounded-lg text-gray-900 border focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Message" data-v-04d8e9da>${ssrInterpolate(unref(form).message)}</textarea>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        message: unref(form).errors.message,
        class: "mt-2"
      }, null, _parent));
      _push(`<button type="submit" class="w-full h-12 rounded-lg font-bold transition bg-blue-500 hover:bg-blue-600 focus:outline-none" data-v-04d8e9da>Send Message</button></form></div></div></footer><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GuestLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04d8e9da"]]);
export {
  GuestLayout as G
};
