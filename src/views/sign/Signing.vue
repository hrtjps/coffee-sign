<template>
  <div class="app flex-row">
    <div class="w-100">
      <div class="d-flex justify-content-between align-items-center">
        <b-button variant="outline-primary">
          <UserIcon icon="doc_2.svg" :button="true" />
        </b-button>
        
        <div class="d-flex align-items-center control-actions">
          <b-button variant="outline-primary">
            <UserIcon icon="plus.svg" :button="true" />
          </b-button>
          <UserSelect
            v-bind:value="percent"
            v-bind:items="['10%','20%', '30%', '50%', '75%','100%', '200%']"
            @changeValue="changePercent"
            class="mb-0 mx-2"
          />
          <b-button variant="outline-primary">
            <UserIcon icon="minus.svg" :button="true" />
          </b-button>
        </div>
        <div class="d-flex align-items-center control-actions">
          <b-button variant="outline-primary">
            <UserIcon icon="question_2.svg" :button="true" />
          </b-button>
          <b-button variant="outline-primary" class="mx-2">
            <UserIcon icon="download_3.svg" :button="true" />
          </b-button>
          <b-button variant="outline-primary">
            <UserIcon icon="other.svg" :button="true" />
          </b-button>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-12">
          <div class="sign-history content-card p-5">
            <div v-for="(row_item, index) in sign_items" :key="index" class="doc-control-row">
              <div v-for="(item, index) in row_item" :key="index" class="doc-control">
                <div class="doc-item">
                  <div
                    class="doc-item-control color-signature"
                    v-bind:style="{color: item.color, borderColor: item.color}"
                    :id="`popover-${index}`"
                  >
                    <i :class="item.tool_icon"></i>
                    <span class="ml-2">{{item.tool_name}}</span>
                  </div>
                </div>
                <b-popover :target="`popover-${index}`" placement="bottom">
                  <div class="who-fill">
                    <div class="arrow-popover"></div>
                    <span>Who fills this out?</span>
                    <b-form-select
                      :plain="true"
                      class="mt-2"
                      :options="['Roger Waters','Barrett Nash-Will', 'William Jacobson']"
                      value="Roger Waters"
                    ></b-form-select>
                  </div>
                </b-popover>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <b-button variant="link" class="mr-4" >Finish later</b-button>
        <b-button variant="other" class="min-width-136px" v-on:click="openAgreeModal()">Finish</b-button>
      </div>
    </div>
    <b-modal id="sign-agree-modal" ref="sign-agree-modal"
       hide-footer centered size="xl">
      <div class="sign-agree-modal">
        <div class="text-center"><img src="img/icons/agree.svg" /></div>
        <div class="title">Accept all signatures for electronic signatures</div>
        <div class="agree-items"> 
          <div class="agree-item">
            <i class="fa fa-check mr-2"></i>
            <div class="agree-text">
              I agree to the legal validity of electronic signatures and electronic documents.
            </div>            
          </div>
          <div class="agree-item">
            <i class="fa fa-check mr-2"></i>
            <div class="agree-text">
              The electronic document sent after the signing is accepted as original.
            </div>            
          </div>
          <div class="agree-item">
            <i class="fa fa-check mr-2"></i>
            <div class="agree-text">
              We have verified that all signers have the right to have electronic signatures.
            </div>            
          </div>
          <div class="agree-item">
            <i class="fa fa-check mr-2"></i>
            <div class="agree-text">
              I agree in accordance with the Electronic Signature <b-button variant="link">Terms of Use</b-button> and Electronic Signature <b-button variant="link">Privacy Policy</b-button>.
            </div>            
          </div>
        </div>
        <div class="text-center">
          <b-button variant="outline-primary" class="mr-3" v-on:click="cancelAgree()" >Cancel</b-button>
          <button type="submit" class="btn btn-primary" v-on:click="agreeAll()">I agree and sign it</button>
        </div>
      </div>
    </b-modal>
    
    <b-modal id="sign-waiting-modal" ref="sign-waiting-modal" @hide="closeWaitingModal"
       hide-footer hide-header centered size="xl">
      <div class="sign-waiting-modal">
        <img src="img/icons/sand-clock.svg" />
        <div class="title">
          Please wait few minutes <br>
          this process takes 1-3 minutes
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
import UserSelect from "../../components/UserSelect";
import pdf from "vue-pdf";
import draggable from "vuedraggable";
export default {
  name: "Signing",
  components: {
    pdf,
    UserIcon,
    UserSelect,
    draggable
  },
  data() {
    return {
      sign_items: [
        [
          {
            color: "#ee9964",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-pencil",
            tool_name: "Signature",
          },
          {
            color: "#ee9964",
            icon: "fa fa-building",
            name: "Roger Waters",
            tool_icon: "fa fa-building",
            tool_name: "Company",
          },
          {
            color: "#ee9964",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-user",
            tool_name: "Full Name",
          },
          {
            color: "#ee9964",
            icon: "fa fa-briefcase",
            name: "Roger Waters",
            tool_icon: "fa fa-briefcase",
            tool_name: "Signature",
          },
          {
            color: "#ee9964",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-file-text",
            tool_name: "Text",
          },
          {
            color: "#ee9964",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-calendar",
            tool_name: "Attachments",
          },
        ],
        [
          {
            color: "#ee9964",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-pencil",
            tool_name: "Signature",
          },
          {
            color: " #ef634c",
            icon: "fa fa-building",
            name: "Roger Waters",
            tool_icon: "fa fa-building",
            tool_name: "Company",
          },
          {
            color: " #ef634c",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-user",
            tool_name: "Full Name",
          },
          {
            color: " #ef634c",
            icon: "fa fa-briefcase",
            name: "Roger Waters",
            tool_icon: "fa fa-briefcase",
            tool_name: "Signature",
          },
          {
            color: " #ef634c",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-file-text",
            tool_name: "Text",
          },
          {
            color: " #ef634c",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-calendar",
            tool_name: "Attachments",
          },
        ],
        [
          {
            color: " #775649",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-pencil",
            tool_name: "Signature",
          },
          {
            color: " #775649",
            icon: "fa fa-building",
            name: "Roger Waters",
            tool_icon: "fa fa-building",
            tool_name: "Company",
          },
          {
            color: " #775649",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-user",
            tool_name: "Full Name",
          },
          {
            color: " #775649",
            icon: "fa fa-briefcase",
            name: "Roger Waters",
            tool_icon: "fa fa-briefcase",
            tool_name: "Signature",
          },
          {
            color: " #775649",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-file-text",
            tool_name: "Text",
          },
          {
            color: " #775649",
            icon: "fa fa-user",
            name: "Roger Waters",
            tool_icon: "fa fa-calendar",
            tool_name: "Attachments",
          },
        ],
      ],
      percent: "50%",
      viewSrc: null,
      viewPage: 0,
      currentPage: 0,
      pageCount: 0,
      src: null,
      numPages: undefined
    };
  },
  mounted() {
    this.src = pdf.createLoadingTask("doc/1.pdf");

    this.src.then(pdf => {
      this.numPages = pdf.numPages;
      this.viewPage = 1;
      this.viewSrc = this.src;
    });

    this.$root.$on('finishSign', () => {
      this.openAgreeModal();
    })
  },
  methods: {
    closeWaitingModal() {
      this.$router.push({ path: '/sign/complition' });
    },
    cancelAgree() {
      this.$refs["sign-agree-modal"].hide();
    },
    agreeAll() {
      this.$refs["sign-agree-modal"].hide();
      this.$refs["sign-waiting-modal"].show();
    },
    openAgreeModal() {
      this.$refs["sign-agree-modal"].show();
    },
    changePercent(e) {
      this.percent = e;
    },
    selectPage(src, no) {
      this.viewPage = no;
      this.viewSrc = src;
    }
  }
};
</script>

<style lang="scss">
@import "./Signing.scss";
</style>

