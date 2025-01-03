<template>
    <div class="p-4 bg-white rounded-lg shadow-lg">
    <!-- Search Input -->
    <div class="mb-4 relative">
      <label for="search" class="block text-sm font-medium text-gray-700">
        ค้นหาสินค้า
      </label>
      <input
        type="text"
        id="search"
        v-model="searchQuery"
        placeholder="ค้นหาสินค้า"
        class="mt-2 p-2 w-full border border-gray-300 rounded-md"
        @input="fetchProducts" />
        
      
      <div
        v-if="searchQuery && filteredProducts.length > 0"
        class="mt-2 absolute w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
        <ul>
          <li
            v-for="(product, index) in filteredProducts"
            :key="index"
            class="p-2 cursor-pointer hover:bg-gray-100 flex items-center space-x-2"
            @click="selectProduct(product)">
            <img
              :src="product.imageUrl"
              alt="Product Image"
              class="w-8 h-8 object-cover rounded-full" />
            <span>{{ product.productName }}</span>
          </li>
        </ul>
      </div>

      
      <div
        v-else-if="searchQuery"
        class="mt-2 absolute w-full bg-white border border-gray-300 rounded-md shadow-lg">
        <p class="p-2">ไม่พบสินค้าที่ค้นหา</p>
      </div>
    </div>

    <!-- Product List (จะเพิ่มรายการสินค้าเลือกจาก dropdown) -->
    <table
      v-if="selectedProducts.length > 0"
      class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md mb-4">
      <thead>
        <tr class="bg-gray-100">
          <th class="p-2 text-left text-sm font-semibold text-gray-600">
            Product
          </th>
          <th class="p-2 text-left text-sm font-semibold text-gray-600">Qty</th>
          <th class="p-2 text-left text-sm font-semibold text-gray-600">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(product, index) in selectedProducts"
          :key="product.productId"
          class="border-b">
          <td class="p-2">
            <img
              :src="product.imageUrl"
              :alt="product.productName"
              class="w-16 h-16 object-cover" />
            {{ product.productName }}
          </td>
          <td class="p-2">
            <input
              type="number"
              v-model="product.productTotal"
              min="1"
              class="w-16 text-center p-1 border border-gray-300 rounded-md" />
          </td>
          <td class="p-2 text-center">
            <button @click="removeProduct(index)" class="text-red-500">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Paper Size Selection -->
    <div class="mb-4">
      <label for="paperSize" class="block text-sm font-medium text-gray-700"
        >ขนาดกระดาษ</label
      >
      <select
        id="paperSize"
        v-model="paperSize"
        class="mt-2 p-2 w-full border border-gray-300 rounded-md">
        <option value="A4">A4</option>
        <option value="A5">A5</option>
      </select>
    </div>

    <div class="flex justify-between mt-4">
      <button
        @click="generateBarcodes"
        class="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600">
        สร้างบาร์โค้ด
      </button>
      <button
        @click="resetBarcodes"
        class="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400">
        รีเซ็ต
      </button>
    </div>

    <!-- Popup for displaying generated barcodes -->
    <div v-if="generatedBarcodes.length > 0">
      <div v-for="barcode in generatedBarcodes" :key="barcode">
        <img
          :src="'data:image/png;base64,' + barcode"
          alt="Generated Barcode" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      paperSize: "A4",
      products: [],
      selectedProducts: [],
      generatedBarcodes: [],
      showBarcodePopup: false,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const query = this.searchQuery.toLowerCase();
        return (
          product.productName.toLowerCase().includes(query) ||
          product.productNo.toLowerCase().includes(query)
        );
      });
    },
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.post(
          "http://erpstock.servehttp.com:9090/api/products/products",
          {
            page: 0,
            perpage: 10,
            isuse: true,
            max: "desc",
            search: this.searchQuery,
            stock: null,
            productType: null,
          }
        );
        this.products = response.data.data || [];
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    selectProduct(product) {
      if (
        !this.selectedProducts.some((p) => p.productId === product.productId)
      ) {
        this.selectedProducts.push({ ...product, productTotal: 1 });
        this.searchQuery = "";
      }
    },
    removeProduct(index) {
      this.selectedProducts.splice(index, 1);
    },

    async generateBarcodes() {
      if (this.selectedProducts.length === 0) {
        alert("กรุณาเลือกสินค้าก่อนเพื่อสร้างบาร์โค้ด.");
        return;
      }

      const productsToGenerate = this.selectedProducts.map((product) => ({
        productId: product.productId,
        productTotal: product.productTotal, // จำนวนที่ผู้ใช้เลือก
      }));

      try {
        const response = await axios.post(
          "http://erpstock.servehttp.com:9090/api/products/genbarcode",
          {
            products: productsToGenerate,
            isQr: false, 
          },
          { responseType: "arraybuffer" }
        );

        
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "barcodes.pdf";
        link.click();

        this.generatedBarcodes = [];
      } catch (error) {
        console.error("Error generating barcodes:", error);
        alert("เกิดข้อผิดพลาดในการสร้างบาร์โค้ด. กรุณาลองใหม่.");
      }
    },

    closeBarcodePopup() {
      this.showBarcodePopup = false;
    },

    resetBarcodes() {
      this.selectedProducts = [];
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
