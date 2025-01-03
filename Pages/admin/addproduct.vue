<template>
  <div class="p-5 lg:py-5 lg:px-20">
    <div>
      <h1 class="text-3xl font-semibold">Add Product</h1>
    </div>
    <div class="bg-gray-200 p-10 mt-5 rounded-xl">
      <div class="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-5">
        <div class="grid gap-y-5">
          <div>
            <label for="pname" class="block">ชื่อสินค้า</label>
            <input
              type="text"
              v-model="postdata.productName"
              class="border rounded w-full p-1"
              required />
          </div>
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label for="productType" class="block">ประเภทสินค้า</label>
              <select
                v-model="postdata.productType"
                @change="handleProductTypeChange"
                class="select select-bordered w-full max-w-xs">
                <option disabled value="">เลือกประเภทสินค้า</option>
                <option
                  v-for="type in productType"
                  :key="type.id"
                  :value="type.id">
                  {{ type.typeName }}
                </option>
                <option value="add-new">+ เพิ่มประเภทสินค้าใหม่</option>
              </select>
            </div>
            <div v-if="isAddingNewType" class="mt-3">
              <input
                type="text"
                v-model="newType"
                placeholder="ชื่อประเภทสินค้าใหม่"
                class="border rounded w-full p-1" />
              <button
                @click="addProductType"
                class="bg-blue-500 text-white rounded px-3 py-1 mt-2 hover:bg-blue-700">
                เพิ่มประเภทสินค้า
              </button>
            </div>
            <div>
              <label for="quantity" class="block">จำนวน</label>
              <input
                type="number"
                v-model="postdata.productTotal"
                class="border rounded p-1 w-full"
                required />
            </div>
          </div>
        </div>
        <div>
          <label for="productPicture" class="block">เพิ่มรูปภาพสินค้า</label>
          <input
            type="file"
            id="productPicture"
            @change="handleImageUpload"
            class="border rounded w-full p-1"
            accept="image/*" />
          <div v-if="previewImage" class="mt-3">
            <img
              :src="previewImage"
              alt="Product Preview"
              class="w-32 h-32 object-cover" />
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-20 gap-20">
        <button
          @click="addProduct"
          class="bg-gray-500 rounded px-5 py-1.5 text-white hover:bg-gray-800">
          Save
        </button>
        <button
          @click="navigateToPage"
          class="bg-gray-500 rounded px-5 py-1.5 text-white hover:bg-gray-800">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      postdata: {
        productName: "",
        productType: "",
        productTotal: "",
        productPicture : null,
      },
      previewImage: null,
      productType: [],
      newType: "",
      isAddingNewType: false,
      token: Cookies.get("token"),
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
          "http://erpstock.servehttp.com:9090/api/products/get/producttype",
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        this.productType = response.data.data;
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงประเภทสินค้า:", error);
      }
    },
    async addProductType() {
      if (
        !this.postdata.productName ||
        !this.postdata.productType ||
        !this.postdata.productTotal ||
        !this.postdata.productPicture
      ) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }

      try {
        const { data } = await axios.post(
          "http://erpstock.servehttp.com:9090/api/products/addtype",
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
          {
            typeName: this.newType,
          }
        );
        this.productType.push({ id: data.id, typeName: this.newType });
        this.newType = "";
        this.isAddingNewType = false;
        alert("เพิ่มประเภทสินค้าเรียบร้อย");
      } catch (error) {
        console.error("Add New type error:", error);
      }
    },
    async addProduct() {
      try {
        if (
          !this.postdata.productName ||
          !this.postdata.productType ||
          !this.postdata.productTotal ||
          !this.postdata.productPicture
        ) {
          alert("กรุณากรอกข้อมูลให้ครบถ้วน");
          return;
        }

        const formData = { ...this.postdata };
        console.log(formData);
        console.log(this.postdata);
        const response = await axios.post(
          "http://erpstock.servehttp.com:9090/api/products/add",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            Authorization: `Bearer ${this.token}`,
          }
        );
        console.log(response);
        alert("เพิ่มสินค้าสำเร็จ");
        this.$router.push("/admin/product");
      } catch (error) {
        console.error("Error adding product:", error);
        alert(
          error.response?.data?.message || "เกิดข้อผิดพลาดในการเพิ่มสินค้า"
        );
      }
    },
  },
};
</script>
