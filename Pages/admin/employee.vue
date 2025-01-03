<template>
  <div class="">
    <div class="mt-10 rounded-xl px-5 w-screen sm:w-full">
      <div class="bg-gray-500 p-5 rounded">
        <div class="bg-white rounded p-2 flex justify-end">
          <div class="w-80">
            <form class="">
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-3 h-3 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  v-model="searchQuery"
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-xl h-5"
                  placeholder="Search Name, ID..."
                  required />
              </div>
            </form>
          </div>
        </div>

        <div>
          
          <div class="flow-root mt-5 overflow-auto">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-black text-white">
                <tr>
                  <th
                    scope="col"
                    class="ml-5 pr-3 text-sm font-semibold sm:pl-0"></th>
                  <th
                    scope="col"
                    class="text-left ml-5 pr-3 text-sm font-semibold sm:pl-0">
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold hidden sm:table-cell">
                    ID
                  </th>
                  <th
                    scope="col"
                    class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell">
                    Username
                  </th>
                  <th
                    scope="col"
                    class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell">
                    Password
                  </th>
                  <th
                    scope="col"
                    class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell">
                    Role
                  </th>
                  <th
                    scope="col"
                    class="hidden px-3 py-3.5 text-left text-sm font-semibold sm:table-cell">
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"></th>
                </tr>
              </thead>
              <div v-if="users.length === 0 && !loading" class="text-red-500">
  ไม่มีข้อมูลหรือการโหลดล้มเหลว
</div>

              <tbody class="divide-y divide-gray-200 bg-white">
                
                <tr
                  v-for="user in paginatedUsers"
                  :key="user.uid"
                  class="cursor-pointer hover:bg-gray-100">
                  <td class="pl-5">
                    <div class="w-10">
                      <img class="rounded-full" :src="user.image" alt="" />
                    </div>
                  </td>
                  <td
                    class="whitespace-nowrap py-5 pr-10 text-sm sm:pl-0 sm:w-3">
                    <div class="flex items-center">
                      <div class="">
                        <div class="font-medium text-gray-900">
                          {{ user.name }}
                        </div>
                        <div class="text-gray-500 text-sm sm:hidden">
                          {{ user.uid }} {{ person.role }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-5 text-sm text-gray-500 hidden sm:table-cell">
                    {{ user.uid }}
                  </td>
                  <td
                    class="hidden whitespace-nowrap px-3 py-5 text-sm text-gray-500 sm:table-cell">
                    {{ user.username }}
                  </td>
                  <td
                    class="hidden whitespace-nowrap px-3 py-5 text-sm text-gray-500 sm:table-cell">
                    {{ user.password }}
                  </td>
                  <td
                    class="hidden whitespace-nowrap px-3 py-5 text-sm text-gray-500 sm:table-cell">
                    {{ user.role }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-5 text-sm text-gray-500 hidden sm:table-cell">
                    <span
                      :class="[
                        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ',
                        user.status === 'Active'
                          ? 'bg-green-50 text-green-700 ring-green-600/20 '
                          : 'bg-red-50 text-red-700 ring-red-600/20 ',
                      ]"
                      >{{ user.status }}</span
                    >
                  </td>
                  <td
                    class="flex relative whitespace-nowrap py-5 text-sm font-medium">
                    <!--edit-->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 text-black">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                    <!--delete-->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 ml-5 text-red-500">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          class="flex justify-between items-center mt-4 h-auto bg-white rounded-md p-3 flex-col sm:flex-row">
          <div class="text-sm sm:text-base">
            รายการที่ {{ startIndex + 1 }} ถึง {{ endIndex }} จากทั้งหมด
            {{ users.length }} รายการ
            <select v-model="perPage" @change="currentPage = 1">
              <option v-for="size in [5, 10, 15, 20]" :key="size" :value="size">
                {{ size }} รายการต่อหน้า
              </option>
            </select>
          </div>

          <div class="mb-5">
            <footer class="flex items-center justify-center space-x-2 mt-5">
              <button
                @click="goToPage(currentPage - 1)"
                :disabled="currentPage === 1"
                class="px-2 py-1 bg-gray-200 text-gray-500 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button
                v-for="page in pages"
                :key="page"
                @click="goToPage(page)"
                :class="[
                  'px-2 py-1 rounded',
                  page === currentPage
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500',
                ]">
                {{ page }}
              </button>
              <button
                @click="goToPage(currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="px-2 py-1 bg-gray-200 text-gray-500 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                Next
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Cookies from "js-cookie";

export default {
  data() {
    return {
      users: [],
      currentPage: 1,
      perPage: 5,
      searchQuery: "",
      loading: false,
      token: Cookies.get("token"),
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(
        (user) =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.uid.toString().includes(this.searchQuery)
      );
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = this.currentPage * this.perPage;
      return this.filteredUsers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.perPage);
    },
    pages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
    startIndex() {
      return (this.currentPage - 1) * this.perPage;
    },
    endIndex() {
      return Math.min(this.startIndex + this.perPage, this.filteredUsers.length);
    },
  },
  methods: {
    getdata() {
      this.loading = true;
      axios
        .get("http://erpstock.servehttp.com:9090/api/users", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          this.users = response.data.data;  // Ensure 'data' is correct based on API response structure
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          this.loading = false;
        });
    },
    goToPage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
  },
  mounted() {
    this.getdata();  // Call the getdata method when the component is mounted
  },
  watch: {
    searchQuery() {
      this.currentPage = 1; // Reset to the first page when the search query changes
    },
  },
};
</script>
