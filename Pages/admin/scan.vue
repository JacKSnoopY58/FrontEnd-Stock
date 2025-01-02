<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="bg-blue-500 text-white p-4">
      <h1 class="text-lg font-bold">สแกน QR Code สินค้า</h1>
    </header>

    <!-- Body -->
    <main class="flex flex-col flex-1 p-4 space-y-4">
      <!-- Scan Area -->
      <section class="bg-gray-100 p-4 rounded shadow flex items-center justify-center">
        <div class="text-center">
          <p class="text-sm text-gray-500">สแกน QR Code</p>
          <div class="border-dashed border-4 border-gray-300 w-48 h-48 relative">
            <video
              ref="scanner"
              class="absolute inset-0 w-full h-full object-cover"
              autoplay
              playsinline
              muted
            ></video>
          </div>
          <button
            class="bg-blue-500 text-white mt-4 px-4 py-2 rounded"
            @click="startScanner"
          >
            เริ่มสแกน
          </button>
          <button
            class="bg-gray-500 text-white mt-2 px-4 py-2 rounded"
            @click="stopScanner"
          >
            หยุดสแกน
          </button>
        </div>
      </section>

      <!-- Product List -->
      <section class="flex-1 overflow-y-auto">
        <table class="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200 text-left">
              <th class="border border-gray-300 px-4 py-2">สินค้า</th>
              <th class="border border-gray-300 px-4 py-2">คงเหลือ</th>
              <th class="border border-gray-300 px-4 py-2">จำนวนหัก</th>
              <th class="border border-gray-300 px-4 py-2">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in scannedItems" :key="index">
              <td class="border border-gray-300 px-4 py-2">{{ item.name }}</td>
              <td class="border border-gray-300 px-4 py-2">{{ item.stock }}</td>
              <td class="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  class="border px-2 py-1 w-16 text-center"
                  v-model.number="item.quantity"
                />
              </td>
              <td
                class="border border-gray-300 px-4 py-2"
                :class="{
                  'text-green-500': item.status === 'available',
                  'text-red-500': item.status === 'unavailable'
                }"
              >
                {{ item.status === 'available' ? 'พร้อมใช้งาน' : 'ไม่พร้อมใช้งาน' }}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 p-4 flex justify-end space-x-4">
      <button class="bg-gray-500 text-white px-4 py-2 rounded" @click="reset">
        รีเซ็ต
      </button>
      <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="confirm">
        ยืนยัน
      </button>
    </footer>
  </div>
</template>

<script>
import QrScanner from "qr-scanner";

export default {
  data() {
    return {
      scannedItems: [], // List of scanned items
      scanner: null, // QR Scanner instance
      mockData: [
        { id: 1, name: "สินค้า A", stock: 10 },
        { id: 2, name: "สินค้า B", stock: 20 },
        { id: 3, name: "สินค้า C", stock: 5 },
      ], // Mock Data
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
        alert("ไม่สามารถเปิดกล้องได้ โปรดตรวจสอบการอนุญาต.");
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
      const decodedData = JSON.parse(result.data); // Decode JSON from QR Code
      const existingItem = this.scannedItems.find(
        (item) => item.name === decodedData.name
      );

      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        this.scannedItems.push({
          ...decodedData,
          quantity: 1,
          status: decodedData.stock > 0 ? "available" : "unavailable",
        });
      }
    },
    reset() {
      this.scannedItems = [];
    },
    confirm() {
      console.log("ยืนยันข้อมูล:", this.scannedItems);
      // Send data to backend or API
    },
  },
  beforeDestroy() {
    this.stopScanner(); // Clean up scanner on component destroy
  },
};
</script>
