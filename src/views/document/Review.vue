<template>
  <div class="app flex-row">
    <div class="w-100">
      <h1>Review and Send</h1>
      <hr class="mb-4" />
      <div class="row-content">
        <div class="all-recipients">
          <div class="title">TO: ALL RECIIENTS</div>
          <b-form-group>
            <label for="company" class="subtitle mt-4">
              Email Subject
              <span class="text-danger">*</span>
            </label>
            <b-form-input type="text" placeholder="Please CoffeeSign:"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="vat" class="subtitle">Email Message</label>
            <b-form-textarea type="text" placeholder="Enter Message" class="email-msg"></b-form-textarea>
          </b-form-group>
          <div class="subtitle">Expiration</div>
          <div class="d-flex align-items-center mt-3">
            <span>Number of days before request expire:</span>
            <b-input class="ml-3" value="120" style="width: 75px"></b-input>
          </div>
          <div class="d-flex align-items-center mt-3">
            <span>
              Request will be scheduled for expiration on
              <strong>May 1, 2019</strong> at
              <strong>6:59:59 AM</strong>
            </span>
          </div>
        </div>
        <div class="col-right-pannel">
          <div class="content-card">
            <div class="title">DOCUMENTS</div>
            <div class="mt-4">Continuous Improvement lorem ipsum sit dollor amet.doc</div>
            <div class="mt-3">Ad cum numquam efficiantur.pdf</div>
          </div>
          <div class="content-card">
            <div class="title">RECIPIENTS</div>
            <div class="recipients">
              <div class="recipient-item">
                <div class="recipient-number">1</div>
                <div class="info">
                  <div class="w-100 d-flex justify-content-between flex-wrap">
                    <span class="subtitle">Roger Waters</span>
                    <span class="ml-auto">
                      <i class="fa fa-pencil mr-2 comments"></i>
                      <span>Need to sign</span>
                    </span>
                  </div>
                  <div class="comments">roger.waters@email.com</div>
                </div>
              </div>
              <div class="recipient-item">
                <div class="recipient-number">2</div>
                <div class="info">
                  <div class="w-100 d-flex justify-content-between flex-wrap">
                    <span class="subtitle">Barrett Nash-Williams</span>
                    <span class="ml-auto">
                      <UserIcon icon="CC.png" class="mr-2"></UserIcon>
                      <span>Receives a copy</span>
                    </span>
                  </div>
                  <div class="comments">barrett.nash_williams@email.com</div>
                </div>
              </div>
              <div class="recipient-item">
                <div class="recipient-number">3</div>
                <div class="info">
                  <div class="w-100 d-flex justify-content-between flex-wrap">
                    <span class="subtitle">William Jacobson</span>
                    <span class="ml-auto">
                      <UserIcon icon="In personal signer.png" class="mr-2"></UserIcon>
                      <span>In personal signer</span>
                    </span>
                  </div>
                  <div class="comments">William.jacobson@email.com</div>
                </div>
              </div>
            </div>
            <div
              class="comments mt-4"
            >Once the envelope is completed, all recipients will receive a copy of the completed envelope.</div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end pt-4">
        <button
          class="btn btn-outline-primary min-width-124px mr-2"
          v-on:click="moveBackPage()"
        >Back</button>
        <button class="btn btn-primary min-width-124px" v-on:click="moveNextPage()">Send</button>
      </div>
    </div>
    <b-modal id="modal-1" ref="send-modal" hide-footer size="md">
      <div class="send-modal">
        <img src="img/add_doc/send.png" class="mb-4" />
        <h2>You're Done</h2>
        <div
          class="comments text-center py-4"
        >Thank You for using CoffeeSign! After all recipients finish signing, you will recieve an email with a link to the document.</div>
        <button type="submit" class="btn btn-primary">Go to the Home page</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";

export default {
  name: "Review",
  components: {
    UserIcon
  },
  data() {
    return {};
  },
  methods: {
    getFileType(fileName) {
      return "img/add_doc/" + fileName.substr(fileName.length - 3) + ".png";
    },
    moveNextPage() {
      this.$refs["send-modal"].show();
    },
    moveBackPage() {
      this.$router.push("/prepare");
    },
    addRecipient() {
      this.recipients.push({
        sign_type: "Need to sign",
        com_type: false,
        name: "",
        email: "",
        set_password: false,
        password: "",
        confirm_password: ""
      });
    },
    removeRecipient(index) {
      this.recipients.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
@import "./Review.scss";
</style>

