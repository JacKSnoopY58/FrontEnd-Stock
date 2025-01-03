<template>
  <div v-if="product">
    <h1 class="text-3xl font-semibold mb-4">{{ product.productName }}</h1>
    <div class="mb-4">
      <img
        :src="'http://erpstock.servehttp.com:9090/images/' + product.productPicture"
        alt="Product Picture"
        class="w-48 h-48 object-cover mb-4"
      />
      <p><strong>Stock:</strong> {{ product.productTotal }}</p>
      <p><strong>Type:</strong> {{ getTypeName(product.productType) }}</p>
    </div>
    <div v-if="isLoading">Loading...</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    try {
      const response = await axios.get(
        `http://erpstock.servehttp.com:9090/api/products/products/${params.id}`
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
      isLoading: false,
    };
  },
  methods: {
    getTypeName(typeId) {
      const type = this.productType.find((item) => item.id === typeId);
      return type ? type.typeName : "Unknown Type";
    },
  },
};
</script>
