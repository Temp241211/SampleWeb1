<template>
  <div>
    <div id="qr-code-full-region"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";

export default defineComponent({
  name: "QRcodeScanner",
  props: {
    qrbox: {
      type: Number,
      default: 250,
    },
    fps: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    const config = {
      fps: this.fps,
      qrbox: this.qrbox,
    };
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "qr-code-full-region",
      config
    );
    console.log(html5QrcodeScanner);
    html5QrcodeScanner.render(this.onScanSuccess);
  },
  unmounted() {},
  methods: {
    onScanSuccess(decodedText, decodedResult) {
      this.$emit("result", decodedText, decodedResult);
    },
  },
});
</script>
