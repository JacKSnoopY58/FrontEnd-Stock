import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrLooseEqual } from 'vue/server-renderer';
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
      selectAll: false,
      currentPage: 1,
      perPage: 5,
      products: [],
      mockData: [
        {
          pname: "Pentel \u0E14\u0E34\u0E19\u0E2A\u0E2D\u0E01\u0E14 \u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E19\u0E40\u0E17\u0E25 \u0E14\u0E49\u0E32\u0E21\u0E42\u0E25\u0E2B\u0E30 0.5mm SS465",
          p_id: "P5223643",
          brand: "Pentel",
          p_type: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19",
          stock: "20",
          Description: "\u0E21\u0E32\u0E43\u0E19\u0E14\u0E49\u0E32\u0E21\u0E2A\u0E27\u0E22\u0E2B\u0E23\u0E39 \u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E27\u0E22 \u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22 \u0E08\u0E31\u0E1A\u0E16\u0E19\u0E31\u0E14\u0E21\u0E37\u0E2D \u0E14\u0E49\u0E32\u0E21\u0E2A\u0E41\u0E15\u0E19\u0E40\u0E25\u0E2A \u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E2A\u0E39\u0E07 ",
          image: "https://inwfile.com/s-fz/bukw42.jpg",
          checked: false
        },
        {
          pname: "Pentel \u0E14\u0E34\u0E19\u0E2A\u0E2D\u0E01\u0E14 \u0E40\u0E01\u0E47\u0E1A\u0E2B\u0E31\u0E27\u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E19\u0E40\u0E17\u0E25 \u0E14\u0E49\u0E32\u0E21\u0E42\u0E25\u0E2B\u0E30 0.5mm SS465",
          p_id: "P5223643",
          brand: "Pentel",
          p_type: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E02\u0E35\u0E22\u0E19",
          stock: "20",
          Description: "\u0E21\u0E32\u0E43\u0E19\u0E14\u0E49\u0E32\u0E21\u0E2A\u0E27\u0E22\u0E2B\u0E23\u0E39 \u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E27\u0E22 \u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22 \u0E08\u0E31\u0E1A\u0E16\u0E19\u0E31\u0E14\u0E21\u0E37\u0E2D \u0E14\u0E49\u0E32\u0E21\u0E2A\u0E41\u0E15\u0E19\u0E40\u0E25\u0E2A \u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E2A\u0E39\u0E07 ",
          image: "https://inwfile.com/s-fz/bukw42.jpg",
          checked: false
        }
      ],
      useApiData: false
    };
  },
  watch: {
    products: {
      handler(newProducts) {
        this.selectAll = newProducts.every((product2) => product2.checked);
      },
      deep: true
    }
  },
  computed: {
    paginatedProduct() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = this.currentPage * this.perPage;
      console.log(
        `Start: ${start}, End: ${end}, Total: ${this.products.length}`
      );
      return this.products.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.perPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.perPage;
    },
    endIndex() {
      return Math.min(this.startIndex + this.perPage, this.products.length);
    },
    pages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  },
  methods: {
    async fetchPeopleFromApi() {
      try {
        const response = await this.$axios.get("/api/products");
        this.products = response.data;
      } catch (error) {
        console.error("Failed to fetch data from API", error);
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    navigateToPage() {
      this.$router.push("/admin/addproduct");
    },
    navigateToDetail(product2) {
      this.$router.push(`/admin/productdetail/${product2.p_id}`);
    },
    toggleAll() {
      this.products.forEach((product2) => {
        product2.checked = this.selectAll;
      });
    }
  },
  async created() {
    if (this.useApiData) {
      await this.fetchPeopleFromApi();
    } else {
      this.products = this.mockData;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container max-w-full w-full p-0 lg:p-5" }, _attrs))}><div class="sm:flex sm:items-center sm:justify-between"><div class="sm:flex-auto"><h1 class="text-3xl font-semibold text-gray-900">Product</h1><p class="mt-2 text-sm text-gray-700"></p></div></div><div class="mt-5 bg-gray-300 p-5 rounded-xl"><table class="min-w-full divide-y divide-gray-300"><thead><tr class=""><th scope="col" class="text-sm font-semibold text-gray-900 sm:pl-0"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($data.selectAll) ? ssrLooseContain($data.selectAll, null) : $data.selectAll) ? " checked" : ""} class="cursor-pointer h-4 w-4"></th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"></th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"> \u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"> \u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"> \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"> \u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 </th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"></th></tr></thead><tbody class="divide-y divide-gray-300 bg-white"><!--[-->`);
  ssrRenderList($options.paginatedProduct, (products) => {
    _push(`<tr class="cursor-pointer hover:bg-gray-100"><td class="text-center w-10"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(products.checked) ? ssrLooseContain(products.checked, null) : products.checked) ? " checked" : ""} class="cursor-pointer h-4 w-4"></td><td class="py-2 px-5 w-28"><img${ssrRenderAttr("src", products.image)} class="w-16 border"></td><td class="">${ssrInterpolate(products.pname)}</td><td>${ssrInterpolate(products.p_id)}</td><td>${ssrInterpolate(products.p_type)}</td><td>${ssrInterpolate(products.stock)}</td><td class="flex relative whitespace-nowrap py-5 text-sm font-medium sm:pr-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div><div class="flex justify-between items-center mt-4 bg-white p-3"><div> \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ${ssrInterpolate($options.startIndex + 1)} \u0E16\u0E36\u0E07 ${ssrInterpolate($options.endIndex)} \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ${ssrInterpolate($data.products.length)} \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 <select><!--[-->`);
  ssrRenderList([5, 10, 15, 20], (size) => {
    _push(`<option${ssrRenderAttr("value", size)}${ssrIncludeBooleanAttr(Array.isArray($data.perPage) ? ssrLooseContain($data.perPage, size) : ssrLooseEqual($data.perPage, size)) ? " selected" : ""}>${ssrInterpolate(size)} \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32 </option>`);
  });
  _push(`<!--]--></select></div><div class="flex items-center"><button${ssrIncludeBooleanAttr($data.currentPage === 1) ? " disabled" : ""} class="btn mx-1"> &lt; </button><span>Page ${ssrInterpolate($data.currentPage)} of ${ssrInterpolate($options.totalPages)}</span><button${ssrIncludeBooleanAttr($data.currentPage === $options.totalPages) ? " disabled" : ""} class="btn mx-1"> &gt; </button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/user/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { product as default };
//# sourceMappingURL=product-Bj7e8HhH.mjs.map
