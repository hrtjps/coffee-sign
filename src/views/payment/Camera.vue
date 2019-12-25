<template>
  <div class="app flex-row" ref="fileform">
    <div>
      <h1>hello, this is camera test page</h1>
      <div class="error">{{ error }}</div>

      <div class="decode-result">
        Last result:
        <b>{{ result }}</b>
      </div>

      <StreamBarcodeReader @decode="onDecode" @loaded="onInit"></StreamBarcodeReader>
    </div>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
export default {
  name: "Camera",
  components: {
    StreamBarcodeReader
  },
  data() {
    return {
      result: "",
      error: ""
    };
  },
  methods: {
    onDecode(result) {
      this.result = result;
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "../document/AddDocuments.scss";
</style>

