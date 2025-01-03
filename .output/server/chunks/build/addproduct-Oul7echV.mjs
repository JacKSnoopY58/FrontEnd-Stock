import axios from 'axios';
import Cookies from 'js-cookie';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
      postdata: {
        productName: "",
        productType: "",
        productTotal: "",
        productPicture: null
      },
      previewImage: null,
      productType: [],
      newType: "",
      isAddingNewType: false,
      token: Cookies.get("token")
    };
  },
  mounted() {
    this.fetchProductTypes();
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.postdata.productPicture = file;
        this.previewImage = URL.createObjectURL(file);
      }
    },
    navigateToPage() {
      this.$router.push("/admin/product");
    },
    handleProductTypeChange() {
      if (this.postdata.productType === "add-new") {
        this.isAddingNewType = true;
        this.postdata.productType = "";
      }
    },
    async fetchProductTypes() {
      try {
        const response = await axios.get(
          "https://project-stock.onrender.com/api/products/get/producttype",
          {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          }
        );
        this.productType = response.data.data;
      } catch (error) {
        console.error("\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E14\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32:", error);
      }
    },
    async addProductType() {
      if (!this.postdata.productName || !this.postdata.productType || !this.postdata.productTotal || !this.postdata.productPicture) {
        alert("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19");
        return;
      }
      try {
        const { data } = await axios.post(
          "https://project-stock.onrender.com/api/products/addtype",
          {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          },
          {
            typeName: this.newType
          }
        );
        this.productType.push({ id: data.id, typeName: this.newType });
        this.newType = "";
        this.isAddingNewType = false;
        alert("\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22");
      } catch (error) {
        console.error("Add New type error:", error);
      }
    },
    async addProduct() {
      var _a, _b;
      try {
        if (!this.postdata.productName || !this.postdata.productType || !this.postdata.productTotal || !this.postdata.productPicture) {
          alert("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19");
          return;
        }
        const formData = { ...this.postdata };
        console.log(formData);
        console.log(this.postdata);
        const response = await axios.post(
          "https://project-stock.onrender.com/api/products/add",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            Authorization: `Bearer ${this.token}`
          }
        );
        console.log(response);
        alert("\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
        this.$router.push("/admin/product");
      } catch (error) {
        console.error("Error adding product:", error);
        alert(
          ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"
        );
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 lg:py-5 lg:px-20" }, _attrs))}><div><h1 class="text-3xl font-semibold">Add Product</h1></div><div class="bg-gray-200 p-10 mt-5 rounded-xl"><div class="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-5"><div class="grid gap-y-5"><div><label for="pname" class="block">\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label><input type="text"${ssrRenderAttr("value", $data.postdata.productName)} class="border rounded w-full p-1" required></div><div class="grid grid-cols-1 gap-5 sm:grid-cols-2"><div><label for="productType" class="block">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label><select class="select select-bordered w-full max-w-xs"><option disabled value=""${ssrIncludeBooleanAttr(Array.isArray($data.postdata.productType) ? ssrLooseContain($data.postdata.productType, "") : ssrLooseEqual($data.postdata.productType, "")) ? " selected" : ""}>\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</option><!--[-->`);
  ssrRenderList($data.productType, (type) => {
    _push(`<option${ssrRenderAttr("value", type.id)}${ssrIncludeBooleanAttr(Array.isArray($data.postdata.productType) ? ssrLooseContain($data.postdata.productType, type.id) : ssrLooseEqual($data.postdata.productType, type.id)) ? " selected" : ""}>${ssrInterpolate(type.typeName)}</option>`);
  });
  _push(`<!--]--><option value="add-new"${ssrIncludeBooleanAttr(Array.isArray($data.postdata.productType) ? ssrLooseContain($data.postdata.productType, "add-new") : ssrLooseEqual($data.postdata.productType, "add-new")) ? " selected" : ""}>+ \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48</option></select></div>`);
  if ($data.isAddingNewType) {
    _push(`<div class="mt-3"><input type="text"${ssrRenderAttr("value", $data.newType)} placeholder="\u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48" class="border rounded w-full p-1"><button class="bg-blue-500 text-white rounded px-3 py-1 mt-2 hover:bg-blue-700"> \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 </button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div><label for="quantity" class="block">\u0E08\u0E33\u0E19\u0E27\u0E19</label><input type="number"${ssrRenderAttr("value", $data.postdata.productTotal)} class="border rounded p-1 w-full" required></div></div></div><div><label for="productPicture" class="block">\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label><input type="file" id="productPicture" class="border rounded w-full p-1" accept="image/*">`);
  if ($data.previewImage) {
    _push(`<div class="mt-3"><img${ssrRenderAttr("src", $data.previewImage)} alt="Product Preview" class="w-32 h-32 object-cover"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="flex justify-center mt-20 gap-20"><button class="bg-gray-500 rounded px-5 py-1.5 text-white hover:bg-gray-800"> Save </button><button class="bg-gray-500 rounded px-5 py-1.5 text-white hover:bg-gray-800"> Cancel </button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/admin/addproduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addproduct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { addproduct as default };
//# sourceMappingURL=addproduct-Oul7echV.mjs.map
