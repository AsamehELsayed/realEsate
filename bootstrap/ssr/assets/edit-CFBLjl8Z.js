import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "edit",
  __ssrInlineRender: true,
  props: {
    settings: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      website_name: props.settings.website_name || "",
      main_color: props.settings.main_color || "#ffffff",
      secondary_color: props.settings.secondary_color || "#ffffff",
      bg_color: props.settings.bg_color || "#ffffff",
      main_font_color: props.settings.main_font_color || "#000000",
      secondary_font_color: props.settings.secondary_font_color || "#555555",
      logo: null,
      main_bg_image: null,
      facebook: props.settings.facebook || "",
      linkedin: props.settings.linkedin || "",
      email: props.settings.email || "",
      phone: props.settings.phone || "",
      footer_text: props.settings.footer_text || "",
      footer_description: props.settings.footer_description || ""
    });
    const previewlogo = computed(() => {
      if (form.logo instanceof File) {
        return URL.createObjectURL(form.logo);
      }
      if (typeof form.logo === "string" && form.logo) {
        return `/storage/${form.logo}`;
      }
      return props.settings.logo ? `/storage/${props.settings.logo}` : null;
    });
    const previewbg = computed(() => {
      if (form.main_bg_image instanceof File) {
        return URL.createObjectURL(form.main_bg_image);
      }
      if (typeof form.main_bg_image === "string" && form.main_bg_image) {
        return `/storage/${form.main_bg_image}`;
      }
      return props.settings.main_bg_image ? `/storage/${props.settings.main_bg_image}` : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6" }, _attrs))} data-v-50fd6536><div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg" data-v-50fd6536><h1 class="text-2xl font-semibold text-gray-800 mb-6" data-v-50fd6536>Settings</h1><form data-v-50fd6536><div class="mb-4" data-v-50fd6536><label for="website_name" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Website Name</label><input${ssrRenderAttr("value", unref(form).website_name)} id="website_name" type="text" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536></div><div class="grid grid-cols-3 gap-4" data-v-50fd6536><div class="mb-4" data-v-50fd6536><label for="main_color" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Main Color</label><div class="mt-1 flex items-center" data-v-50fd6536><input${ssrRenderAttr("value", unref(form).main_color)} id="main_color" type="color" class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536><span class="ml-2 text-sm text-gray-700" data-v-50fd6536>${ssrInterpolate(unref(form).main_color)}</span></div></div><div class="mb-4" data-v-50fd6536><label for="secondary_color" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Secondary Color</label><div class="mt-1 flex items-center" data-v-50fd6536><input${ssrRenderAttr("value", unref(form).secondary_color)} id="secondary_color" type="color" class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536><span class="ml-2 text-sm text-gray-700" data-v-50fd6536>${ssrInterpolate(unref(form).secondary_color)}</span></div></div><div class="mb-4" data-v-50fd6536><label for="bg_color" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Background Color</label><div class="mt-1 flex items-center" data-v-50fd6536><input${ssrRenderAttr("value", unref(form).bg_color)} id="bg_color" type="color" class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536><span class="ml-2 text-sm text-gray-700" data-v-50fd6536>${ssrInterpolate(unref(form).bg_color)}</span></div></div><div class="mb-4" data-v-50fd6536><label for="main_font_color" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Main Font Color</label><div class="mt-1 flex items-center" data-v-50fd6536><input${ssrRenderAttr("value", unref(form).main_font_color)} id="main_font_color" type="color" class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536><span class="ml-2 text-sm text-gray-700" data-v-50fd6536>${ssrInterpolate(unref(form).main_font_color)}</span></div></div><div class="mb-4" data-v-50fd6536><label for="secondary_font_color" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Secondary Font Color</label><div class="mt-1 flex items-center" data-v-50fd6536><input${ssrRenderAttr("value", unref(form).secondary_font_color)} id="secondary_font_color" type="color" class="w-10 h-10 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536><span class="ml-2 text-sm text-gray-700" data-v-50fd6536>${ssrInterpolate(unref(form).secondary_font_color)}</span></div></div></div><div class="space-y-4" data-v-50fd6536><input id="logo" type="file" accept="logo/*" class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" data-v-50fd6536>`);
      if (unref(form).progress) {
        _push(`<div class="relative w-full h-2 bg-gray-200 rounded-md" data-v-50fd6536><div class="absolute top-0 left-0 h-2 bg-blue-500 rounded-md" style="${ssrRenderStyle({ width: `${unref(form).progress.percentage}%` })}" data-v-50fd6536></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).progress) {
        _push(`<p class="text-sm text-gray-500" data-v-50fd6536>${ssrInterpolate(unref(form).progress.percentage)}% </p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).errors.logo) {
        _push(`<p class="text-sm text-red-500" data-v-50fd6536>${ssrInterpolate(unref(form).errors.logo)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-4 w-full flex justify-center" data-v-50fd6536><img${ssrRenderAttr("src", previewlogo.value)} alt="Preview logo" class="w-96 h-96 rounded-md shadow-md object-cover border border-gray-300" data-v-50fd6536></div></div><div class="space-y-4" data-v-50fd6536><input id="image" type="file" accept="logo/*" class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" data-v-50fd6536>`);
      if (unref(form).progress) {
        _push(`<div class="relative w-full h-2 bg-gray-200 rounded-md" data-v-50fd6536><div class="absolute top-0 left-0 h-2 bg-blue-500 rounded-md" style="${ssrRenderStyle({ width: `${unref(form).progress.percentage}%` })}" data-v-50fd6536></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).progress) {
        _push(`<p class="text-sm text-gray-500" data-v-50fd6536>${ssrInterpolate(unref(form).progress.percentage)}% </p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).errors.logo) {
        _push(`<p class="text-sm text-red-500" data-v-50fd6536>${ssrInterpolate(unref(form).errors.main_bg_image)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-4 w-full flex justify-center" data-v-50fd6536><img${ssrRenderAttr("src", previewbg.value)} alt="Preview logo" class="w-96 h-96 rounded-md shadow-md object-cover border border-gray-300" data-v-50fd6536></div></div><div class="mb-4" data-v-50fd6536><label for="facebook" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Facebook URL</label><input${ssrRenderAttr("value", unref(form).facebook)} id="facebook" type="url" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536></div><div class="mb-4" data-v-50fd6536><label for="linkedin" class="block text-sm font-medium text-gray-700" data-v-50fd6536>LinkedIn URL</label><input${ssrRenderAttr("value", unref(form).linkedin)} id="linkedin" type="url" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536></div><div class="mb-4" data-v-50fd6536><label for="email" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Email</label><input${ssrRenderAttr("value", unref(form).email)} id="email" type="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536></div><div class="mb-4" data-v-50fd6536><label for="phone" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Phone Number</label><input${ssrRenderAttr("value", unref(form).phone)} id="phone" type="text" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536></div><div class="mb-4" data-v-50fd6536><label for="footer-text" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Footer Text</label><input${ssrRenderAttr("value", unref(form).footer_text)} id="footer-text" type="text" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536></div><div class="mb-4" data-v-50fd6536><label for="footer-link" class="block text-sm font-medium text-gray-700" data-v-50fd6536>Footer Link</label><textarea id="footer-link" type="url" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536>${ssrInterpolate(unref(form).footer_description)}</textarea></div><button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-50fd6536>Save Settings</button></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/settings/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50fd6536"]]);
export {
  edit as default
};
