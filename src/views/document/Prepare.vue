<template>
  <div class="app flex-row">
    <div class="w-100">
      <div class="d-flex justify-content-between align-items-center">
        <h1>Prepare document</h1>
        <div class="d-flex align-items-center control-actions">
          <b-button variant="outline-primary">
            <UserIcon icon="past_changes.svg" :button="true" />
          </b-button>
          <b-button variant="outline-primary">
            <UserIcon icon="next_changes.svg" :button="true" />
          </b-button>
          <UserSelect
            v-bind:value="percent"
            v-bind:items="['10%','20%', '30%', '50%', '75%','100%', '200%']"
            @changeValue="changePercent"
            class="mb-0 mx-2"
          />
          <b-button variant="outline-primary">
            <UserIcon icon="comment.svg" :button="true" />
          </b-button>
        </div>
      </div>
      <hr class="mb-4" />
      <div class="row">
        <div class="col-md-9 pr-3 pr-sm-0">
          <div class="doc-container">
            <div class="d-flex flex-wrap mb-5">
              <div class="doc-control">
                <div class="doc-item" id="signature">
                  <i class="fa fa-navicon control"></i>
                  <div class="doc-item-control color-signature">
                    <i class="fa fa-pencil"></i>
                    <span class="ml-2">Signature</span>
                  </div>
                  <i class="fa fa-times-circle-o control"></i>
                </div>
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
              </div>

              <div class="doc-control">
                <div class="doc-item">
                  <i class="fa fa-navicon control"></i>
                  <div class="doc-item-control color-full-name">
                    <i class="fa fa-user"></i>
                    <span class="ml-2">Full Name</span>
                  </div>
                  <i class="fa fa-times-circle-o control"></i>
                </div>

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
              </div>
              <div class="doc-control">
                <div class="doc-item">
                  <i class="fa fa-navicon control"></i>
                  <div class="doc-item-control color-company">
                    <i class="fa fa-building"></i>
                    <span class="ml-2">Company</span>
                  </div>
                  <i class="fa fa-times-circle-o control"></i>
                </div>

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
              </div>
              <div class="doc-control">
                <div class="doc-item">
                  <i class="fa fa-navicon control"></i>
                  <div class="doc-item-control color-title">
                    <i class="fa fa-briefcase"></i>
                    <span class="ml-2">Title</span>
                  </div>
                  <i class="fa fa-times-circle-o control"></i>
                </div>
                <div class="doc-item">
                  <i class="fa fa-navicon control"></i>
                  <div class="doc-item-control color-company">
                    <i class="fa fa-file-text"></i>
                    <span class="ml-2">Dropdown</span>
                  </div>
                  <i class="fa fa-times-circle-o control"></i>
                </div>
                <div class="who-fill">
                  <div class="arrow-popover"></div>
                  <span>Who fills this out?</span>
                  <b-form-select
                    :plain="true"
                    class="mt-2"
                    :options="['Roger Waters','Barrett Nash-Will', 'William Jacobson']"
                    value="Roger Waters"
                  ></b-form-select>
                  <div class="mt-3">Enter value</div>
                  <b-input class="mt-2"></b-input>
                  <div class="add-one-more mt-3">
                    <i class="fa fa-plus-circle"></i>
                    <span>Add one more</span>
                  </div>
                </div>
              </div>
              <div class="doc-control">
                <div class="doc-item">
                  <i class="fa fa-navicon control"></i>
                  <div class="doc-item-control color-text">
                    <i class="fa fa-file-text"></i>
                    <span class="ml-2">Text</span>
                  </div>
                  <i class="fa fa-times-circle-o control"></i>
                </div>
                <div class="doc-item">
                  <i class="fa fa-navicon control"></i>
                  <div class="doc-item-control color-attachment">
                    <i class="fa fa-file-text"></i>
                    <span class="ml-2">Attachments</span>
                  </div>
                  <i class="fa fa-times-circle-o control"></i>
                </div>
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
              </div>
              <div class="doc-control">
                <div class="doc-item">
                  <i class="fa fa-navicon control"></i>
                  <div class="doc-item-control color-date-signed">
                    <i class="fa fa-calendar"></i>
                    <span class="ml-2">MM/DD/YYYY</span>
                  </div>
                  <i class="fa fa-times-circle-o control"></i>
                </div>

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
              </div>
              <div class="doc-control">
                <div class="doc-item">
                  <div class="doc-item-control color-signature icon">
                    <i class="fa fa-square-o"></i>
                  </div>
                  <div class="doc-item-control color-text icon">
                    <i class="fa fa-circle-o"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="doc-content w-100 mb-5">
              <pdf :src="viewSrc" class="w-100" :page="viewPage"></pdf>
            </div>
          </div>
        </div>
        <div class="col-md-3 pl-3">
          <div class="content-container">
            <div class="documents">
              <div class="title">
                <span>DOCUMENTS</span>
                <div class="actions">
                  <i class="fa fa-rotate-left mr-2 clickable-icon"></i>
                  <i class="fa fa-rotate-right mr-2 clickable-icon"></i>
                  <i class="fa fa-trash clickable-icon"></i>
                </div>
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
            <div class="details-right">
              <i class="fa fa-chevron-right"></i>
            </div>
          </div>
          <div class="d-flex justify-content-end flex-wrap pt-4">
            <button
              class="btn btn-outline-primary min-width-124px m-1"
              v-on:click="moveBackPage()"
            >Back</button>
            <button class="btn btn-primary min-width-124px m-1" v-on:click="moveNextPage()">Next</button>
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

export default {
  name: "Prepare",
  components: {
    pdf,
    UserIcon,
    UserSelect
  },
  data() {
    return {
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
@import "./Prepare.scss";
</style>

