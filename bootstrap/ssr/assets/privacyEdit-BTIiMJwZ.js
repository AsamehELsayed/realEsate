import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import Quill from "quill";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "privacyEdit",
  __ssrInlineRender: true,
  props: {
    section: Object
  },
  setup(__props) {
    const props = __props;
    const form = ref({
      title: props.section.content.title || "",
      header: props.section.content.header || "",
      description: props.section.content.description || "",
      html_content: props.section.content.html_content || "",
      _method: "PUT"
    });
    let quill;
    onMounted(() => {
      quill = new Quill("#html_content_editor", {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline"],
            ["link"],
            [{ align: [] }],
            ["image"]
          ]
        }
      });
      quill.root.innerHTML = form.value.html_content;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-6" }, _attrs))} data-v-21daea7c><h1 class="text-3xl font-semibold mb-6" data-v-21daea7c>Edit Privacy Policy</h1><form data-v-21daea7c><div class="mb-4" data-v-21daea7c><label for="title" class="block text-sm font-medium text-gray-700" data-v-21daea7c>Title</label><input${ssrRenderAttr("value", form.value.title)} type="text" id="title" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter the title" data-v-21daea7c></div><div class="mb-4" data-v-21daea7c><label for="header" class="block text-sm font-medium text-gray-700" data-v-21daea7c>Header</label><input${ssrRenderAttr("value", form.value.header)} type="text" id="header" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter the header" data-v-21daea7c></div><div class="mb-4" data-v-21daea7c><label for="description" class="block text-sm font-medium text-gray-700" data-v-21daea7c>Description</label><textarea id="description" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" rows="3" placeholder="Enter the description" data-v-21daea7c>${ssrInterpolate(form.value.description)}</textarea></div><div class="mb-6" data-v-21daea7c><label for="html_content" class="block text-sm font-medium text-gray-700" data-v-21daea7c>HTML Content</label><div id="html_content_editor" class="border border-gray-300 rounded-md min-h-[300px]" data-v-21daea7c></div></div><button type="submit" class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-21daea7c> Save </button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Sections/privacyEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacyEdit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21daea7c"]]);
export {
  privacyEdit as default
};
