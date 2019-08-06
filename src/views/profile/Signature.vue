<template>
  <div class="app flex-row" ref="fileform">
    <div class="w-100 sign-stamp">
      <h1>Signature and Stamp</h1>
      <hr class="mb-4" />
      <div class="row">
        <div class="col-md-6 pr-md-0">
          <div class="content-card">
            <div class="content">
              <img src="img/icons/contract.png" />
              <div class="ml-3">
                <div class="header">Your signature</div>
                <div class="comments">If you want to add one more signature, click the button</div>
              </div>
            </div>
          </div>

          <div
            class="content-card sign-signature pb-0"
            v-for="(item, index) in signatures"
            :key="index"
          >
            <div class="sign">
              <span>Suzanne Thompson</span>
              <span class="initials ml-3">ST</span>
            </div>
            <div class="actions">
              <div class="action">
                <i class="fa fa-pencil pr-2 clickable-icon"></i> Edit
              </div>
              <div class="action">
                <i class="fa fa-download pr-2 clickable-icon"></i> Download
              </div>
              <div class="action">
                <i class="fa fa-trash pr-2 clickable-icon"></i> Delete
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="content-card">
            <div class="content">
              <img src="img/icons/stamp.png" />
              <div class="ml-3">
                <div class="header">Your stamp</div>
                <div class="comments">If you want to add one more stamp, click the button</div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-wrap">
            <div class="content-card d-flex stamp" v-for="(item, index) in signatures" :key="index">
              <img src="img/payment/stamp.png" />
              <div class="stamp-action">
                <div class="action">
                  <i class="fa fa-pencil pr-2 clickable-icon"></i> Edit
                </div>
                <div class="action">
                  <i class="fa fa-download pr-2 clickable-icon"></i> Download
                </div>
                <div class="action">
                  <i class="fa fa-trash pr-2 clickable-icon"></i> Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
export default {
  name: "SignatureStamp",
  components: {
    UserIcon
  },
  data() {
    return {
      signatures: ["", "", "", ""],
      stams: ["", "", "", ""]
    };
  }
};
</script>

<style lang="scss">
@import "./Signature.scss";
</style>

