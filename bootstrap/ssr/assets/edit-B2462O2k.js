import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-D4xI5_xC.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "edit",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.user.name,
      email: props.user.email,
      phone: props.user.phone,
      current_password: "",
      password: "",
      password_confirmation: "",
      image: null,
      _method: "PUT"
    });
    const profilePictureUrl = ref(props.user.image || "https://i.pravatar.cc/300");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-std mb-10 w-full rounded-2xl bg-white p-10 font-normal leading-relaxed text-gray-900 shadow-xl" }, _attrs))} data-v-234b1620><div class="flex flex-col" data-v-234b1620><div class="flex flex-col md:flex-row justify-between mb-5 items-start" data-v-234b1620><h2 class="mb-5 text-4xl font-bold text-blue-900" data-v-234b1620>Update Profile</h2><div class="text-center" data-v-234b1620><div data-v-234b1620><img${ssrRenderAttr("src", profilePictureUrl.value)} alt="Profile Picture" class="rounded-full w-32 h-32 mx-auto border-4 border-indigo-800 mb-4 transition-transform duration-300 hover:scale-105 ring ring-gray-300" data-v-234b1620><input type="file" id="upload_profile" hidden data-v-234b1620><label for="upload_profile" class="inline-flex items-center" data-v-234b1620><svg data-slot="icon" class="w-5 h-5 text-blue-700" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-234b1620><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" data-v-234b1620></path><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" data-v-234b1620></path></svg></label></div><button class="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-indigo-900 transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300" data-v-234b1620> Change Profile Picture </button></div></div><form class="space-y-4" data-v-234b1620><div data-v-234b1620><label for="name" class="block text-sm font-medium text-gray-700" data-v-234b1620>Name</label><input${ssrRenderAttr("value", unref(form).name)} type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" data-v-234b1620>`);
      if (unref(form).errors.name) {
        _push(`<p class="text-red-500 text-xs mt-1" data-v-234b1620>${ssrInterpolate(unref(form).errors.name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-234b1620><label for="email" class="block text-sm font-medium text-gray-700" data-v-234b1620>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" data-v-234b1620>`);
      if (unref(form).errors.email) {
        _push(`<p class="text-red-500 text-xs mt-1" data-v-234b1620>${ssrInterpolate(unref(form).errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-234b1620><label for="phone" class="block text-sm font-medium text-gray-700" data-v-234b1620>Phone</label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" id="phone" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" data-v-234b1620>`);
      if (unref(form).errors.phone) {
        _push(`<p class="text-red-500 text-xs mt-1" data-v-234b1620>${ssrInterpolate(unref(form).errors.phone)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-234b1620><label for="password" class="block text-sm font-medium text-gray-700" data-v-234b1620>New Password</label><input${ssrRenderAttr("value", unref(form).password)} type="password" id="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" data-v-234b1620>`);
      if (unref(form).errors.password) {
        _push(`<p class="text-red-500 text-xs mt-1" data-v-234b1620>${ssrInterpolate(unref(form).errors.password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-234b1620><label for="password_confirmation" class="block text-sm font-medium text-gray-700" data-v-234b1620>Confirm New Password</label><input${ssrRenderAttr("value", unref(form).password_confirmation)} type="password" id="password_confirmation" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" data-v-234b1620>`);
      if (unref(form).errors.password_confirmation) {
        _push(`<p class="text-red-500 text-xs mt-1" data-v-234b1620>${ssrInterpolate(unref(form).errors.password_confirmation)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-end space-x-4" data-v-234b1620><button type="submit" class="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700" data-v-234b1620>Save Changes</button></div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/User/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-234b1620"]]);
export {
  edit as default
};
