import axios from 'axios';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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
      products: [],
      productType: [],
      currentPage: 0,
      totalPages: 1,
      isLoading: false,
      filters: {
        page: 0,
        perpage: 10,
        isuse: true,
        max: "desc",
        search: "",
        stock: null,
        productType: 0
      }
    };
  },
  methods: {
    goToProductDetail(productId) {
      console.log("Product ID:", productId);
      this.$router.push(`/admin/${productId}`);
    },
    async fetchProducts() {
      try {
        const response = await axios.post(
          "https://project-stock.onrender.com/api/products/products",
          this.filters
        );
        this.products = response.data.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        this.products = [];
      }
    },
    async fetchProductTypes() {
      try {
        const response = await axios.get(
          "https://project-stock.onrender.com/api/products/get/producttype"
        );
        this.productType = response.data.data;
      } catch (error) {
        console.error(
          "Error fetching products:",
          error.response ? error.response.data : error.message
        );
        this.products = [];
      }
    },
    getTypeName(typeId) {
      const type = this.productType.find((item) => item.id === typeId);
      return type ? type.typeName : "Unknown Type";
    }
  },
  mounted() {
    this.fetchProducts();
    this.fetchProductTypes();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-semibold mb-4">Product List</h1><div class="mb-4 flex space-x-4"><input${ssrRenderAttr("value", $data.filters.search)} type="text" placeholder="Search" class="border p-2 rounded"><select class="border p-2 rounded"><option value=""${ssrIncludeBooleanAttr(Array.isArray($data.filters.productType) ? ssrLooseContain($data.filters.productType, "") : ssrLooseEqual($data.filters.productType, "")) ? " selected" : ""}>All Types</option><!--[-->`);
  ssrRenderList($data.productType, (type) => {
    _push(`<option${ssrRenderAttr("value", type.id)}${ssrIncludeBooleanAttr(Array.isArray($data.filters.productType) ? ssrLooseContain($data.filters.productType, type.id) : ssrLooseEqual($data.filters.productType, type.id)) ? " selected" : ""}>${ssrInterpolate(type.typeName)}</option>`);
  });
  _push(`<!--]--></select></div><table class="min-w-full border-collapse border border-gray-200"><thead><tr><th class="border border-gray-200 px-4 py-2">#</th><th class="border border-gray-200 px-4 py-2">Product Name</th><th class="border border-gray-200 px-4 py-2">Stock</th><th class="border border-gray-200 px-4 py-2">Type</th></tr></thead><tbody>`);
  if ($data.products.length === 0) {
    _push(`<tr><td colspan="4" class="text-center">No products found.</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList($data.products, (product2) => {
      _push(`<tr class="hover:bg-slate-400"><td class="border border-gray-200 px-4 py-2"><img${ssrRenderAttr(
        "src",
        product2.productPicture ? "https://project-stock.onrender.com/images/" + product2.productPicture : "https://lh3.googleusercontent.com/proxy/vfrcI3Ho8V8lLS1FWlXFKUAc9p85CQm9WxsUFwOm1zrLrYsStycX5NSOBJS4TYEEX5_3mQkd8QuqnIk"
      )}${ssrRenderAttr(
        "alt",
        product2.productPicture ? "Product Picture" : "Default Picture"
      )} class="w-16 h-16 object-cover"></td><td class="border border-gray-200 px-4 py-2">${ssrInterpolate(product2.productName)}</td><td class="border border-gray-200 px-4 py-2">${ssrInterpolate(product2.productTotal)}</td><td class="border border-gray-200 px-4 py-2">${ssrInterpolate($options.getTypeName(product2.productType))}</td></tr>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table><div class="mt-4 flex space-x-2"><button${ssrIncludeBooleanAttr($data.currentPage === 0) ? " disabled" : ""} class="px-4 py-2 bg-gray-300 text-black rounded"> Previous </button><!--[-->`);
  ssrRenderList($data.totalPages, (page) => {
    _push(`<button class="px-4 py-2 bg-blue-500 text-white rounded">${ssrInterpolate(page)}</button>`);
  });
  _push(`<!--]--><button${ssrIncludeBooleanAttr($data.currentPage + 1 >= $data.totalPages) ? " disabled" : ""} class="px-4 py-2 bg-gray-300 text-black rounded"> Next </button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/admin/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { product as default };
//# sourceMappingURL=product-DBsWHhgU.mjs.map
