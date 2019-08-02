<template>
  <div class="app flex-row" ref="fileform">
    <div class="w-100">
      <h1>Custom Branding</h1>
      <hr class="mb-4" />
      <div class="row">
        <div class="col-md-4 pr-md-0">
          <div class="content-card">
            <div class="content-header">
              <strong>Sender’s Info - You can customize sender’s information here:</strong>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="Name"
                placeholder="Name"
                name="name"
                value="Axisbits"
                required
                :readonly="!edit_name"
              />
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <b-button variant="link" :disabled="edit_name" v-on:click="editName()">Edit Name</b-button>
              <div class="d-flex align-items-center">
                <b-button
                  class="mr-2"
                  variant="link"
                  v-if="edit_name"
                  v-on:click="cancelName()"
                >Cancel</b-button>
                <b-button
                  variant="primary"
                  :disabled="!edit_name"
                  v-on:click="saveName()"
                >Save Changes</b-button>
              </div>
            </div>
          </div>
          <div class="content-card">
            <div class="content-header">
              <strong>Email Style - Custom Branding</strong>
            </div>
            <div
              class="comments"
            >The email style is a feature that allows you to change the logo image, style, and intro text of your electronic contract email. (KakaoTalk message is not supported)</div>
            <b-button variant="link" class="mb-3">Learn more</b-button>

            <div class="form-group">
              <label>Logo Image</label>
              <div class="logo-img">
                <img src="img/profile/logo_axisbits.png" />
              </div>
            </div>
            <b-button variant="link">Change logo</b-button>
            <hr class="mb-4" />
            <div class="form-group">
              <label>
                Logo Link
                <i class="fa fa-question-circle clickable-icon" id="logo-link-tooltip"></i>
                <b-tooltip
                  target="logo-link-tooltip"
                  placement="topright"
                >Lorem ipsum dolor sit amet, sed adipisci efficiendi ne.</b-tooltip>
              </label>
              <input
                type="text"
                class="form-control"
                id="logo_link"
                placeholder="Logo Link"
                name="logo_link"
                value="https://www.axisbits.com"
                :disabled="!edit_field"
              />
            </div>
            <div class="form-group">
              <label>
                Explanation
                <i class="fa fa-question-circle clickable-icon" id="exp-tooltip"></i>
                <b-tooltip
                  target="exp-tooltip"
                  placement="topright"
                >Lorem ipsum dolor sit amet, sed adipisci efficiendi ne.</b-tooltip>
              </label>
              <input
                type="text"
                class="form-control"
                id="logo_link"
                placeholder="Explanation"
                name="logo_link"
                value="Easy Electronic Contract Signed All"
                :disabled="!edit_field"
              />
            </div>
            <div class="form-group">
              <label>
                Top/Button Color
                <i
                  class="fa fa-question-circle clickable-icon"
                  id="top-color-tooltip"
                ></i>
                <b-tooltip
                  target="top-color-tooltip"
                  placement="topright"
                >Lorem ipsum dolor sit amet, sed adipisci efficiendi ne.</b-tooltip>
              </label>
              <div
                class="select-color"
                v-bind:class="edit_field?'enable':''"
                v-b-toggle="edit_field?'top-color-collapse':''"
              >
                <div class="color-pan" v-bind:style="{backgroundColor: top_color}"></div>
                <div class="color-text">{{top_color}}</div>
              </div>
              <b-collapse id="top-color-collapse" v-if="edit_field" class="color-collapse">
                <UserColorPicker @changeValue="top_color = $event"></UserColorPicker>
              </b-collapse>
            </div>
            <div class="form-group">
              <label>
                Button Color
                <i
                  class="fa fa-question-circle clickable-icon"
                  id="button-color-tooltip"
                ></i>
                <b-tooltip
                  target="button-color-tooltip"
                  placement="topright"
                >Lorem ipsum dolor sit amet, sed adipisci efficiendi ne.</b-tooltip>
              </label>
              <div
                class="select-color"
                v-bind:class="edit_field?'enable':''"
                v-b-toggle="edit_field?'button-color-collapse':''"
              >
                <div class="color-pan" v-bind:style="{backgroundColor: button_color}"></div>
                <div class="color-text">{{button_color}}</div>
              </div>
              <b-collapse id="button-color-collapse" v-if="edit_field" class="color-collapse">
                <UserColorPicker @changeValue="button_color = $event"></UserColorPicker>
              </b-collapse>
            </div>
            <div class="form-group">
              <label>
                Button Text Color
                <i
                  class="fa fa-question-circle clickable-icon"
                  id="button-text-color-tooltip"
                ></i>
                <b-tooltip
                  target="button-text-color-tooltip"
                  placement="topright"
                >Lorem ipsum dolor sit amet, sed adipisci efficiendi ne.</b-tooltip>
              </label>
              <div
                class="select-color"
                v-bind:class="edit_field?'enable':''"
                v-b-toggle="edit_field?'button-text-color-collapse':''"
              >
                <div class="color-pan" v-bind:style="{backgroundColor: button_text_color}"></div>
                <div class="color-text">{{button_text_color}}</div>
              </div>
              <b-collapse id="button-text-color-collapse" v-if="edit_field" class="color-collapse">
                <UserColorPicker @changeValue="button_text_color = $event"></UserColorPicker>
              </b-collapse>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <b-button variant="link" :disabled="edit_field" v-on:click="editField()">Edit fields</b-button>
              <div class="d-flex align-items-center">
                <b-button
                  class="mr-2"
                  variant="link"
                  v-if="edit_field"
                  v-on:click="cancelField()"
                >Cancel</b-button>
                <b-button
                  variant="primary"
                  :disabled="!edit_field"
                  v-on:click="saveField()"
                >Save Changes</b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="content-card">
            <div class="doc-format">
              <div class="doc-header">
                <img src="img/profile/logo_axisbits_sm.png" />
                <span>Easy Electronic Contract Signed All</span>
              </div>
              <div class="doc-content">
                <div class="doc-title">Its time to sign</div>
                <div class="text-center mt-3 mb-4">
                  Please verify the signature information.
                  <br />Press the button below to go to the page that can be signed.
                </div>
                <div class="doc-item doc-top-border">
                  <span class="comments">Document name:</span>
                  <span class="ml-3">Hong Gil-dong salary contract</span>
                </div>
                <div class="doc-item">
                  <span class="comments">Document name:</span>
                  <span class="ml-3">Continuous Improvement lorem ipsum sit dollor amet</span>
                </div>
                <div class="doc-item">
                  <span class="comments">Document name:</span>
                  <span class="ml-3">Hong Gil-dong salary contract</span>
                </div>
                <b-button
                  block
                  v-bind:style="{backgroundColor: button_color, color: button_text_color}"
                  class="mt-4"
                >Checking and Signing Content</b-button>
              </div>
            </div>
            <div class="doc-format">
              <div class="doc-content">
                <div class="doc-subtitle">Do not share links with email.</div>
                <div
                  class="doc-text mb-4"
                >If you share a link with this message, unauthorized third parties can verify and sign the content. Signing is not responsible for any problems that occur at this time.</div>
                <div class="doc-subtitle">Do not share links with email.</div>
                <div
                  class="doc-text"
                >If you share a link with this message, unauthorized third parties can verify and sign the content. Signing is not responsible for any problems that occur at this time.</div>
              </div>
            </div>
            <div class="doc-footer doc-text">
              This message is sent only and can not be replying.
              <br />For inquiries, please use the customer center . © 2016-2019. Modusign Inc. All rights reserved. Terms of Use | Privacy Policy | Service center
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
import UserSelect from "../../components/UserSelect";
import UserColorPicker from "../../components/UserColorPicker";
export default {
  name: "CustomBranding",
  components: {
    UserIcon,
    UserSelect,
    UserColorPicker
  },
  data() {
    return {
      edit_name: false,
      edit_field: false,
      top_color: "#F0F0F5",
      button_color: "#6299F8",
      button_text_color: "#FFFFFF"
    };
  },
  methods: {
    editName() {
      this.edit_name = true;
    },
    saveName() {
      this.edit_name = false;
    },
    cancelName() {
      this.edit_name = false;
    },
    editField() {
      this.edit_field = true;
    },
    saveField() {
      this.edit_field = false;
    },
    cancelField() {
      this.edit_field = false;
    }
  }
};
</script>

<style lang="scss">
@import "./CustomBranding.scss";
</style>

