<template>
  <div class="app flex-row">
    <div class="w-100">
      <div class="action-header">
        <h1>Action Required</h1>
        <div class="action-search-field">
          <b-form-select class="mr-3 max-height-43px"
            :plain="true"
            :options="['In Progress', 'Checking', 'Completed']"
            value="In Progress">
          </b-form-select>
          <b-form-select class="mr-3 max-height-43px"
            :plain="true"
            :options="['Last 6 Months', 'Last a Month', 'Last a Week', 'Last a Day']"
            value="Last 6 Months">
          </b-form-select>
          <b-input-group class="max-height-43px min-width-230px">
            <b-form-input placeholder="Type here to search...*" autocomplete="current-password" ></b-form-input>
            <b-input-group-prepend class="mr-0">
              <b-input-group-text class="h-auto"><i class="fa fa-search"></i></b-input-group-text>
            </b-input-group-prepend>
          </b-input-group>
        </div>
      </div>
      <hr class="mb-4"/>
      <div class="actions-table">
        <div class="table-header">
          <div class="d-flex align-items-center">
            <b-check></b-check>
            <div class="col-basic-info comments">BASIC INFO</div>
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
                  <img :src="getFileType('Continuous Improvement.pdf')">
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
                  <div class="status completed">
                    Completed
                  </div>
                </div>
                <div class="col-last-change comments">
                  <div class="date">01.04.2019</div>
                  <div class="comments">11:03:53 am</div>
                </div>
                <div class="col-action comments">
                  <i class="fa fa-ellipsis-h mr-3"></i>
                  <i v-b-toggle.collapse1 class="fa fa-caret-down"></i>
                </div>
              </div>
            </div>
            <b-collapse id="collapse1" class="row-body">
              <div class="row-detail add-margin-left">
                <div class="d-flex align-items-center">
                  <div class="col-basic-info remove-margin-left">
                    <img src="img/avatars/suzanne.png">
                    <div class="ml-3">
                      <div class="user-name">Suzanne Martin</div>
                      <div class="comments">Sign status:</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="col-status">
                    <div class="status completed">
                      Completed
                    </div>
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
                    <img src="img/avatars/scott.png">
                    <div class="ml-3">
                      <div class="user-name">Scott Wilkerson</div>
                      <div class="comments">Sign status:</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="col-status">
                    <div class="status waiting">
                      Waiting to sign
                    </div>
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
                    <img src="img/avatars/suzanne.png">
                    <div class="ml-3">
                      <div class="user-name">Suzanne Martin</div>
                      <div class="comments">Sign status:</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="col-status">
                    <div class="status completed">
                      Completed
                    </div>
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
                  <img :src="getFileType('Continuous Improvement.pdf')">
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
                  <img :src="getFileType('Continuous Improvement.pdf')">
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
                  <div class="status completed">
                    Completed
                  </div>
                </div>
                <div class="col-last-change comments">
                  <div class="date">01.04.2019</div>
                  <div class="comments">11:03:53 am</div>
                </div>
                <div class="col-action comments">
                  <i class="fa fa-ellipsis-h mr-3"></i>
                  <i v-b-toggle.collapse2 class="fa fa-caret-down"></i>
                </div>
              </div>
            </div>
            <b-collapse id="collapse2" class="row-body" visible>
              <div class="row-detail add-margin-left">
                <div class="d-flex align-items-center">
                  <div class="col-basic-info remove-margin-left">
                    <img src="img/avatars/suzanne.png">
                    <div class="ml-3">
                      <div class="user-name">Suzanne Martin</div>
                      <div class="comments">Sign status:</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="col-status">
                    <div class="status completed">
                      Completed
                    </div>
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
                    <img src="img/avatars/scott.png">
                    <div class="ml-3">
                      <div class="user-name">Scott Wilkerson</div>
                      <div class="comments">Sign status:</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="col-status">
                    <div class="status waiting">
                      Waiting to sign
                    </div>
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
                    <img src="img/avatars/suzanne.png">
                    <div class="ml-3">
                      <div class="user-name">Suzanne Martin</div>
                      <div class="comments">Sign status:</div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="col-status">
                    <div class="status completed">
                      Completed
                    </div>
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
                  <img :src="getFileType('Continuous Improvement.pdf')">
                  <div class="doc-name mt-3">Continuous Improvement</div>
                  <div class="senders comments">5 pages</div>
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <span class="comments mr-3">(1~25/57) Per page</span>
          <span class="mr-3"><strong>10</strong></span>
          <span class="mr-3 comments">25</span>
          <span class="mr-3 comments">50</span>
          <span class="mr-3 comments">100</span>
        </div>

        <b-pagination align="right" :total-rows="100" v-model="currentPage" :per-page="10">
            </b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from '../../components/UserIcon'

export default {
  name: "ActionRequired",
  components: {
    UserIcon
  },
  data() {
    return {
      currentPage: 1,
      actions: [
        {
          setted: false,
          fileName: "Continuous Improvement.pdf"
        },
      ]
    }

  },
  methods: {
    getFileType(fileName){ 
      return "img/add_doc/" + fileName.substr(fileName.length - 3 )+".png";
    },
  }
};
</script>

<style lang="scss">
@import "./ActionRequired.scss";
</style>

