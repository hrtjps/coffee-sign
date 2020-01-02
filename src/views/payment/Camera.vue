<template>
  <div class="app flex-row" ref="fileform">
    <div>
      <h1>hello, this is camera test page</h1>
      <div class="error">{{ error }}</div>

      <div class="decode-result">
        Last result:
        <b>{{ result }}</b>
      </div>

      <!-- <StreamBarcodeReader @decode="onDecode" @loaded="onInit"></StreamBarcodeReader> -->
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
  </div>
</template>

<script>
// import { StreamBarcodeReader } from "vue-barcode-reader";
export default {
  name: "Camera",
  components: {
    // StreamBarcodeReader,
    // QrcodeStream
  },
  data() {
    return {
      result: "",
      error: ""
    };
  },
  mounted() {
    this.video = this.$refs.video;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (navigator.getUserMedia) {
      this.error = "allowed in this browser";
    } else {
      this.error = "not allowed in this browser";
    }
    // if (!navigator.getUserMedia) {
    //   this.userMediaSupported = false;
    //   this.renderQrHandle = true;
    // } else {
    //   navigator.mediaDevices
    //     .getUserMedia({ video: true })
    //     .then(
    //       function(stream) {
    //         console.log(stream);
    //         this.userMediaSupported = true;
    //       }.bind(this)
    //     )
    //     .catch(
    //       function(err) {
    //         console.log(err);
    //         this.userMediaSupported = false;
    //       }.bind(this)
    //     )
    //     .then(
    //       function() {
    //         this.renderQrHandle = true;
    //       }.bind(this)
    //     );
    // }
  },
  methods: {
    onDecode(result) {
      this.result = result;
    },

    async onInit(promise) {
      // promise.catch(function() {
      //   console.log(this);
      //   this.userMediaSupported = false;
      // });
      try {
        await promise;
      } catch (error) {
        // if (error.name === "NotAllowedError") {
        //   this.error = "ERROR: you need to grant camera access permisson";
        // } else if (error.name === "NotFoundError") {
        //   this.error = "ERROR: no camera on this device";
        // } else if (error.name === "NotSupportedError") {
        //   this.error = "ERROR: secure context required (HTTPS, localhost)";
        // } else if (error.name === "NotReadableError") {
        //   this.error = "ERROR: is the camera already in use?";
        // } else if (error.name === "OverconstrainedError") {
        //   this.error = "ERROR: installed cameras are not suitable";
        // } else if (error.name === "StreamApiNotSupportedError") {
        //   this.error = "ERROR: Stream API is not supported in this browser";
        // } else {
        //   this.error = error.name;
        // }
      }
    }
  }
};
</script>

<style lang="scss">
@import "../document/AddDocuments.scss";
</style>
<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
