<template>
  <div class="app flex-row">
    <div class="w-100 document-list">
      <div class="action-header">
        <h1>My Templates</h1>
        <div class="action-search-field">
          <UserSelect
            v-bind:value="progress_status"
            v-bind:items="['Type', 'All', 'In Progress', 'Completed', 'Declined', 'Voided']"
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
      <hr class="my-4" />
      <div class="actions-table">
        <div class="table-header">
          <div class="d-flex align-items-center">
            <b-check></b-check>
            <div class="col-basic-info comments">SUBJECT</div>
          </div>
          <div class="d-flex align-items-center">
            <div class="column comments">CREATED</div>
            <div class="column comments">LAST CHANGE</div>
            <div class="column comments">№ OF USED</div>
            <div class="column comments">TYPE</div>
            <div class="column comments">AUTHOR</div>
            <div class="column comments col-action">ACTION</div>
          </div>
        </div>
        <div class="table-body">
          <div class="table-row content-card" v-for="(item, index) in templates" :key="index">
            <div class="row-content">
              <div class="d-flex align-items-center">
                <b-check></b-check>
                <div class="col-basic-info">
                  <img :src="getFileType(item.fileName)" class="doc-icon" />
                  <div class="ml-3">
                    <div class="doc-name">{{item.fileName}}</div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center flex-wrap">
                <div class="column">
                  <div >{{getDate(item.created)}}</div>
                  <div class="comments">{{getTime(item.created)}}</div>
                </div>
                <div class="column">
                  <div >{{getDate(item.updated)}}</div>
                  <div class="comments">{{getTime(item.updated)}}</div>
                </div>
                <div class="column">
                  {{item.used}}
                </div>
                <div class="column ">
                  <span><i class="mr-1" v-bind:class="getIcon(item.type)" /> {{item.type}} </span>
                </div>
                <div class="column">
                  {{item.author}}
                </div>
                <div class="column col-action">
                  <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                    <template slot="button-content">
                      <i class="fa fa-ellipsis-h clickable-icon" />
                    </template>
                    <b-dropdown-item>
                      <i class="fa fa-eye" /> Preview
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <i class="fa fa-paper-plane" /> Send for signature
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <i class="fa fa-pencil" /> Edit Template
                    </b-dropdown-item>
                    <b-dropdown-item v-on:click="openShareModal(item)">
                      <i class="fa fa-share-alt" /> Share your template with other users
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
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
    
    <b-modal id="share-modal" ref="share-modal"
       hide-footer centered size="lg">
      <div class="share-modal" v-if="selected_template">
        <div class="title">Do you want to share the XXX template with other users?</div>
        <div class="doc-container mb-4">
          <UserIcon icon="file_name.svg" class="mr-2"/>
          <span> {{selected_template.fileName}}</span>
        </div>
        <div class="doc-container mb-2">
          <div class="doc-tag" v-for="(item, index) in tags" :key="index">
            {{item}} <i class="fa fa-close ml-1"/>
          </div>
        </div>
        <div class="d-flex flex-wrap mb-4">
          <div class="proposed-tag" v-for="(item, index) in proposed_tag" :key="index">
            {{item}}
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary" v-on:click="shareTemplate()">Share this template</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import UserIcon from "../../components/UserIcon";
import UserSelect from "../../components/UserSelect";

export default {
  name: "TemplateList",
  components: {
    UserIcon,
    UserSelect
  },
  data() {
    return {
      currentPage: 1,
      period: "Date",
      progress_status: "Type",
      selected_template: null,
      tags: ["Inquiry", "Report", "Tag #3", "Tag #4", "Tag #5", "Tag 6", "Report", "Tag #3", "Tag #4"],
      proposed_tag: ["Proposed tag", "Example proposed tag", "Proposed tag"],
      templates: [
        {
          setted: false,
          fileName: "Continuous Improvement.pdf",
          created: "04.01.2019 10:12:39 am",
          updated: "21.02.2019 09:24:37 pm",
          used: 3,
          type: "Official",
          author: "Suzanne"
        },
        {
          setted: false,
          fileName: "Continuous Improvement.doc",
          created: "04.01.2019 10:12:39 am",
          updated: "21.02.2019 09:24:37 pm",
          used: 3,
          type: "Shared",
          author: "Suzanne"
        },
        {
          setted: false,
          fileName: "Continuous Improvement.hwp",
          created: "04.01.2019 10:12:39 am",
          updated: "21.02.2019 09:24:37 pm",
          used: 3,
          type: "Mine",
          author: "Suzanne"
        },
        {
          setted: false,
          fileName: "Continuous Improvement.png",
          created: "04.01.2019 10:12:39 am",
          updated: "21.02.2019 09:24:37 pm",
          used: 3,
          type: "Mine",
          author: "Suzanne"
        },
        {
          setted: false,
          fileName: "Continuous Improvement.ppt",
          created: "04.01.2019 10:12:39 am",
          updated: "21.02.2019 09:24:37 pm",
          used: 3,
          type: "Official",
          author: "Suzanne"
        },
        {
          setted: false,
          fileName: "Continuous Improvement.xls",
          created: "04.01.2019 10:12:39 am",
          updated: "21.02.2019 09:24:37 pm",
          used: 3,
          type: "Shared",
          author: "Suzanne"
        },
      ]
    };
  },
  methods: {
    openShareModal(item) {
      this.selected_template = item;
      this.$refs['share-modal'].show();
    },
    shareTemplate() {

    },
    getDate(dt) {
      return dt.substr(0,10);
    },
    getTime (dt){
      return dt.substr(11);
    },
    getIcon(temp_type) {
      if(temp_type=="Official") {
        return "fa fa-star";
      } else if(temp_type == "Mine") {
        return "fa fa-user";
      } else if(temp_type == "Shared") {
        return "fa fa-share-alt"
      }
      return "fa fa-user";
    },
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
@import "./TemplateList.scss";
</style>

