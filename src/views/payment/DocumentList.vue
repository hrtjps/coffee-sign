<template>
  <div class="app flex-row">
    <div class="w-100 document-list">
      <div class="action-header">
        <h1>Document List</h1>
        <div class="action-search-field">
          <UserSelect
            v-bind:value="progress_status"
            v-bind:items="['Status', 'All', 'In Progress', 'Completed', 'Declined', 'Voided']"
            @changeValue="changeProgressStatus"
            class="mb-0 mx-1 mobile-style"
          />
          <UserSelect
            v-bind:value="period"
            v-bind:items="['Date', 'Last 24 Hours', 'Last Week', 'Last 30 Days', 'Last 6 Months', 'Custom']"
            @changeValue="changePeriod"
            class="mb-0 mx-1 mobile-style"
          />
          <b-input-group class="min-width-378px ml-1">
            <b-form-input placeholder="Type here to search..." autocomplete="current-password"></b-form-input>
            <b-input-group-prepend class="mr-0">
              <b-input-group-text class="h-auto">
                <i class="fa fa-search"></i>
              </b-input-group-text>
            </b-input-group-prepend>
          </b-input-group>
        </div>
      </div>
      <hr class="mb-4" />
      <div class="actions-table">
        <div class="table-header">
          <div class="d-flex align-items-center">
            <b-check></b-check>
            <div class="col-basic-info comments">DOCUMENT SUBJECT</div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-status comments">STATUS</div>
            <div class="col-last-change comments">LAST CHANGE</div>
            <div class="col-action comments">HISTORY</div>
          </div>
        </div>
        <div class="table-body">
          <b-dropdown variant="link" right toggle-class="text-decoration-none" no-caret 
            class="table-row content-card" v-for="(item, index) in doc_list" :key="index">
            <template slot="button-content">
              <div class="row-content">
                <div class="d-flex align-items-center">
                  <b-check></b-check>
                  <div class="col-basic-info">
                    <img :src="getFileType('Continuous Improvement.doc')" class="doc-icon" />
                    <div class="ml-3">
                      <div class="doc-name">Continuous Improvement</div>
                      <div class="senders comments">
                        to me
                        <span>, Scott Wilkerson</span>
                        <span>, Hannah Harmon</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="col-status">
                    <div class="status completed">Completed</div>
                  </div>
                  <div class="col-last-change comments">
                    <div class="date">01.04.2019</div>
                    <div class="comments">11:03:53 am</div>
                  </div>
                  <div class="col-action comments">
                    <i class="fa fa-caret-down" v-b-toggle="'collapse'+index.toString()"></i>
                  </div>
                </div>
              </div>
              <b-collapse :id="'collapse'+index.toString()" class="row-body">
                <div class="row-detail add-margin-left">
                  <div class="d-flex align-items-center">
                    <div class="col-basic-info remove-margin-left">
                      <img src="img/avatars/suzanne.png" />
                      <div class="ml-3">
                        <div class="user-name">Suzanne Martin</div>
                        <div class="comments">Sign status:</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="col-status">
                      <div class="status completed">Completed</div>
                    </div>
                    <div class="col-last-change">
                      <div class="date">01.04.2019</div>
                      <div class="comments">11:03:53 am</div>
                    </div>
                    <div class="col-action comments"></div>
                  </div>
                </div>
                <div class="row-detail add-margin-left">
                  <div class="d-flex align-items-center">
                    <div class="col-basic-info remove-margin-left">
                      <img src="img/avatars/scott.png" />
                      <div class="ml-3">
                        <div class="user-name">Scott Wilkerson</div>
                        <div class="comments">Sign status:</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="col-status">
                      <div class="status waiting">Waiting to sign</div>
                    </div>
                    <div class="col-last-change">
                      <div class="date">01.04.2019</div>
                      <div class="comments">11:03:53 am</div>
                    </div>
                    <div class="col-action comments"></div>
                  </div>
                </div>
                <div class="row-detail add-margin-left border-bottom-0">
                  <div class="d-flex align-items-center">
                    <div class="col-basic-info remove-margin-left">
                      <img src="img/avatars/suzanne.png" />
                      <div class="ml-3">
                        <div class="user-name">Suzanne Martin</div>
                        <div class="comments">Sign status:</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="col-status">
                      <div class="status completed">Completed</div>
                    </div>
                    <div class="col-last-change">
                      <div class="date">01.04.2019</div>
                      <div class="comments">11:03:53 am</div>
                    </div>
                    <div class="col-action comments"></div>
                  </div>
                </div>
                <div class="user-document">
                  <div class="doc-div">
                    <img :src="getFileType('Continuous Improvement.doc')" class="doc-icon" />
                    <div class="doc-name mt-2">Continuous Improvement</div>
                    <div class="senders comments">5 pages</div>
                  </div>
                </div>
              </b-collapse>
            </template>
            <b-dropdown-item>Create a copy</b-dropdown-item>
            <b-dropdown-item>Save as template</b-dropdown-item>
            <b-dropdown-item>History</b-dropdown-item>
            <b-dropdown-item>Export as CSV</b-dropdown-item>
            <b-dropdown-item>Delete</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        <div class="d-flex justify-content-between align-items-center flex-wrap">
          <span class="comments mr-3">Per page</span>
          <div>
            <span class="mr-3">
              <strong>10</strong>
            </span>
            <span class="mr-3 comments">25</span>
            <span class="mr-3 comments">50</span>
            <span class="mr-3 comments">100</span>
          </div>
        </div>

        <b-pagination align="right" :total-rows="100" v-model="currentPage" :per-page="10"></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
import UserSelect from "../../components/UserSelect";

export default {
  name: "DocumentList",
  components: {
    UserIcon,
    UserSelect
  },
  data() {
    return {
      doc_list: ["", ""],
      currentPage: 1,
      period: "Date",
      progress_status: "Status",
      actions: [
        {
          setted: false,
          fileName: "Continuous Improvement.pdf"
        }
      ]
    };
  },
  methods: {
    getFileType(fileName) {
      return "img/icons/" + fileName.substr(fileName.length - 3) + ".svg";
    },
    changePeriod(e) {
      this.period = e;
    },
    changeProgressStatus(e) {
      this.progress_status = e;
    }
  }
};
</script>

<style lang="scss">
@import "./DocumentList.scss";
</style>

