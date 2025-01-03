import { _ as __nuxt_component_0 } from './nuxt-link-BXxPlIRz.mjs';
import Cookies from 'js-cookie';
import { withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      isDropdownOpen: false,
      isSidebarOpen: false
    };
  },
  computed: {
    isScanPage() {
      return this.$route.path === "/admin/scan";
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      (void 0).body.style.overflow = this.isSidebarOpen ? "hidden" : "auto";
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      Cookies.remove("token");
      this.$router.push("/login");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<!--[-->`);
  if (!$options.isScanPage) {
    _push(`<header class="fixed top-0 left-0 w-full z-10 bg-white"><nav><div class="grid grid-flow-col gap-4 p-4"><div class="flex justify-end"><span class="inline-block size-10 overflow-hidden rounded-full bg-white border border-black"><svg class="size-full text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></span></div></div></nav></header>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex h-full">`);
  if (!$options.isScanPage) {
    _push(`<aside class="${ssrRenderClass([
      $data.isSidebarOpen ? "translate-x-0" : "-translate-x-full",
      "fixed z-30 w-60 h-full bg-gray-800 text-white transition-transform xl:translate-x-0"
    ])}" "><div class="p-5 h-14"><button class="text-xl focus:outline-none xl:hidden" aria-label="Toggle Sidebar"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button><div class="text-xl flex justify-center text-white ml-10 md:block"> Logo </div></div><nav class="p-4 h-5/6"><ul class="space-y-4"><li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/admin/homepage",
      class: "flex items-center p-2 rounded hover:bg-gray-700 hover:text-yellow-500"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"${_scopeId}></path></svg><span class="ml-2"${_scopeId}>Home</span>`);
        } else {
          return [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-6"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              })
            ])),
            createVNode("span", { class: "ml-2" }, "Home")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/admin/employee",
      class: "flex items-center p-2 rounded hover:bg-gray-700 hover:text-yellow-500"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"${_scopeId}></path></svg><span class="ml-2"${_scopeId}>Employee</span>`);
        } else {
          return [
            (openBlock(), createBlock("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-6"
            }, [
              createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              })
            ])),
            createVNode("span", { class: "ml-2" }, "Employee")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li><div class="flex items-center p-2 rounded hover:bg-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg><button type="button" class="ml-2">Product</button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-12"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg></div>`);
    if ($data.isDropdownOpen) {
      _push(`<ul class="py-2 space-y-2"><li><a href="/admin/product" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-yellow-500"> Products </a></li><li><a href="/admin/addproduct" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-yellow-500"> Add Product </a></li><li><a href="/admin/genbarcode" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-yellow-500"> Print Barcode/QR </a></li></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li></ul></nav><footer class="p-5"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"></path></svg><span class="ml-2">Logout</span></div></footer></aside>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<main <div class="${ssrRenderClass([
    !$options.isScanPage ? "block xl:ml-64 mt-20 mb-20" : "block",
    !$options.isScanPage ? "flex-1" : "w-full"
  ])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  if (!$options.isScanPage) {
    _push(`<footer class="fixed bottom-0 left-0 w-full bg-white shadow-lg z-10 flex items-center justify-between px-4 py-2 xl:hidden">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/admin/homepage" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex flex-col items-center text-gray-500"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"${_scopeId}></path></svg><span class="text-xs"${_scopeId}>Home</span></div>`);
        } else {
          return [
            createVNode("div", { class: "flex flex-col items-center text-gray-500" }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-6"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                })
              ])),
              createVNode("span", { class: "text-xs" }, "Home")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/admin/product" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex flex-col items-center text-gray-500"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"${_scopeId}></path></svg><span class="text-xs"${_scopeId}>Product</span></div>`);
        } else {
          return [
            createVNode("div", { class: "flex flex-col items-center text-gray-500" }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-6"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                })
              ])),
              createVNode("span", { class: "text-xs" }, "Product")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/admin/scan" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="relative flex justify-center"${_scopeId}><button class="bg-black rounded-full w-16 h-16 flex items-center justify-center text-white absolute -top-10 shadow-md border-4 border-white"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128" id="QrCode"${_scopeId}><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M102 83L102 97C102 99.7614 99.7614 102 97 102L83 102M102 45L102 31C102 28.2386 99.7614 26 97 26L83 26M45 102L31 102C28.2386 102 26 99.7614 26 97L26 83M26 45L26 31C26 28.2386 28.2386 26 31 26L45 26" class="colorStroke000000 svgStroke"${_scopeId}></path><path stroke="#ffffff" stroke-linecap="round" stroke-width="5" d="M21 64H107" class="colorStroke000000 svgStroke"${_scopeId}></path></svg></button></div>`);
        } else {
          return [
            createVNode("div", { class: "relative flex justify-center" }, [
              createVNode("button", { class: "bg-black rounded-full w-16 h-16 flex items-center justify-center text-white absolute -top-10 shadow-md border-4 border-white" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 128 128",
                  id: "QrCode"
                }, [
                  createVNode("path", {
                    stroke: "#ffffff",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "5",
                    d: "M102 83L102 97C102 99.7614 99.7614 102 97 102L83 102M102 45L102 31C102 28.2386 99.7614 26 97 26L83 26M45 102L31 102C28.2386 102 26 99.7614 26 97L26 83M26 45L26 31C26 28.2386 28.2386 26 31 26L45 26",
                    class: "colorStroke000000 svgStroke"
                  }),
                  createVNode("path", {
                    stroke: "#ffffff",
                    "stroke-linecap": "round",
                    "stroke-width": "5",
                    d: "M21 64H107",
                    class: "colorStroke000000 svgStroke"
                  })
                ]))
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/admin/employee" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex flex-col items-center text-gray-500"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"${_scopeId}></path></svg><span class="text-xs"${_scopeId}>Employee</span></div>`);
        } else {
          return [
            createVNode("div", { class: "flex flex-col items-center text-gray-500" }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-6"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                })
              ])),
              createVNode("span", { class: "text-xs" }, "Employee")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</footer>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CQI3JXrN.mjs.map
