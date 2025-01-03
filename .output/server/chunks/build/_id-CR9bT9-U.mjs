import axios from 'axios';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  async asyncData({ params }) {
    try {
      const response = await axios.get(
        `https://project-stock.onrender.com/api/products/products/${params.id}`
      );
      return { product: response.data.data };
    } catch (error) {
      console.error("Error fetching product details:", error);
      return { product: null };
    }
  },
  data() {
    return {
      product: null,
      isLoading: false
    };
  },
  methods: {
    getTypeName(typeId) {
      const type = this.productType.find((item) => item.id === typeId);
      return type ? type.typeName : "Unknown Type";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($data.product) {
    _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-semibold mb-4">${ssrInterpolate($data.product.productName)}</h1><div class="mb-4"><img${ssrRenderAttr("src", "https://project-stock.onrender.com/images/" + $data.product.productPicture)} alt="Product Picture" class="w-48 h-48 object-cover mb-4"><p><strong>Stock:</strong> ${ssrInterpolate($data.product.productTotal)}</p><p><strong>Type:</strong> ${ssrInterpolate($options.getTypeName($data.product.productType))}</p></div>`);
    if ($data.isLoading) {
      _push(`<div>Loading...</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/admin/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id as default };
//# sourceMappingURL=_id-CR9bT9-U.mjs.map
