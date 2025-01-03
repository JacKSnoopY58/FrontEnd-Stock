import axios from 'axios';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
      searchQuery: "",
      paperSize: "A4",
      products: [],
      selectedProducts: [],
      generatedBarcodes: [],
      showBarcodePopup: false
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const query = this.searchQuery.toLowerCase();
        return product.productName.toLowerCase().includes(query) || product.productNo.toLowerCase().includes(query);
      });
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.post(
          "https://project-stock.onrender.com/api/products/products",
          {
            page: 0,
            perpage: 10,
            isuse: true,
            max: "desc",
            search: this.searchQuery,
            stock: null,
            productType: null
          }
        );
        this.products = response.data.data || [];
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    selectProduct(product) {
      if (!this.selectedProducts.some((p) => p.productId === product.productId)) {
        this.selectedProducts.push({ ...product, productTotal: 1 });
        this.searchQuery = "";
      }
    },
    removeProduct(index) {
      this.selectedProducts.splice(index, 1);
    },
    async generateBarcodes() {
      if (this.selectedProducts.length === 0) {
        alert("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E32\u0E23\u0E4C\u0E42\u0E04\u0E49\u0E14.");
        return;
      }
      const productsToGenerate = this.selectedProducts.map((product) => ({
        productId: product.productId,
        productTotal: product.productTotal
        // จำนวนที่ผู้ใช้เลือก
      }));
      try {
        const response = await axios.post(
          "https://project-stock.onrender.com/api/products/genbarcode",
          {
            products: productsToGenerate,
            isQr: false
          },
          { responseType: "arraybuffer" }
        );
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = (void 0).URL.createObjectURL(blob);
        const link = (void 0).createElement("a");
        link.href = url;
        link.download = "barcodes.pdf";
        link.click();
        this.generatedBarcodes = [];
      } catch (error) {
        console.error("Error generating barcodes:", error);
        alert("\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E32\u0E23\u0E4C\u0E42\u0E04\u0E49\u0E14. \u0E01\u0E23\u0E38\u0E13\u0E32\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48.");
      }
    },
    closeBarcodePopup() {
      this.showBarcodePopup = false;
    },
    resetBarcodes() {
      this.selectedProducts = [];
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 bg-white rounded-lg shadow-lg" }, _attrs))}><div class="mb-4 relative"><label for="search" class="block text-sm font-medium text-gray-700"> \u0E04\u0E49\u0E19\u0E2B\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 </label><input type="text" id="search"${ssrRenderAttr("value", $data.searchQuery)} placeholder="\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32" class="mt-2 p-2 w-full border border-gray-300 rounded-md">`);
  if ($data.searchQuery && $options.filteredProducts.length > 0) {
    _push(`<div class="mt-2 absolute w-full bg-white border border-gray-300 rounded-md shadow-lg z-10"><ul><!--[-->`);
    ssrRenderList($options.filteredProducts, (product, index) => {
      _push(`<li class="p-2 cursor-pointer hover:bg-gray-100 flex items-center space-x-2"><img${ssrRenderAttr("src", product.imageUrl)} alt="Product Image" class="w-8 h-8 object-cover rounded-full"><span>${ssrInterpolate(product.productName)}</span></li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else if ($data.searchQuery) {
    _push(`<div class="mt-2 absolute w-full bg-white border border-gray-300 rounded-md shadow-lg"><p class="p-2">\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E04\u0E49\u0E19\u0E2B\u0E32</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($data.selectedProducts.length > 0) {
    _push(`<table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md mb-4"><thead><tr class="bg-gray-100"><th class="p-2 text-left text-sm font-semibold text-gray-600"> Product </th><th class="p-2 text-left text-sm font-semibold text-gray-600">Qty</th><th class="p-2 text-left text-sm font-semibold text-gray-600"> Action </th></tr></thead><tbody><!--[-->`);
    ssrRenderList($data.selectedProducts, (product, index) => {
      _push(`<tr class="border-b"><td class="p-2"><img${ssrRenderAttr("src", product.imageUrl)}${ssrRenderAttr("alt", product.productName)} class="w-16 h-16 object-cover"> ${ssrInterpolate(product.productName)}</td><td class="p-2"><input type="number"${ssrRenderAttr("value", product.productTotal)} min="1" class="w-16 text-center p-1 border border-gray-300 rounded-md"></td><td class="p-2 text-center"><button class="text-red-500"> Delete </button></td></tr>`);
    });
    _push(`<!--]--></tbody></table>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="mb-4"><label for="paperSize" class="block text-sm font-medium text-gray-700">\u0E02\u0E19\u0E32\u0E14\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29</label><select id="paperSize" class="mt-2 p-2 w-full border border-gray-300 rounded-md"><option value="A4"${ssrIncludeBooleanAttr(Array.isArray($data.paperSize) ? ssrLooseContain($data.paperSize, "A4") : ssrLooseEqual($data.paperSize, "A4")) ? " selected" : ""}>A4</option><option value="A5"${ssrIncludeBooleanAttr(Array.isArray($data.paperSize) ? ssrLooseContain($data.paperSize, "A5") : ssrLooseEqual($data.paperSize, "A5")) ? " selected" : ""}>A5</option></select></div><div class="flex justify-between mt-4"><button class="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"> \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E32\u0E23\u0E4C\u0E42\u0E04\u0E49\u0E14 </button><button class="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400"> \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 </button></div>`);
  if ($data.generatedBarcodes.length > 0) {
    _push(`<div><!--[-->`);
    ssrRenderList($data.generatedBarcodes, (barcode) => {
      _push(`<div><img${ssrRenderAttr("src", "data:image/png;base64," + barcode)} alt="Generated Barcode"></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/admin/genbarcode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const genbarcode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { genbarcode as default };
//# sourceMappingURL=genbarcode-9-A4uMf_.mjs.map
