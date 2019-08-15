<template>
  <div class="app flex-row" ref="fileform">
    <div class="w-100 sign-stamp">
      <h1>Signature and Stamp</h1>
      <hr class="mb-4" />
      <div class="row">
        <div class="col-md-6 pr-md-0">
          <div class="content-card">
            <div class="content">
              <div class="d-flex align-items-center">
                <img src="img/icons/contract.svg" />
                <div class="ml-3">
                  <div class="header">Your signature</div>
                  <div class="comments max-width-220px">If you want to add one more signature, click the button</div>
                </div>
              </div>
              <b-button variant="primary" class="my-3" v-on:click="createSignature()">Add one more signature</b-button>
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
              <div class="d-flex align-items-center">
                <img src="img/icons/stamp.svg" />
                <div class="ml-3">
                  <div class="header">Your stamp</div>
                  <div class="comments max-width-220px">If you want to add one more stamp, click the button</div>
                </div>
              </div>
              <b-button variant="primary" class="my-3">Add one more stamp</b-button>
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
    <b-modal id="create-signature-modal" ref="create-signature-modal"
       hide-footer centered size="xl">
      <div class="create-signature-modal">
        <div class="title">Create Your Signature</div>
        <div class="row mb-4">
          <div class="col-4">
            <b-button 
              :variant="sign_type == 0?'primary':'outline-primary'"
              v-on:click="sign_type = 0" block
            >
              Draw
            </b-button>
          </div>
          <div class="col-4">
            <b-button 
              :variant="sign_type == 1?'primary':'outline-primary'"
              v-on:click="sign_type = 1" block
            >
              Type
            </b-button>
          </div>
          <div class="col-4">
            <b-button 
              :variant="sign_type == 2?'primary':'outline-primary'"
              v-on:click="sign_type = 2" block
            >
              Upload
            </b-button>
          </div>
        </div>
        <div class="row mb-4" v-if="sign_type==0">
          <div class="col-8">
            <div class="content-dash draw-signature">
              <div class="draw-placeholder">
                <img src="img/icons/pencil-draw.svg">
                <div class="mt-3">Draw signature</div>
              </div>
            </div>
            <div class="reset">
              <b-button variant="link">
                <i class="fa fa-undo"/> Reset
              </b-button>
            </div>
          </div>
          <div class="col-4">
            <div class="content-dash draw-initials">
              <div class="draw-placeholder">
                <img src="img/icons/pencil-draw.svg">
                <div class="mt-3">Draw Initials</div>
              </div>
            </div>
            <div class="reset">
              <b-button variant="link">
                <i class="fa fa-undo"/> Reset
              </b-button>
            </div>
          </div>
        </div>
        <div class="row mb-4" v-if="sign_type==1">
          <div class="col-12">
            <hr class="w-100"/>  
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="signature"
                    placeholder="signature"
                    name="signature"
                    v-model="signature"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="Initials"
                    placeholder="First Name"
                    name="initials"
                    v-model="initials"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4" v-for="(item, index) in signature_types" :key="index">
                <div class="sign-result" v-bind:class="index==selected_no?'checked':''"
                  v-on:click="selected_no = index"
                >
                  <span class="signature-text">
                    {{signature}}
                  </span>
                  <hr class="hr-bar">
                  <span class="initials-text">
                    {{initials}}
                  </span>
                  <div class="check-box" v-if="index == selected_no">
                    <img src="img/icons/check-2.svg"/>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div class="row mb-4" v-if="sign_type==2">
          <div class="col-8">
            <div class="content-dash draw-signature">
              <div class="draw-placeholder">
                <img src="img/sign/sign1.png">
              </div>
            </div>
            <div class="reset">
              <b-button variant="link">Replace</b-button>
              <span class="mx-2">|</span>
              <b-button variant="link">Remove</b-button>
            </div>
          </div>
          <div class="col-4">
            <div class="content-dash draw-initials">
              <div class="draw-placeholder">
                <img src="img/icons/upload.svg">
                <div class="mt-3">Upload Initials</div>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="footer">
          <div class="summary">
            By clicking Create, I agree that the signature and initials will be the electronic representation of my signature and initials for all purposes when I (or my agent) use them on envelopes, including legally binding contracts - just the same as a pen-and-paper signature or initial.
          </div>
          <div class="buttons">
            <b-button variant="link">
              <span><i class="fa fa-close"></i> Cancel</span>
            </b-button>
            <b-button variant="primary">
              Create
            </b-button>
          </div>
        </div>
      </div>
    </b-modal>
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
      selected_no: 0,
      signature_types: ["","",""],
      signature: "Suzanne Thompson",
      initials: "ST",
      sign_type: 0,
      signatures: ["", "", "", ""],
      stams: ["", "", "", ""]
    };
  },
  methods: {
    createSignature() {
      this.$refs['create-signature-modal'].show();
    }
  }
};
</script>

<style lang="scss">
@import "./Signature.scss";
</style>

