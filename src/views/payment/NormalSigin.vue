<template>
  <div class="app flex-row" ref="fileform">
    <div class="w-100 normal-sign">
      <div class="profile-header">
        <div class="user-happy">
          <img src="img/avatars/NoPath@3x.png" />
          <div class="ml-3">
            <h1>We are happy to see you again Suzanne Thompson!</h1>
            <span class="comments">CoffeeSign even takes care reminding our clients!</span>
          </div>
        </div>
        <div class="user-actions">
          <div class="user-action">
            <div class="action-numbers">0</div>
            <div class="action-type">Action Required</div>
          </div>
          <div class="user-action">
            <div class="action-numbers">1</div>
            <div class="action-type">Waiting for Others</div>
          </div>
          <div class="user-plan">
            <div>
              <img src="img/payment/upgrad.png" />
            </div>
            <div class="upgrade-content">
              <div class="upgrade-to">Upgrade to Standard plan</div>
              <div class="comments">Upgrade now and enjoy additional features.</div>
              <b-link class="click-here" v-on:click="upgradePlan()">Click here to upgrade</b-link>
            </div>
          </div>
        </div>
      </div>
      <hr class="mb-4" />
      <div class="row">
        <div class="col-md-5">
          <div class="content-card sign-signature">
            <div class="header">SIGNATURE</div>
            <div class="sign">Suzanne Thompson</div>
          </div>
          <div class="row">
            <div class="col-6 pr-1">
              <div class="content-card sign-signature">
                <div class="header">INITIALS</div>
                <div class="sign initials">ST</div>
                <div class="text-right">
                  <b-button variant="link" class="mr-1">Replace</b-button>|
                  <b-button variant="link" class="ml-1">Remove</b-button>
                </div>
              </div>
            </div>
            <div class="col-6 pl-1">
              <div class="content-card sign-signature">
                <div class="header">STAMP</div>
                <div class="sign">
                  <img src="img/payment/stamp.png" />
                </div>
                <div class="text-right">
                  <b-button variant="link" class="mr-1">Upload</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <FileUpload />
        </div>
      </div>
    </div>
    <div class="message">
      <UserIcon icon="msg-smile.png" />
    </div>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
import FileUpload from "../../components/FileUpload";
export default {
  name: "NormalSign",
  components: {
    FileUpload,
    UserIcon
  },
  methods: {
    upgradePlan() {
      this.$router.push({ path: "/payment/upgrade-plan" });
    }
  }
};
</script>

<style lang="scss">
@import "./NormalSigin.scss";
@import "../document/AddDocuments.scss";
</style>

