<template>
  <div class="app flex-row">
    <div class="w-100">
      <h1>Add Documents</h1>
      <hr />
      <FileUpload />
      <div class="d-flex justify-content-end pt-4 align-items-center">
        <b-form-checkbox>I am the only signer</b-form-checkbox>
        <button class="btn btn-primary min-width-124px ml-3" v-on:click="moveNextPage()">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from "../../components/FileUpload";

export default {
  name: "AddDocument",
  components: {
    FileUpload
  },
  methods: {
    moveNextPage() {
      this.$router.push("/add-recipients");
    }
  }
};
</script>

<style lang="scss">
@import "./AddDocuments.scss";
</style>

