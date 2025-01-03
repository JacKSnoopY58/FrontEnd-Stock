import QrScanner from 'qr-scanner';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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
      scannedItems: [],
      // List of scanned items
      scanner: null,
      // QR Scanner instance
      mockData: [
        { id: 1, name: "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 A", stock: 10 },
        { id: 2, name: "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 B", stock: 20 },
        { id: 3, name: "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 C", stock: 5 }
      ]
      // Mock Data
    };
  },
  methods: {
    startScanner() {
      const video = this.$refs.scanner;
      this.scanner = new QrScanner(
        video,
        (result) => {
          this.processQRCode(result);
        },
        { highlightScanRegion: true }
      );
      this.scanner.start().catch((err) => {
        console.error("Camera access error:", err);
        alert("\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1B\u0E34\u0E14\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E44\u0E14\u0E49 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15.");
      });
    },
    stopScanner() {
      if (this.scanner) {
        this.scanner.stop();
        this.scanner.destroy();
        this.scanner = null;
      }
    },
    processQRCode(result) {
      const decodedData = JSON.parse(result.data);
      const existingItem = this.scannedItems.find(
        (item) => item.name === decodedData.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.scannedItems.push({
          ...decodedData,
          quantity: 1,
          status: decodedData.stock > 0 ? "available" : "unavailable"
        });
      }
    },
    reset() {
      this.scannedItems = [];
    },
    confirm() {
      console.log("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25:", this.scannedItems);
    }
  },
  beforeDestroy() {
    this.stopScanner();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-screen" }, _attrs))}><header class="bg-blue-500 text-white p-4"><h1 class="text-lg font-bold">\u0E2A\u0E41\u0E01\u0E19 QR Code \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</h1></header><main class="flex flex-col flex-1 p-4 space-y-4"><section class="bg-gray-100 p-4 rounded shadow flex items-center justify-center"><div class="text-center"><p class="text-sm text-gray-500">\u0E2A\u0E41\u0E01\u0E19 QR Code</p><div class="border-dashed border-4 border-gray-300 w-48 h-48 relative"><video class="absolute inset-0 w-full h-full object-cover" autoplay playsinline muted></video></div><button class="bg-blue-500 text-white mt-4 px-4 py-2 rounded"> \u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E41\u0E01\u0E19 </button><button class="bg-gray-500 text-white mt-2 px-4 py-2 rounded"> \u0E2B\u0E22\u0E38\u0E14\u0E2A\u0E41\u0E01\u0E19 </button></div></section><section class="flex-1 overflow-y-auto"><table class="min-w-full border-collapse border border-gray-300"><thead><tr class="bg-gray-200 text-left"><th class="border border-gray-300 px-4 py-2">\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th><th class="border border-gray-300 px-4 py-2">\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D</th><th class="border border-gray-300 px-4 py-2">\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E31\u0E01</th><th class="border border-gray-300 px-4 py-2">\u0E2A\u0E16\u0E32\u0E19\u0E30</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($data.scannedItems, (item, index) => {
    _push(`<tr><td class="border border-gray-300 px-4 py-2">${ssrInterpolate(item.name)}</td><td class="border border-gray-300 px-4 py-2">${ssrInterpolate(item.stock)}</td><td class="border border-gray-300 px-4 py-2"><input type="number" class="border px-2 py-1 w-16 text-center"${ssrRenderAttr("value", item.quantity)}></td><td class="${ssrRenderClass([{
      "text-green-500": item.status === "available",
      "text-red-500": item.status === "unavailable"
    }, "border border-gray-300 px-4 py-2"])}">${ssrInterpolate(item.status === "available" ? "\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19" : "\u0E44\u0E21\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></section></main><footer class="bg-gray-100 p-4 flex justify-end space-x-4"><button class="bg-gray-500 text-white px-4 py-2 rounded"> \u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 </button><button class="bg-blue-500 text-white px-4 py-2 rounded"> \u0E22\u0E37\u0E19\u0E22\u0E31\u0E19 </button></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/admin/scan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { scan as default };
//# sourceMappingURL=scan-BkRafTmp.mjs.map
