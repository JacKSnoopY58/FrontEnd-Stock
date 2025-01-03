import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import axios from 'axios';
import Cookies from 'js-cookie';
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

const __default__ = {
  data() {
    return {
      isLogin: true,
      logindata: {
        username: "",
        password: ""
      },
      registerData: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "employee"
      },
      clearregisterData: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "employee"
      },
      errorMessage: ""
    };
  },
  methods: {
    async login() {
      if (!this.logindata.username || !this.logindata.password) {
        alert("Please fill in both username and password.");
        return;
      }
      console.log("Login data:", this.logindata);
      try {
        const { data } = await axios.post(
          "https://project-stock.onrender.com/api/login",
          // "http://localhost:3000/api/login",
          {
            username: this.logindata.username,
            password: this.logindata.password
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
      console.log("Register data:", this.registerData);
      try {
        const { data } = await axios.post(
          "https://project-stock.onrender.com/api/register",
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
          this.errorMessage = error.response.data.message || "\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19";
        }
      }
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-screen bg-gray-100 p-5 sm:p-5" }, _attrs))} data-v-b5f85c36><div class="w-96 bg-white shadow-md rounded-lg p-6" data-v-b5f85c36><h2 class="text-2xl font-bold mb-4 text-center" data-v-b5f85c36>${ssrInterpolate(_ctx.isLogin ? "Login" : "Sign Up")}</h2>`);
      if (_ctx.isLogin) {
        _push(`<form data-v-b5f85c36><div class="mb-4" data-v-b5f85c36><label class="block text-gray-700" data-v-b5f85c36>Username</label><input type="text"${ssrRenderAttr("value", _ctx.logindata.username)} class="w-full px-4 py-2 border rounded-md" placeholder="Enter your username" required data-v-b5f85c36></div><div class="mb-4" data-v-b5f85c36><label class="block text-gray-700" data-v-b5f85c36>Password</label><input type="password"${ssrRenderAttr("value", _ctx.logindata.password)} class="w-full px-4 py-2 border rounded-md" placeholder="Enter your password" required data-v-b5f85c36></div><button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md" data-v-b5f85c36> Login </button></form>`);
      } else {
        _push(`<form data-v-b5f85c36><div class="mb-4" data-v-b5f85c36><label class="block text-gray-700" data-v-b5f85c36>First Name</label><input type="text"${ssrRenderAttr("value", _ctx.registerData.firstname)} class="w-full px-4 py-2 border rounded-md" placeholder="Enter your first name" required data-v-b5f85c36></div><div class="mb-4" data-v-b5f85c36><label class="block text-gray-700" data-v-b5f85c36>Last Name</label><input type="text"${ssrRenderAttr("value", _ctx.registerData.lastname)} class="w-full px-4 py-2 border rounded-md" placeholder="Enter your last name" required data-v-b5f85c36></div><div class="mb-4" data-v-b5f85c36><label class="block text-gray-700" data-v-b5f85c36>Username</label><input type="text"${ssrRenderAttr("value", _ctx.registerData.username)} class="w-full px-4 py-2 border rounded-md" placeholder="Enter your username" required data-v-b5f85c36></div><div class="mb-4" data-v-b5f85c36><label class="block text-gray-700" data-v-b5f85c36>Password</label><input type="password"${ssrRenderAttr("value", _ctx.registerData.password)} class="w-full px-4 py-2 border rounded-md" placeholder="Enter your password" required data-v-b5f85c36></div><button type="submit" class="w-full bg-green-500 text-white py-2 rounded-md" data-v-b5f85c36> Sign Up </button></form>`);
      }
      _push(`<p class="text-center mt-4" data-v-b5f85c36>${ssrInterpolate(_ctx.isLogin ? "Don't have an account?" : "Already have an account?")} <button class="text-blue-500 underline" data-v-b5f85c36>${ssrInterpolate(_ctx.isLogin ? "Sign Up" : "Login")}</button></p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5f85c36"]]);

export { login as default };
//# sourceMappingURL=login-B8xk_91Z.mjs.map
