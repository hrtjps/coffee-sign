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
          <b-button variant="outline-primary">
            <UserIcon icon="download_3.svg" :button="true" />
          </b-button>
          <b-button variant="outline-primary">
            <UserIcon icon="other.svg" :button="true" />
          </b-button>
        </div>
      </div>
      <hr class="mb-0"/>
      <div class="row">
        <div class="col-md-3 pr-3 ">
          <div class="content-container">
            <div class="documents">
              <div class="title">
                <span>DOCUMENTS</span>
              </div>
              <hr />
              <div class="documents-list">
                <div class="document-content">
                  <div class="collapse-header item-title" v-b-toggle.collapse1>
                    <span>Continuous Improvement lorem ipsum sit dollor amet.doc</span>
                    <span class="collapse-icon">
                      <i class="fa fa-caret-down"></i>
                    </span>
                    <!-- <i class="collapse-icon"></i> -->
                  </div>
                  <b-collapse id="collapse1" class="item-pages" visible>
                    <div
                      class="page-content"
                      v-for="i in numPages"
                      :key="i"
                      v-on:click="selectPage(src, i)"
                    >
                      <pdf
                        :src="src"
                        :page="i"
                        class="pdf-content"
                        v-bind:class="i==viewPage?'selected-pdf':''"
                      ></pdf>
                      <div class="page-no">{{i}}</div>
                    </div>
                  </b-collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9 pl-3 pl-sm-0">
          <div class="p-4">
            <div class="content-card mb-4">
              <pdf :src="viewSrc" class="w-100" :page="viewPage"></pdf>
            </div>
          </div>
          <div class="text-center">
            <b-button variant="link" class="mr-5" >Sign later</b-button>
            <b-button variant="other" class="px-5">Start Signing</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
import UserSelect from "../../components/UserSelect";
import pdf from "vue-pdf";
import draggable from "vuedraggable";
export default {
  name: "SignCheck",
  components: {
    pdf,
    UserIcon,
    UserSelect,
    draggable
  },
  data() {
    return {
      sign_items: [],
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
  },
  methods: {
    changePercent(e) {
      this.percent = e;
    },
    selectPage(src, no) {
      this.viewPage = no;
      this.viewSrc = src;
    },
    moveNextPage() {
      this.$router.push("/docu-sign/review");
    },
    moveBackPage() {
      this.$router.push("/docu-sign/add-recipients");
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
@import "./SignCheck.scss";
</style>

