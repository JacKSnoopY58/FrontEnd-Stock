import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
      currentPage: 1,
      perPage: 5,
      history: [],
      mockData: [
        {
          p_id: "P5223643",
          pname: "Pentel \u0E14\u0E34\u0E19\u0E2A\u0E2D\u0E01\u0E14 \u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E19\u0E40\u0E17\u0E25 \u0E14\u0E49\u0E32\u0E21\u0E42\u0E25\u0E2B\u0E30 0.5mm SS465",
          p_type: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19",
          quantity: "20",
          status: "\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32",
          date: "18/12/2567 22:26",
          employee: "Admin"
        },
        {
          p_id: "P5223643",
          pname: "Pentel \u0E14\u0E34\u0E19\u0E2A\u0E2D\u0E01\u0E14 \u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E19\u0E40\u0E17\u0E25 \u0E14\u0E49\u0E32\u0E21\u0E42\u0E25\u0E2B\u0E30 0.5mm SS465",
          p_type: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19",
          quantity: "20",
          status: "\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32",
          date: "18/12/2567 22:26",
          employee: "Admin"
        },
        {
          p_id: "P5223643",
          pname: "Pentel \u0E14\u0E34\u0E19\u0E2A\u0E2D\u0E01\u0E14 \u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E19\u0E40\u0E17\u0E25 \u0E14\u0E49\u0E32\u0E21\u0E42\u0E25\u0E2B\u0E30 0.5mm SS465",
          p_type: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19",
          quantity: "20",
          status: "\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32",
          date: "18/12/2567 22:26",
          employee: "Admin"
        },
        {
          p_id: "P5223643",
          pname: "Pentel \u0E14\u0E34\u0E19\u0E2A\u0E2D\u0E01\u0E14 \u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E19\u0E40\u0E17\u0E25 \u0E14\u0E49\u0E32\u0E21\u0E42\u0E25\u0E2B\u0E30 0.5mm SS465",
          p_type: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19",
          quantity: "20",
          status: "\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32",
          date: "18/12/2567 22:26",
          employee: "Admin"
        },
        {
          p_id: "P5223643",
          pname: "Pentel \u0E14\u0E34\u0E19\u0E2A\u0E2D\u0E01\u0E14 \u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E19\u0E40\u0E17\u0E25 \u0E14\u0E49\u0E32\u0E21\u0E42\u0E25\u0E2B\u0E30 0.5mm SS465",
          p_type: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19",
          quantity: "20",
          status: "\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32",
          date: "18/12/2567 22:26",
          employee: "Admin"
        },
        {
          p_id: "P5223643",
          pname: "Pentel \u0E14\u0E34\u0E19\u0E2A\u0E2D\u0E01\u0E14 \u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E19\u0E40\u0E17\u0E25 \u0E14\u0E49\u0E32\u0E21\u0E42\u0E25\u0E2B\u0E30 0.5mm SS465",
          p_type: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19",
          quantity: "20",
          status: "\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32",
          date: "18/12/2567 22:26",
          employee: "Admin"
        },
        {
          p_id: "P5223643",
          pname: "Pentel \u0E14\u0E34\u0E19\u0E2A\u0E2D\u0E01\u0E14 \u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E19\u0E40\u0E17\u0E25 \u0E14\u0E49\u0E32\u0E21\u0E42\u0E25\u0E2B\u0E30 0.5mm SS465",
          p_type: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19",
          quantity: "20",
          status: "\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32",
          date: "18/12/2567 22:26",
          employee: "Admin"
        }
      ],
      useApiData: false
    };
  },
  // computed: {
  //   paginatedHistory() {
  //     const start = (this.currentPage - 1) * this.perPage;
  //     const end = this.currentPage * this.perPage;
  //     return this.history.slice(start, end);
  //   },
  //   totalPages() {
  //     return Math.ceil(this.history.length / this.perPage);
  //   },
  //   startIndex() {
  //     return (this.currentPage - 1) * this.perPage;
  //   },
  //   endIndex() {
  //     return Math.min(this.startIndex + this.perPage, this.history.length);
  //   },
  //   pages() {
  //     return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  //   },
  // },
  methods: {
    async fetchPeopleFromApi() {
      try {
        const response = await this.$axios.get("/api/history");
        this.history = response.data;
      } catch (error) {
        console.error("Failed to fetch data from API", error);
      }
    }
    // goToPage(page) {
    //   if (page >= 1 && page <= this.totalPages) {
    //     this.currentPage = page;
    //   }
    // },
  },
  mounted() {
    if (this.useApiData) {
      this.fetchPeopleFromApi();
    } else {
      this.history = this.mockData;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="rounded-xl px-5 w-screen sm:w-full"><div class="bg-gray-500 p-5 rounded"><div class="bg-white p-2">\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E25\u0E07\u0E04\u0E25\u0E31\u0E07</div><div class="mt-5"><div class="overflow-auto h-[250px]"><table class="min-w-full table-auto"><thead><tr class="divide-x divide-gray-700 bg-black text-white"><th class="text-left text-xs px-3 py-2.5">\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th><th class="text-left text-xs px-3">\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th><th class="text-left text-xs px-3">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th><th class="text-left text-xs px-3">\u0E08\u0E33\u0E19\u0E27\u0E19</th><th class="text-left text-xs px-3">\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48-\u0E40\u0E27\u0E25\u0E32</th><th class="text-left text-xs px-3">\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A</th></tr></thead><tbody class="divide-y divide-gray-700"><!--[-->`);
  ssrRenderList($data.mockData, (history) => {
    _push(`<tr class="divide-x divide-gray-700 bg-zinc-800 text-white"><td class="px-3 py-1.5 text-xs">${ssrInterpolate(history.p_id)}</td><td class="px-3 truncate max-w-[200px] text-xs">${ssrInterpolate(history.pname)}</td><td class="whitespace-pre px-3 text-xs">${ssrInterpolate(history.p_type)}</td><td class="px-3 text-xs">${ssrInterpolate(history.quantity)}</td><td class="px-3 text-xs">${ssrInterpolate(history.date)}</td><td class="px-3 text-xs">${ssrInterpolate(history.employee)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div><div class="bg-gray-500 p-5 rounded mt-5"><div class="bg-white p-2">\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E25\u0E07\u0E04\u0E25\u0E31\u0E07</div><div class="mt-5"><div class="overflow-auto h-[250px]"><table class="min-w-full table-auto"><thead><tr class="divide-x divide-gray-700 bg-black text-white"><th class="text-left text-xs px-3 py-2.5">\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th><th class="text-left text-xs px-3">\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th><th class="text-left text-xs px-3">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th><th class="text-left text-xs px-3">\u0E08\u0E33\u0E19\u0E27\u0E19</th><th class="text-left text-xs px-3">\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48-\u0E40\u0E27\u0E25\u0E32</th><th class="text-left text-xs px-3">\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A</th></tr></thead><tbody class="divide-y divide-gray-700"><!--[-->`);
  ssrRenderList($data.mockData, (history) => {
    _push(`<tr class="divide-x divide-gray-700 bg-zinc-800 text-white"><td class="px-3 py-1.5 text-xs">${ssrInterpolate(history.p_id)}</td><td class="px-3 truncate max-w-[200px] text-xs">${ssrInterpolate(history.pname)}</td><td class="whitespace-pre px-3 text-xs">${ssrInterpolate(history.p_type)}</td><td class="px-3 text-xs">${ssrInterpolate(history.quantity)}</td><td class="px-3 text-xs">${ssrInterpolate(history.date)}</td><td class="px-3 text-xs">${ssrInterpolate(history.employee)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/admin/homepage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homepage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { homepage as default };
//# sourceMappingURL=homepage-CQFjct7r.mjs.map
