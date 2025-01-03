<template>
  <div>
    <h1 class="text-3xl font-semibold mb-4">Product List</h1>
    <div class="mb-4 flex space-x-4">
      <input
        v-model="filters.search"
        type="text"
        placeholder="Search"
        class="border p-2 rounded"
        @input="fetchProducts" />
      <select
        v-model="filters.productType"
        class="border p-2 rounded"
        @change="fetchProducts">
        <option value="">All Types</option>
        <option v-for="type in productType" :key="type.id" :value="type.id">
          {{ type.typeName }}
        </option>
      </select>
    </div>

    <table class="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th class="border border-gray-200 px-4 py-2">#</th>
          <th class="border border-gray-200 px-4 py-2">Product Name</th>
          <th class="border border-gray-200 px-4 py-2">Stock</th>
          <th class="border border-gray-200 px-4 py-2">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="products.length === 0">
          <td colspan="4" class="text-center">No products found.</td>
        </tr>
        <tr
          v-else
          v-for="product in products"
          :key="product.productId"
          @click="goToProductDetail(product.productId)"
          class="hover:bg-slate-400">
          <td class="border border-gray-200 px-4 py-2">
            <img
              :src="
                product.productPicture
                  ? 'http://erpstock.servehttp.com:9090/images/' +
                    product.productPicture
                  : 'https://lh3.googleusercontent.com/proxy/vfrcI3Ho8V8lLS1FWlXFKUAc9p85CQm9WxsUFwOm1zrLrYsStycX5NSOBJS4TYEEX5_3mQkd8QuqnIk'
              "
              :alt="
                product.productPicture ? 'Product Picture' : 'Default Picture'
              "
              class="w-16 h-16 object-cover" />
          </td>

          <td class="border border-gray-200 px-4 py-2">
            {{ product.productName }}
          </td>
          <td class="border border-gray-200 px-4 py-2">
            {{ product.productTotal }}
          </td>
          <td class="border border-gray-200 px-4 py-2">
            {{ getTypeName(product.productType) }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4 flex space-x-2">
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 0"
        class="px-4 py-2 bg-gray-300 text-black rounded">
        Previous
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page - 1)"
        class="px-4 py-2 bg-blue-500 text-white rounded">
        {{ page }}
      </button>
      <button
        @click="changePage(currentPage + 1)"
        :disabled="currentPage + 1 >= totalPages"
        class="px-4 py-2 bg-gray-300 text-black rounded">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
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
        productType: 0,
      },
    };
  },
  methods: {
    goToProductDetail(productId) {
      console.log("Product ID:", productId);
      this.$router.push(`/admin/${productId}`);
    },
    async fetchProducts() {
      // console.log("Current Filters:", this.filters);
      try {
        // console.log("Filters being sent to API:", this.filters);
        const response = await axios.post(
          "http://erpstock.servehttp.com:9090/api/products/products",
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
          "http://erpstock.servehttp.com:9090/api/products/get/producttype"
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
    },
  },

  mounted() {
    this.fetchProducts();
    this.fetchProductTypes();
  },
};
</script>
