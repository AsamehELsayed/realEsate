import { computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "edit",
  __ssrInlineRender: true,
  props: ["section"],
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.section.name,
      content: { ...props.section.content },
      image: null,
      // For image upload
      _method: "PUT"
    });
    const isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    const formatLabel = (key) => key.replace(/_/g, " ");
    const previewImage = computed(
      () => form.image ? URL.createObjectURL(form.image) : form.content.image ? `/storage/${form.content.image}` : ""
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3ee6bd55><h1 class="text-xl font-bold mb-6" data-v-3ee6bd55>Edit ${ssrInterpolate(__props.section.name)}</h1><form enctype="multipart/form-data" class="space-y-6 bg-white rounded-lg p-6 shadow-md" data-v-3ee6bd55><fieldset data-v-3ee6bd55><legend class="text-lg font-semibold text-gray-800" data-v-3ee6bd55>Content</legend><!--[-->`);
      ssrRenderList(unref(form).content, (value, key) => {
        _push(`<div class="mt-4" data-v-3ee6bd55><label${ssrRenderAttr("for", key)} class="block text-sm font-medium text-gray-700 capitalize" data-v-3ee6bd55>${ssrInterpolate(formatLabel(key))}</label>`);
        if (key === "image") {
          _push(`<div class="space-y-4" data-v-3ee6bd55><input id="image" type="file" accept="image/*" class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" data-v-3ee6bd55>`);
          if (unref(form).progress) {
            _push(`<div class="relative w-full h-2 bg-gray-200 rounded-md" data-v-3ee6bd55><div class="absolute top-0 left-0 h-2 bg-blue-500 rounded-md" style="${ssrRenderStyle({ width: `${unref(form).progress.percentage}%` })}" data-v-3ee6bd55></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).progress) {
            _push(`<p class="text-sm text-gray-500" data-v-3ee6bd55>${ssrInterpolate(unref(form).progress.percentage)}% </p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).errors.image) {
            _push(`<p class="text-sm text-red-500" data-v-3ee6bd55>${ssrInterpolate(unref(form).errors.image)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).content.image || unref(form).image) {
            _push(`<div class="mt-4 w-full flex justify-center" data-v-3ee6bd55><img${ssrRenderAttr("src", previewImage.value)} alt="Preview Image" class="w-96 h-96 rounded-md shadow-md object-cover border border-gray-300" data-v-3ee6bd55></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else if (isObject(value)) {
          _push(`<!--[-->`);
          ssrRenderList(value, (nestedValue, nestedKey) => {
            _push(`<div class="mt-2" data-v-3ee6bd55><label${ssrRenderAttr("for", nestedKey)} class="block text-sm font-medium text-gray-700 capitalize" data-v-3ee6bd55>${ssrInterpolate(formatLabel(nestedKey))}</label><input${ssrRenderAttr("id", nestedKey)}${ssrRenderAttr("value", unref(form).content[key][nestedKey])} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" data-v-3ee6bd55>`);
            if (unref(form).errors[`content.${key}.${nestedKey}`]) {
              _push(`<span class="text-red-500 text-sm mt-1" data-v-3ee6bd55>${ssrInterpolate(unref(form).errors[`content.${key}.${nestedKey}`])}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!--[--><input${ssrRenderAttr("id", key)}${ssrRenderAttr("value", unref(form).content[key])} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" data-v-3ee6bd55>`);
          if (unref(form).errors[`content.${key}`]) {
            _push(`<span class="text-red-500 text-sm mt-1" data-v-3ee6bd55>${ssrInterpolate(unref(form).errors[`content.${key}`])}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></fieldset><div class="flex justify-end" data-v-3ee6bd55><button type="submit" class="px-6 py-2 bg-blue-500 text-white font-bold rounded shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" data-v-3ee6bd55> Update Section </button></div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Sections/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ee6bd55"]]);
export {
  edit as default
};
