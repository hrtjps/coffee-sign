<template>
  <div class="app flex-row">
    <div class="w-100">
      <div class="action-header">
        <h1>Document List</h1>
        <div class="action-search-field">
          <UserSelect
            v-bind:value="progress_status"
            v-bind:items="['Status', 'All', 'In Progress', 'Completed', 'Declined', 'Voided']"
            @changeValue="changeProgressStatus"
            class="mb-0 mx-1"
          />
          <UserSelect
            v-bind:value="period"
            v-bind:items="['Date', 'Last 24 Hours', 'Last Week', 'Last 30 Days', 'Last 6 Months', 'Custom']"
            @changeValue="changePeriod"
            class="mb-0 mx-1"
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
            <div class="col-basic-info comments">Document Subject</div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-status comments">STATUS</div>
            <div class="col-last-change comments">LAST CHANGE</div>
            <div class="col-action comments">ACTION</div>
          </div>
        </div>
        <div class="table-body">
          <div class="table-row content-card">
            <div class="row-content">
              <div class="d-flex align-items-center">
                <b-check></b-check>
                <div class="col-basic-info">
                  <img :src="getFileType('Continuous Improvement.pdf')" />
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
                  <i class="fa fa-ellipsis-h mr-3" v-b-toggle.collapse1></i>
                  <b-dropdown variant="link">
                    <b-dropdown-item>Create a copy</b-dropdown-item>
                    <b-dropdown-item>Save as template</b-dropdown-item>
                    <b-dropdown-item>History</b-dropdown-item>
                    <b-dropdown-item>Export as CSV</b-dropdown-item>
                    <b-dropdown-item>Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
            <b-collapse id="collapse1" class="row-body">
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
                  <img :src="getFileType('Continuous Improvement.pdf')" />
                  <div class="doc-name mt-3">Continuous Improvement</div>
                  <div class="senders comments">5 pages</div>
                </div>
              </div>
            </b-collapse>
          </div>
          <div class="table-row content-card">
            <div class="row-content">
              <div class="d-flex align-items-center">
                <b-check></b-check>
                <div class="col-basic-info">
                  <img :src="getFileType('Continuous Improvement.pdf')" />
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
                  <i class="fa fa-ellipsis-h mr-3" v-b-toggle.collapse2></i>
                  <b-dropdown variant="link">
                    <b-dropdown-item>Create a copy</b-dropdown-item>
                    <b-dropdown-item>Save as template</b-dropdown-item>
                    <b-dropdown-item>History</b-dropdown-item>
                    <b-dropdown-item>Export as CSV</b-dropdown-item>
                    <b-dropdown-item>Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
            <b-collapse id="collapse2" class="row-body" visible>
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
                  <img :src="getFileType('Continuous Improvement.pdf')" />
                  <div class="doc-name mt-3">Continuous Improvement</div>
                  <div class="senders comments">5 pages</div>
                </div>
              </div>
            </b-collapse>
          </div>
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
      return "img/add_doc/" + fileName.substr(fileName.length - 3) + ".png";
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

