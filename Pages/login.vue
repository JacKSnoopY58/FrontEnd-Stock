<template>
  <div class="flex justify-center items-center h-screen bg-gray-100 p-5 sm:p-5">
    <div class="w-96 bg-white shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-bold mb-4 text-center">
        {{ isLogin ? "Login" : "Sign Up" }}
      </h2>

      <form v-if="isLogin" @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Username</label>
          <input
            type="text"
            v-model="logindata.username"
            class="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your username"
            required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input
            type="password"
            v-model="logindata.password"
            class="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your password"
            required />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-md">
          Login
        </button>
      </form>

      <form v-else @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-gray-700">First Name</label>
          <input
            type="text"
            v-model="registerData.firstname"
            class="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your first name"
            required />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Last Name</label>
          <input
            type="text"
            v-model="registerData.lastname"
            class="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your last name"
            required />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Username</label>
          <input
            type="text"
            v-model="registerData.username"
            class="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your username"
            required />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input
            type="password"
            v-model="registerData.password"
            class="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your password"
            required />
        </div>

        <button
          type="submit"
          class="w-full bg-green-500 text-white py-2 rounded-md">
          Sign Up
        </button>
      </form>

      <p class="text-center mt-4">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <button @click="isLogin = !isLogin" class="text-blue-500 underline">
          {{ isLogin ? "Sign Up" : "Login" }}
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      isLogin: true,
      logindata: {
        username: "",
        password: "",
      },
      registerData: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "employee",
      },
      clearregisterData: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "employee",
      },
      errorMessage: "",
    };
  },

  methods: {
    async login() {
      if (!this.logindata.username || !this.logindata.password) {
        alert("Please fill in both username and password.");
        return;
      }
      console.log("Login data:", this.logindata); // ตรวจสอบค่าก่อนส่ง
      try {
        const { data } = await axios.post(
          "http://erpstock.servehttp.com:9090/api/login",
          // "http://localhost:3000/api/login",
          {
            username: this.logindata.username,
            password: this.logindata.password,
          }
        );

        Cookies.set("token", data.token);
        if (data.role === "admin") {
          this.$router.push("/admin/homepage");
        } else {
          this.$router.push("/employee/homepage");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },

    async register() {
      console.log("Register data:", this.registerData); // ตรวจสอบค่าก่อนส่ง
      try {
        const { data } = await axios.post(
          "http://erpstock.servehttp.com:9090/api/register",
          // "https://localhost:3000/api/register",
          this.registerData
        );
        if (data) {
          this.$router.push("/login");
          this.registerData = { ...this.clearregisterData };
        }
      } catch (error) {
        console.error("Register error:", error);
        if (error.response && error.response.data) {
          this.errorMessage =
            error.response.data.message || "เกิดข้อผิดพลาดในการลงทะเบียน";
        }
      }
    },
  },
};
</script>

<style scoped>
/* ใช้ Tailwind CSS */
</style>
